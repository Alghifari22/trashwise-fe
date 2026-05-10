import { Bell, Search } from "lucide-react";

function Header({ title }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          {title}
        </h2>

        <p className="text-sm text-slate-500">
          Kelola data kontribusi sampah Anda
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 md:flex">
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Cari..."
            className="bg-transparent text-sm outline-none"
          />
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">
            AR
          </div>

          <div className="hidden md:block">
            <h4 className="text-sm font-semibold text-slate-700">
              Alghifari
            </h4>

            <p className="text-xs text-slate-500">
              Juara Lingkungan
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;