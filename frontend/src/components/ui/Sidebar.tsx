const Sidebar = () => {
  const menuItems = [
    "Dashboard",
    "Habits",
    "Analytics",
    "AI Chatbot",
    "Settings",
  ];

  return (
    <aside className="w-48 max-w-64 h-screen border-r border-zinc-200 bg-white p-5 flex flex-col">
      
      {/* Logo */}
      <h1 className="text-xl font-semibold text-emerald-600 mb-8">
        Streakora
      </h1>

      {/* Menu */}
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="px-3 py-2 rounded-lg text-sm text-zinc-700 hover:bg-zinc-100 cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>

    </aside>
  );
};

export default Sidebar;