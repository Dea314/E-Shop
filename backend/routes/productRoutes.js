const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
  getBestSellers,
  adminGetProducts,
  adminDeleteProduct,
  adminCreateProduct,
} = require("../controllers/productController");

// user routes
router.get("/category/:categoryName/search/:searchQuery", getProducts); // search particular category
router.get("/category/:categoryName", getProducts);
router.get("/search/:searchQuery", getProducts); // search all categories
router.get("/", getProducts);
router.get("/bestsellers", getBestSellers);
router.get("/get-one/:id", getProductById);

// admin routes
router.get("/admin", adminGetProducts);
router.delete("/admin/:id", adminDeleteProduct);
router.post("/admin", adminCreateProduct);

module.exports = router;
