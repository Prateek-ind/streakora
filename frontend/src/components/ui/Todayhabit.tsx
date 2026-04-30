import React from "react";
import HabitItem from "./HabitItem";
import { useQuery } from "@tanstack/react-query";
import { getHabits } from "@/api/habit";
import { Habit } from "@/types/habit.types";

const Todayhabit = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["habits"],
    queryFn: getHabits,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <div className="">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="font-bold text-lg text-zinc-900">Today's Habits</h2>
        <p className="text-sm text-zinc-500">({data?.length} Habits)</p>
      </div>
      {(data ?? []).map((habit: Habit) => (
        <HabitItem key={habit._id} habitData={habit} />
      ))}
    </div>
  );
};

export default Todayhabit;
