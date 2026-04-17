const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    frequency: {
      type: String,
      enum: ["daily", "weekly"],
      default: "daily",
    },
    category: {
      type: String,
      enum: ["health", "work", "personal", "learning"],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const habitModel = mongoose.model("Habit", habitSchema);

module.exports = habitModel