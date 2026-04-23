const express = require("express");
const {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
  markComplete,
} = require("../controllers/habits.controller");
const router = express.Router();

const protect = require("../middlewares/protect.middleware");

router.post("/", protect, createHabit);

router.get("/", protect, getHabits);

router.patch("/:id", protect, editHabit);

router.delete("/:id", protect, deleteHabit);

router.post("/:id/complete", protect, markComplete);

module.exports = router;
