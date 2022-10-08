const User = require("../models/UserModel");
const { hashPassword, comparePasswords } = require("../utils/hashPasswords");
const generateAuthToken = require("../utils/generateAuthToken");

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).select("-password");
    return res.json(users);
  } catch (error) {
    next(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!(name && email && password)) {
      return res.status(400).send("Please fill all the fields");
    }
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("User already exists");
    } else {
      const hashedPassword = hashPassword(password);
      const user = await User.create({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
      });
      res
        .cookie(
          "access_token",
          generateAuthToken(user._id, user.name, user.email, user.isAdmin),
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
          }
        )
        .status(201)
        .json({
          success: "User created",
          userCreated: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          },
        });
    }
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password, doNotLogout } = req.body;
    if (!(email && password)) {
      return res.status(400).send("Please fill all the fields");
    }
    const user = await User.findOne({ email });
    if (user && comparePasswords(password, user.password)) {
      let cookieParams = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      };
      if (doNotLogout) {
        cookieParams = {
          ...cookieParams,
          maxAge: 1000 * 60 * 60 * 24 * 7,
        }; // 1 week, 1000ms=1sec
      }
      return res
        .cookie(
          "access_token",
          generateAuthToken(user._id, user.name, user.email, user.isAdmin),
          cookieParams
        )
        .json({
          success: "User logged in",
          userLoggedIn: {
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            doNotLogout,
          },
        });
    } else {
      return res.status(401).send("Wrong credentials!");
    }
  } catch (error) {
    next(error);
  }
};

const updateUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).orFail();
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
    user.address = req.body.address || user.address;
    user.city = req.body.city || user.city;
    user.postalCode = req.body.postalCode || user.postalCode;
    user.country = req.body.country || user.country;

    if (req.body.password) {
      user.password = hashPassword(req.body.password);
    }
    await user.save();

    return res.json({
      success: "User profile updated",
      userUpdated: {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsers, registerUser, loginUser, updateUserProfile };
