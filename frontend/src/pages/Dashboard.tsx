import React from "react";
import DashboardMenu from "../components/ui/DashboardMenu";

const Dashboard = () => {
  return (
    <section className="h-screen grid grid-cols-3">
      <div className="max-w-64"><DashboardMenu/></div>
      <div className="mx-auto">center</div>
    </section>
  );
};

export default Dashboard;
