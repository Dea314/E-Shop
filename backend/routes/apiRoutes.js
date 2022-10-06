const express = require("express");
const app = express();

// routes for api
const productRoutes = require("./productRoutes");
const categorytRoutes = require("./categoryRoutes");
const userRoutes = require("./userRoutes");
const orderRoutes = require("./orderRoutes");

// middleware
app.use("/products", productRoutes);
app.use("/categories", categorytRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

module.exports = app;
