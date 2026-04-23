const express = require("express");
const router = express.Router();
const protect = require("../middlewares/protect.middleware");

router.post("/", protect, (req, res) => {
  res.status(200).json({
    message: "Welcome to dashboard",
    user: req.user,
  });
});

module.exports = router