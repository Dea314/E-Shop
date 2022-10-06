const mongoose = require("mongoose");
const User = require("./UserModel");

// connection to mongodb
const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    cartSubtotal: { type: Number, required: true },
    cartItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { path: { type: String, required: true } },
        qty: { type: Number, required: true },
        count: { type: Number, required: true },
        // product: {
        //   type: mongoose.Schema.Types.ObjectId,
        //   ref: "Product",
        //   required: true,
        // },
      },
    ],
    transactionResult: {
      status: { type: String },
      createTime: { type: String },
      amount: { type: String },
      // id: { type: String },
      // update_time: { type: String },
      // email_address: { type: String },
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

// shippingAddress: {
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   postalCode: { type: String, required: true },
//   country: { type: String, required: true },
// },
