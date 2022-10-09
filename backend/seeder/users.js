const bcrypt = require("bcryptjs");

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
];

module.exports = users;
