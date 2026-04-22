type Props = {
  onLogin: () => void;
};

const Navbar = ({ onLogin }: Props) => {
  return (
    <nav className="h-20 px-8 flex items-center justify-between border-b border-zinc-200 bg-white">
      {/* Logo */}
      <p className="text-xl font-semibold text-emerald-600">Streakora</p>

      {/* Right side */}
      <button
        onClick={onLogin}
        className="text-sm px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 transition"
      >
        Login
      </button>
    </nav>
  );
};

export default Navbar;
