const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 18 }).map((_, index) => {
  let day = 20;
  let hour = "0" + index;
  let subtotal = 0;

  if (index < 10) {
    let hour = "0" + index;
    let subtotal = 100;
  } else if (index > 16 && index < 21) {
    let hour = index;
    let subtotal = 100 + 12 * index;
  } else {
    let hour = index;
    let subtotal = 200;
  }
  return {
    user: ObjectId("625add3d78fb449f9d9fe2ee"),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        // product: ObjectId(),
        name: "Product name",
        image: { path: "/images/books-category.png" },
        price: 37,
        quantity: 8,
        count: 17,
      },
    ],
    paymentMethod: "PayPal",
    isPaid: false,
    isDelivered: false,
    createdAt: Date(), // 2022-10-20T00:27:04.654+00:00
    cartSubtotal: subtotal,
  };
});

module.exports = orders;
