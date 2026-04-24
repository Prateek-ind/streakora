import { useState } from "react";
import LoginForm from "../shared/LoginForm";
import RegisterForm from "../shared/RegisterForm";

type Props = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: Props) => {
  const [mode, setMode] = useState("login");

  const toggleMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };
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
          <h2 className="text-lg font-semibold text-zinc-900">
            {mode === "login" ? "Welcome back" : "Welcome"}
          </h2>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-800 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        {mode === "login" ? <LoginForm /> : <RegisterForm />}
        {mode === "login" ? (
          <p>
            If you are not registered please{" "}
            <span
              onClick={toggleMode}
              className="text-emerald-500 underline cursor-pointer"
            >
              sign-up{" "}
            </span>
            here.
          </p>
        ) : (
          <p>
            If you are registered please{" "}
            <span
              onClick={toggleMode}
              className="text-emerald-500 underline cursor-pointer"
            >
              sign-in{" "}
            </span>
            here.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginModal;
