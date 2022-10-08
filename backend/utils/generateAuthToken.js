const jwt = require("jsonwebtoken");

const generateAuthToken = (_id, name, email, isAdmin) => {
  return jwt.sign({ _id, name, email, isAdmin }, process.env.JWT_SECRET, {
    expiresIn: "10h",
  });
};

module.exports = generateAuthToken;
