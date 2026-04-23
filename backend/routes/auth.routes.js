const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");
const protect = require("../middlewares/protect.middleware");
const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.post("/logout", logoutUser);

router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "Welcome to dashboard",
    user: req.user,
  });
});

module.exports = router;
