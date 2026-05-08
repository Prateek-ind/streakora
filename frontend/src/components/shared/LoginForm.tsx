import { useState, type ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/api/auth";
import { loginUserType } from "@/types/auth.types";
import { useAuth } from "@/hooks/useAuth";

const LoginForm = () => {
  const [formData, setFormData] = useState<loginUserType>({
    email: "",
    password: "",
  });
  const { loginUser } = useAuth();

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
      const res = await login(formData);

      if (!res.ok) {
        setError("Failed to login, check credentials");
        setIsLoading(false)
      }
      loginUser(res.user);
      navigate("/dashboard");

      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false)
      throw new Error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Password</label>
        <input
          type="password"
          required
          name="password"
          onChange={handleChange}
          placeholder="••••••••"
          minLength={8}
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-emerald-700 text-white py-2 rounded-lg text-sm hover:bg-emerald-800 transition"
      >
        {isLoading ? "Submitting" : "Login"}
      </button>
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
    </form>
  );
};

export default LoginForm;
