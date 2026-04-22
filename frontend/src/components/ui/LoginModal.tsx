import LoginForm from "./LoginForm";

type Props = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: Props) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-[380px] rounded-2xl p-6 space-y-5 border border-zinc-200 shadow-lg"
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-zinc-900">Welcome back</h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginModal;
