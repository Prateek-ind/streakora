const StatsCard = () => {
  const stats = [
    { title: "Total Habits", value: "12" },
    { title: "Current streak", value: "19 Days" },
    { title: "Completeion rate", value: "84%" },
    { title: "Longest Streak", value: "42 days" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border border-zinc-200 rounded-xl p-4">
          <p className="text-sm text-zinc-500">{stat.title}</p>
          <h2 className="text-xl font-semibold">{stat.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default StatsCard
