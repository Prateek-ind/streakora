const express = require("express");
const {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
  markComplete,
  getWeeklyStats,
} = require("../controllers/habits.controller");
const router = express.Router();

const protect = require("../middlewares/protect.middleware");

router.post("/", protect, createHabit);

router.get("/", protect, getHabits);

router.patch("/:id", protect, editHabit);

router.delete("/:id", protect, deleteHabit);

router.patch("/:id/complete", protect, markComplete);

router.get("/weekly-stats", protect, getWeeklyStats);

module.exports = router;
