import { markHabitComplete } from "@/api/habit";
import { Habit } from "@/types/habit.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  habitData: Habit;
};

const HabitItem = ({ habitData }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => markHabitComplete(habitData._id),

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["habits"] });

      const prev = queryClient.getQueryData(["habits"]);

      queryClient.setQueryData(["habits"], (old: any) =>
        old.map((habit: any) =>
          habit._id === habitData._id
            ? { ...habit, isCompletedToday: true }
            : habit,
        ),
      );

      return { prev };
    },

    onError: (_, __, context) => {
      queryClient.setQueryData(["habits"], context?.prev);
    },

    onSettled: () => queryClient.invalidateQueries({ queryKey: ["habits"] }),
  });

  const handleMarkHabitComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    await mutation.mutate();
  };

  return (
    <div className="flex items-center justify-between gap-4 p-4 border border-zinc-200 rounded-xl my-2">
      <div>
        <h2 className="text-xl text-zinc-800">{habitData.title}</h2>
        <p className="text-sm text-zinc-500">{habitData?.description}</p>
        <p className="text-xs text-zinc-500">{habitData.category}</p>
        <p className="text-xs text-zinc-500">{habitData.frequency}</p>
      </div>
      <button
        onClick={handleMarkHabitComplete}
        disabled={habitData.isCompletedToday || mutation.isPending}
        className={`px-3 py-1 rounded transition text-sm
         ${habitData.isCompletedToday ? "bg-emerald-500 text-white" : "bg-zinc-200 hover:bg-zinc-300"}
         `}
      >
        {habitData.isCompletedToday
          ? "Done"
          : mutation.isPending
            ? "Marking"
            : "Mark Complete"}
      </button>
    </div>
  );
};

export default HabitItem;
