const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");
const router = express.Router();

router.post("/login", loginUser);

router.get("/register", registerUser);

router.patch("/logout", logoutUser);

module.exports = router;
