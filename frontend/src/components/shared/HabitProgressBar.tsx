import { Habit } from "@/types/habit.types";
import React from "react";

type Props = {
  habitData: Habit;
};

const HabitProgressBar = ({ habitData }: Props) => {
  const habit = habitData.weeklyCount;
  const weekLength = 7;

  return <div className="rounded-xl"></div>;
};

export default HabitProgressBar;
