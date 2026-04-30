import { getWeeklyStats } from "@/api/habit";
import { useQuery } from "@tanstack/react-query";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const WeeklyStatsGraph = () => {
  const { data = [] } = useQuery({
    queryKey: ["weekly-stats"],
    queryFn: getWeeklyStats,
  });

  console.log(data)
  return (
    <div className="w-full flex flex-col items-center p-4 bg-white rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>

     <ResponsiveContainer width={"100%"} height={300}>
         <LineChart data={data?.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={"day"} />
        <YAxis />
        <Tooltip />
        <Line type={"monotone"} dataKey={"count"} />
      </LineChart>
     </ResponsiveContainer>
    </div>
  );
};

export default WeeklyStatsGraph;
