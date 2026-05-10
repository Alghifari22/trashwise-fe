import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Trophy,
  User,
  Recycle,
  LogOut,
} from "lucide-react";

const menus = [
  {
    name: "Dasbor",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Papan Peringkat",
    path: "/leaderboard",
    icon: Trophy,
  },
  {
    name: "Profil",
    path: "/profile",
    icon: User,
  },
];

function Sidebar() {
  return (
    <aside className="hidden h-full w-64 flex-col bg-emerald-700 text-white lg:flex">
      <div className="border-b border-white/10 px-5 py-5">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/10 p-2.5">
            <Recycle size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight">
              TrashWise
            </h1>

            <p className="text-xs text-emerald-100">
              Platform Pengelolaan Sampah
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4">
        <div className="space-y-1">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-white text-emerald-700 shadow-md font-semibold"
                      : "text-white hover:bg-white/10 font-medium"
                  }`
                }
              >
                <Icon size={18} />
                <span>{menu.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      <div className="border-t border-white/10 px-3 py-4">
        <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10">
          <LogOut size={18} />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
