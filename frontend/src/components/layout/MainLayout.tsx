import { useState } from "react";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";
import LoginModal from "../ui/LoginModal";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-emerald-50">
      <Navbar onLogin={() => setIsOpen(true)} />

      <Outlet />

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default MainLayout;
