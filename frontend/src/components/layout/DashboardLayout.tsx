import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "../shared/DashboardNavbar";
import Sidebar from "../ui/Sidebar";
import StatsCard from "../ui/StatsCard";
import Topbar from "../ui/TopBar";

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
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
