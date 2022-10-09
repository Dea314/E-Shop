const connectDB = require("../config/db");

connectDB();

// all data to be imported to db - update DB
const categoryData = require("./categories");
const productData = require("./products");
const reviewsData = require("./reviews");
const orderData = require("./orders");
const userData = require("./users");

const Category = require("../models/CategoryModel");
const Product = require("../models/ProductModel");
const Review = require("../models/ReviewModel");
const Order = require("../models/OrderModel");
const User = require("../models/UserModel");

const importData = async () => {
  try {
    await Category.collection.dropIndexes();
    await Product.collection.dropIndexes();

    await Category.collection.deleteMany({});
    await Product.collection.deleteMany({});
    await Review.collection.deleteMany({});
    await User.collection.deleteMany({});
    await Order.collection.deleteMany({});

    await Category.insertMany(categoryData);
    const review = await Review.insertMany(reviewsData);
    const sampleProducts = productData.map((product) => {
      review.map((review) => {
        product.reviews.push(review._id);
      });
      return { ...product };
    });
    await Product.insertMany(sampleProducts);
    await User.insertMany(userData);
    await Order.insertMany(orderData);

    console.log("Data Import Success");
    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
