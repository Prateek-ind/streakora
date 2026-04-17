const express = require("express");
const {
  getHabits,
  createHabit,
  editHabit,
  deleteHabit,
} = require("../controllers/habits.controller");
const router = express.Router();

router.post("/", createHabit);

router.get("/", getHabits);

router.patch("/:id", editHabit);

router.delete("/:id", deleteHabit);

module.exports = router;
