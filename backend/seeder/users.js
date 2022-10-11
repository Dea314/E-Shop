const bcrypt = require("bcryptjs");
const ObjectId = require("mongodb").ObjectId;

// users data- pass hashed with bcrypt
const users = [
  {
    name: "Admin User",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },

  {
    name: "Steve Jobs",
    email: "steve@example.com",
    password: bcrypt.hashSync("steve@example.com", 10),
    role: "user",
  },
  {
    name: "Jane Doe",
    email: "jane@example.com",
    password: bcrypt.hashSync("jane@example.com", 10),
    role: "user",
  },
  {
    _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: "Axel Rose",
    email: "axel@example.com",
    password: bcrypt.hashSync("axel@example.com", 10),
    role: "user",
  },
  {
    name: "Bruce Lee",
    email: "bruce@example.com",
    password: bcrypt.hashSync("bruce@example.com", 10),
    role: "user",
  },
];

module.exports = users;
