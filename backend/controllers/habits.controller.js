const Habit = require("../models/habit");
const HabitActivity = require("../models/habitActivity");

const createHabit = async (req, res) => {
  const { title, description, category, frequency } = req.body;
  try {
    if (!title || !category) {
      return res.status(400).json({
        message: "Title and category are required",
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
    const today = new Date().toLocaleDateString("en-CA");

    const habits = await Habit.find().sort({ createdAt: -1 });

    const activities = await HabitActivity.find({ date: today });

    const completedSet = new Set(
      activities.map((activity) => activity.habitId.toString()),
    );

    const result = habits.map((h) => ({
      ...h.toObject(),
      isCompletedToday: completedSet.has(h._id.toString()),
    }));

    res.status(200).json({
      message: "Habits fetched successfully",
      habits: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const editHabit = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, frequency } = req.body;
  const updatedHabit = {
    title,
    description,
    category,
    frequency,
  };

  try {
    const habit = await Habit.findByIdAndUpdate(id, updatedHabit, {
      new: true,
      runValidators: true,
    });

    if (!habit) {
      return res.status(404).json({ message: "Unable to find Habit" });
    }

    res.status(200).json({
      message: "Habit edited successfully",
      habit,
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
      return res.status(404).json({ message: "Unable to delete Habit" });
    }

    res.status(200).json({
      message: "Habit deleted successfully",
      habit,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const markComplete = async (req, res) => {
  const { id } = req.params;
  const today = new Date().toLocaleDateString("en-CA");

  try {
    const habit = Habit.findById(id);
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    const habitActivity = await HabitActivity.create({
      habitId: id,
      date: today,
    });

    return res.status(201).json({
      message: "Habit Activity created",
      habitActivity,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(200).json({
        message: "Habit already marked as completed for today",
      });
    }
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createHabit,
  getHabits,
  editHabit,
  deleteHabit,
  markComplete,
};
