const mongoose = require("mongoose");

// connection to mongodb
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    phoneNumber: { type: String },
    address: { type: String },
    zipCode: { type: String },
    city: { type: String },
    country: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
