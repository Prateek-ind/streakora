import { AuthContext } from "@/context/AuthContext";
import React, { useContext } from "react";

const DashboardNavbar = () => {
  const data = useContext(AuthContext);
  const date = new Date().toDateString();

  return (
    <nav className="w-full px-6 h-20 border-b border-zinc-100 flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <p>Welcome, {data.user?.username}</p>
        <p className="text-sm text-zinc-400">{date}</p>
      </div>
      <div className="flex items-center gap-2">
        <p className="w-32">Seachbar</p>
        <p>Image</p>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
