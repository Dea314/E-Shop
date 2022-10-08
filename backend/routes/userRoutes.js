const express = require("express");
const router = express.Router();
const {
  verifyIsLogedIn,
  verifyIsAdmin,
} = require("../middleware/verifyAuthToken");
const {
  getUsers,
  registerUser,
  loginUser,
  updateUserProfile,
} = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/login", loginUser);

//user logged in routes:
router.use(verifyIsLogedIn);
router.put("/profile", updateUserProfile);

//admin logged in routes:
router.use(verifyIsAdmin);
router.get("/", getUsers);

module.exports = router;
