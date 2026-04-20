const express = require("express");
const {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
  markComplete,
} = require("../controllers/habits.controller");
const router = express.Router();

router.post("/", createHabit);

router.get("/", getHabits);

router.patch("/:id", editHabit);

router.delete("/:id", deleteHabit);

router.post("/:id/complete", markComplete)

module.exports = router;
