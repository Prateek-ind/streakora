import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../api/auth";
import { registerUserType } from "@/types/auth.types";

const RegisterForm = () => {
  const [formData, setFormData] = useState<registerUserType>({
    username: "",
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError("");
      const res = await register(formData);

      if (!res.ok) {
        setError("Failed to login, check credentials");
      }

      navigate("/dashboard");
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message)
      throw new Error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Username</label>
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="Username"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="you@example.com"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Password</label>
        <input
          type="password"
          name="passwod"
          onChange={handleChange}
          placeholder="••••••••"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700 transition"
      >
        {isLoading ? "Submitting": "Register" }
      </button>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default RegisterForm;
