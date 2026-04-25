import { Habit } from "@/types/habit.types";

const HabitItem = ({ habitData }) => {
  return (
    <div className="flex items-center justify-start gap-4 p-4 border border-zinc-200 rounded-xl my-2">
      <input type="checkbox" />
      <div>
        <h2 className="text-xl text-zinc-800">{habitData.title}</h2>
        <p className="text-sm text-zinc-500">{habitData?.description}</p>
        <p className="text-xs text-zinc-500">{habitData.category}</p>
      </div>
    </div>
  );
};

export default HabitItem;
