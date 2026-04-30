import { getHabits, getWeeklyStats } from "@/api/habit";
import { useQuery } from "@tanstack/react-query";
import { ListTodo, CheckCircle, TrendingUp, Flame } from "lucide-react";

const StatsCard = () => {
  const { data } = useQuery({
    queryKey: ["habits"],
    queryFn: getHabits,
  });

  const { data: weekly } = useQuery({
    queryKey: ["weekly-stats"],
    queryFn: getWeeklyStats,
  });

  const habits = data || [];
  const weekData = weekly?.data || [];

  const totalHabits = habits.length;
  const completedToday = habits.filter((h) => h.isCompletedToday).length;
  const completionRate =
    totalHabits === 0 ? 0 : Math.round((completedToday / totalHabits) * 100);

  let streak = 0;
  for (let i = weekData.length - 1; i > 0; i--) {
    if (weekData[i].count > 0) streak++;
    else break;
  }

  const stats = [
    {
      title: "Total Habits",
      value: totalHabits,
      icon: ListTodo,
      description: "Active tracking",
    },
    { title: "Completed today", value: completedToday, icon: CheckCircle },
    {
      title: "Completeion rate",
      value: `${completionRate}%`,
      icon: TrendingUp,
      description: "Last 7 days",
    },
    { title: "Current streak", value: `${streak} days`, icon: Flame },
  ];

  return (
    <div className="w-fit  grid grid-cols-4 gap-4 ">
      {stats.map((stat, i) => {
        const Icon = stat.icon;

        return (
          <div
            key={i}
            className="w-64 bg-white border border-zinc-200 rounded-xl p-4 space-y-2"
          >
            <div className="bg-emerald-100 p-1 rounded-lg w-fit">
              <Icon className="text-emerald-600" />
            </div>
            <p className="text-sm text-zinc-700 font-semibold">{stat.title}</p>

            <h2 className="text-xl font-bold">{stat.value}</h2>

            <p className="text-xs text-zinc-500">{stat?.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
