import React, { useState } from "react";
import LoginModal from "../components/ui/LoginModal";
import Navbar from "../components/shared/Navbar";
import HabitCard from "../components/ui/HabitCard";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <div className="h-screen w-full px-8 py-4 grid grid-cols-2 items-center justify-between gap-6">
        <div className="max-w-xl space-y-6">
          <h1 className="text-5xl font-bold text-zinc-900">
            Build habits that <span className="text-emerald-600">stick</span>.
          </h1>

          <p className="text-lg text-zinc-600">
            Track your daily routines, stay consistent, and build streaks that
            actually last.
          </p>

          <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition">
            Get Started
          </button>
        </div>
        <div className="flex justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-md border border-zinc-200">
            <HabitCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
