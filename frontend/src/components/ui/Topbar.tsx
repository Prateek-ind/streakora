import { useState } from "react";
import HabitModal from "./HabitModal";

const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <>
      <div className="px-2 pb-6 flex items-center justify-between">
        <p>Good Morning</p>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm"
        >
          + Add New Habit
        </button>
      </div>

      {isOpen && <HabitModal onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default Topbar;
