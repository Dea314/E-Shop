const Category = require("../models/CategoryModel");

// find-sort, add, delete category
const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({}).sort({ name: "asc" }).orFail();
    res.json(categories);
  } catch (error) {
    next(error);
  }
};

const newCategory = async (req, res, next) => {
  try {
    const { category } = req.body;
    if (!category) {
      res.status(400).send("Category is required");
    }
    const catetoryExists = await Category.findOne({ name: category });
    if (catetoryExists) {
      res.status(400).send("Category already exists");
    } else {
      const categoryCreated = await Category.create({ name: category });
      res.status(201).send({ categoryCreated: categoryCreated });
    }
  } catch (error) {
    next(error);
  }
};

const deleteCategory = async (req, res, next) => {
  // return res.send(req.params.category);
  try {
    if (req.params.category !== "Choose category") {
      const categoryExists = await Category.findOne({
        name: decodeURIComponent(req.params.category),
      }).orFail();
      await categoryExists.remove();
      res.json({ categoryDeleted: true });
    }
    // } else {
    //   res.status(400).send("Category is required");
    // }
  } catch (error) {
    next(error);
  }
};
// search through categories
const saveAttr = async (req, res, next) => {
  const { key, val, categoryChoosen } = req.body;
  if (!key || !val || !categoryChoosen) {
    return res.status(400).send("All fields are required");
  }
  try {
    const category = categoryChoosen.split(" /")[0];
    const categoryExists = await Category.findOne({ name: category }).orFail();
    if (categoryExists.attrs.length > 0) {
      let keyDoesNotExistInDatabase = true;
      categoryExists.attrs.map((item, index) => {
        if (item.key === key) {
          keyDoesNotExistInDatabase = false;
          let copyAttributesValues = [...categoryExists.attrs[index].value];
          copyAttributesValues.push(val);
          let newAttributesValues = [...new Set(copyAttributesValues)];
          categoryExists.attrs[index].value = newAttributesValues;
        }
      });

      if (keyDoesNotExistInDatabase) {
        categoryExists.attrs.push({ key: key, value: [val] });
      }
    } else {
      categoryExists.attrs.push({ key: key, value: [val] });
    }
    await categoryExists.save();
    let cat = await Category.find({}).sort({ name: "asc" }).orFail();
    return res.status(201).json({ categoriesUpdated: cat });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories, newCategory, deleteCategory, saveAttr };
