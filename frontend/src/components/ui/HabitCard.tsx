import React from "react";

const HabitCard = () => {
  return (
    <div className="w-72 bg-white border border-zinc-200 rounded-2xl p-5 space-y-4 shadow-sm hover:shadow-md transition duration-200">
      {/* Title */}
      <h2 className="text-lg font-semibold text-zinc-900">Drink Water</h2>

      {/* Category */}
      <span className="inline-block px-3 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700">
        Health
      </span>

      {/* Streak */}
      <p className="text-sm text-zinc-600">🔥 5 day streak</p>

      {/* Divider */}
      <div className="border-t border-zinc-200" />

      {/* Button */}
      <button className="w-full bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700 transition">
        Mark Done
      </button>
    </div>
  );
};

export default HabitCard;
