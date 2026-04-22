import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate()
  return (
    <form className="flex flex-col gap-5">
      {/* Email */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label className="text-sm text-zinc-600">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="border border-zinc-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Button */}
      <button
      onClick={()=>(navigate('/dashboard'))}
        type="submit"
        className="bg-emerald-600 text-white py-2 rounded-lg text-sm hover:bg-emerald-700 transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
