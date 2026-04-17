const mongoose = require("mongoose");

const habitActivitySchema = new mongoose.Schema({
  habitId: {
    type: mongoose.Schema.ObjectId,
    ref: "Habit",
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

habitActivitySchema.index({ habitId: 1, date: 1 }, { unique: true });

const habitActivityModel = mongoose.model("HabitActivity", habitActivitySchema);

module.exports = habitActivityModel;
