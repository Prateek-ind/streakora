import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../shared/DashboardNavbar";
import Sidebar from "../ui/Sidebar";
import StatsCard from "../ui/StatsCard";
import Topbar from "../ui/TopBar";
import Todayhabit from "../ui/Todayhabit";
import WeeklyStatsGraph from "../ui/WeeklyStatsGraph";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <main className="p-6">
          <Topbar />
          <StatsCard />

          <hr className="my-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <Todayhabit />
            </div>
            <div>
              <WeeklyStatsGraph/>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
