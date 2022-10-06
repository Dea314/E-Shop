//const { response } = require("express");
const recordsPerPage = require("../config/pagination");
const Product = require("../models/ProductModel");

// filter by price, rating, category

const getProducts = async (req, res, next) => {
  try {
    let query = {};
    let queryCondition = false;

    let priceQueryCondition = {};
    if (req.query.price) {
      queryCondition = true;
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }
    let ratingQueryCondition = {};
    if (req.query.rating) {
      queryCondition = true;
      ratingQueryCondition = { rating: { $in: req.query.rating.split(",") } };
    }
    let categoryQueryCondition = {};
    const categoryName = req.params.categoryName || "";
    if (categoryName) {
      queryCondition = true;
      let a = categoryName.replaceAll(",", "/");
      let regEx = new RegExp("^" + a);
      categoryQueryCondition = { category: regEx };
    }

    if (req.query.category) {
      queryCondition = true;
      let a = req.query.category.split(",").map((item) => {
        if (item) return new RegExp("^" + item);
      });

      categoryQueryCondition = { category: { $in: a } };
    }

    // filter by attributes

    let attrsQueryCondition = [];
    if (req.query.attrs) {
      // attrs = RAM-1TB-2TB-4TB,color-blue-black-red
      // ['RAM-1TB-2TB-4TB, color-blue-black-red']

      attrsQueryCondition = req.query.attrs.split(",").reduce((acc, item) => {
        if (item) {
          let a = item.split("-");
          let values = [...a];
          values.shift(); // remove first element
          let a1 = {
            attrs: { $elemeMatch: { key: a[0], value: { $in: values } } },
          };
          acc.push(a1);
          // console.dir(acc, { depth: null });
          return acc;
        } else {
          return acc;
        }
      }, []);
      // console.dir(attrsQueryCondition, { depth: null });
      queryCondition = true;
    }

    // pagination logic
    const pageNum = Number(req.query.pageNum) || 1;

    // sort by name, price etc
    let sort = {};
    const sortOption = req.query.sort || "";
    if (sortOption) {
      let sortOpt = sortOption.split("_");
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
      console.log(sort);
    }

    const searchQuery = req.params.searchQuery || "";
    let searchQueryCondition = {};
    let select = {};
    if (searchQuery) {
      queryCondition = true;
      searchQueryCondition = {
        $text: { $search: searchQuery },
      };
      select = { score: { $meta: "textScore" } };
      sort = { score: { $meta: "textScore" } };
    }

    if (queryCondition) {
      query = {
        $and: [
          priceQueryCondition,
          ratingQueryCondition,
          categoryQueryCondition,
          searchQueryCondition,
          ...attrsQueryCondition,
        ],
      };
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
      .select(select)
      .skip(recordsPerPage * (pageNum - 1))
      .sort(sort)
      .limit(recordsPerPage);
    res.json({
      products,
      pageNum,
      paginationLinksNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate("reviews")
      .orFail();
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const getBestSellers = async (req, res, next) => {
  try {
    const products = await Product.aggregate([
      { $sort: { category: 1, sales: -1 } }, // sort ascend by category and desc by sales
      {
        $group: { _id: "$category", doc_with_max_sales: { $first: "$$ROOT" } },
      }, // first item of category with max sales
      { $replaceWith: "$doc_with_max_sales" }, // replace with first item
      { $match: { sales: { $gt: 0 } } }, // match only items with sales > 0
      { $project: { _id: 1, name: 1, images: 1, category: 1, description: 1 } }, // select only those fields
      { $limit: 3 },
    ]);
    res.json(products);
  } catch (error) {
    next(error);
  }
};

// admin routes - get, delete, create, update
const adminGetProducts = async (req, res, next) => {
  try {
    const products = await Product.find({})
      .sort({ category: 1 })
      .select("name price category"); // fetch all products and sort asc by name, price and category
    return res.json(products);
  } catch (error) {
    next(error);
  }
};

const adminDeleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).orFail;
    await product.remove;
    res.json({ message: "Product removed" });
  } catch (error) {
    next(error);
  }
};

const adminCreateProduct = async (req, res, next) => {
  try {
    const product = new Product();
    const { name, description, count, price, category, attributesTable } =
      req.body;
    product.name = name;
    product.description = description;
    product.count = count;
    product.price = price;
    product.category = category;
    product.attributesTable = attributesTable;
    if (attributesTable.length > 0) {
      product.attrs = attributesTable.map((item) => {
        product.attrs.push(item);
      });
    }
    await product.save();
    res.json({ message: "Product created", productId: product._id });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getProducts,
  getProductById,
  getBestSellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
};
