import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Recycle, LayoutDashboard, Trophy, User } from "lucide-react";

const menus = [
  { name: "Dasbor", path: "/", icon: LayoutDashboard },
  { name: "Papan Peringkat", path: "/leaderboard", icon: Trophy },
  { name: "Profil", path: "/profile", icon: User },
];

function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-2xl bg-slate-100 p-3 transition hover:bg-slate-200 lg:hidden"
      >
        <Menu size={20} className="text-slate-700" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col bg-emerald-700 text-white shadow-xl">
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3">
                  <Recycle size={24} />
                </div>
                <h1 className="text-xl font-bold">TrashWise</h1>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-white/10 p-2 transition hover:bg-white/20"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {menus.map((menu) => {
                  const Icon = menu.icon;
                  return (
                    <NavLink
                      key={menu.path}
                      to={menu.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-200 ${
                          isActive
                            ? "bg-white text-emerald-700 shadow-lg"
                            : "text-white hover:bg-white/10"
                        }`
                      }
                    >
                      <Icon size={20} />
                      <span className="font-medium">{menu.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

export default MobileSidebar;
