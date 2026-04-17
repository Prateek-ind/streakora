const Habit = require("../models/habit");

const createHabit = async (req, res) => {
  const { title, description, category, frequency } = req.body;
  try {
    if (!title || !category) {
      return res.status(400).json({
        message: "Title and description are required",
      });
    }

    const habit = await Habit.create({
      title,
      description,
      category,
      frequency,
    });

    res.status(201).json({
      message: "habit created successfully",
      habit,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Habits fetched successfully",
      habits: habits,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const editHabit = async (req, res) => {
  const { id } = req.params;
  const updatedHabit = req.body;

  try {
    const habit = await Habit.findByIdAndUpdate(id, updatedHabit, {
      new: true,
      runValidators: true,
    });

    if (!habit) {
      return res.status(400).json({ message: "Unable to find Habit" });
    }

    res.status(200).json({
      message: "Habit edited successfully",
      habit: habit,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteHabit = async (req, res) => {
  const { id } = req.params;

  try {
    const habit = await Habit.findByIdAndDelete(id);

    if (!habit) {
      return res.status(400).json({ message: "Unable to delete Habit" });
    }

    res.status(200).json({
      message: "Habit deleted successfully",
      habit: habit,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { createHabit, getHabits, editHabit, deleteHabit };
