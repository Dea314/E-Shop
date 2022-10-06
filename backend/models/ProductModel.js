const mongoose = require("mongoose");
const Review = require("./ReviewModel");
const imageSchema = mongoose.Schema({
  path: { type: String, required: true },
});

// connection to mongodb
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
      unique: true,
      maxLength: [50, "Product name cannot exceed 50 characters"],
    },
    description: {
      type: String,
      required: [true, "Please enter product description"],
    },
    category: {
      type: String,
      required: [true, "Please select category for this product"],
    },
    count: {
      type: Number,
      required: [true, "Please enter product count"],
    },
    price: {
      type: Number,
      required: [true, "Please enter product price"],
      maxLength: [5, "Product price cannot exceed 5 characters"],
      default: 0.0,
    },

    ratings: {
      type: Number,
      default: 0,
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Number,
      default: 0,
    },
    attrs: [
      { key: { type: String }, value: { type: String } },
      // { key: "color", value: "red" },
      // { key: "size", value: "xl" },
    ],
    images: [imageSchema],
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

productSchema.index(
  { name: "text", description: "text", category: "text" },
  { name: "TextIndex" }
); // name of index

productSchema.index(
  { "attrs.key": 1, "attrs.value": 1 },
  { name: "AttrsIndex" } // name of index
);

module.exports = Product;

// category: {
//   type: String,
//   required: [true, "Please select category for this product"],
//   enum: {
//     values: [
//       "Electronics",
//       "Cameras",
//       "Laptops",
//       "Accessories",
//       "Headphones",
//       "Food",
//       "Books",
//       "Clothes/Shoes",
//       "Beauty/Health",
//       "Sports",
//       "Outdoor",
//       "Home",
//     ],
//     message: "Please select correct category for product",
//   },
// },
// seller: {
//   type: String,
//   required: [true, "Please enter product seller"],
// },
// stock: {
//   type: Number,
//   required: [true, "Please enter product stock"],
//   maxLength: [5, "Product name cannot exceed 5 characters"],
//   default: 0,
// },
//
// reviews: [
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     rating: {
//       type: Number,
//       required: true,
//     },
//     comment: {
//       type: String,
//       required: true,
//     },
//   },
// ],
// createdAt: {
//   type: Date,
//   default: Date.now,
// },
