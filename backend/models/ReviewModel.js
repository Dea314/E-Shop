const mongoose = require("mongoose");

// connection to mongodb
const reviewSchema = mongoose.Schema(
  {
    comment: { type: String, required: [true, "Please enter review comment"] },
    rating: { type: Number, required: [true, "Please enter review rating"] },
    user: {
      _id: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
      name: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
