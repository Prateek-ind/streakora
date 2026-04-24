import HabitForm from "../shared/HabitForm";

type Props = {
  onClose: () => void;
};

const HabitModal = ({ onClose }: Props) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white max-w-3xl rounded-2xl p-6 space-y-5 border border-zinc-200 shadow-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-zinc-800">
            Create Habit
          </h2>

          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 transition"
          >
            ✕
          </button>
        </div>
        <HabitForm/>
      </div>
    </div>
  );
};

export default HabitModal;
