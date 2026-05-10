import { useState } from "react";

import AppLayout from "../../layouts/AppLayout";
import SectionCard from "../../components/common/SectionCard";
import BadgeCard from "../../components/profile/BadgeCard";
import AchievementCard from "../../components/profile/AchievementCard";

import { profileData, badges } from "../../constant/mockData";
import { Camera, Save } from "lucide-react";

function ProfilePage() {
  const [form, setForm] = useState({
    name: profileData.name,
    email: profileData.email,
    phone: profileData.phone,
    address: profileData.address,
    bio: profileData.bio,
  });

  const [saved, setSaved] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <AppLayout title="Profil">
      <div className="space-y-6">

        {/* Header kartu profil */}
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-end">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-br from-emerald-500 to-teal-400 text-3xl font-bold text-white shadow-md">
                AR
              </div>
              <button className="absolute bottom-0 right-0 rounded-full bg-white p-1.5 shadow-md ring-2 ring-slate-100 transition hover:bg-slate-50">
                <Camera size={14} className="text-slate-600" />
              </button>
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-slate-800">{form.name}</h2>
              <p className="text-sm text-slate-500">{form.email}</p>
              <span className="mt-2 inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                {profileData.level}
              </span>
            </div>
          </div>
        </div>

        {/* Statistik */}
        <div className="grid gap-4 sm:grid-cols-3">
          <AchievementCard
            title="Total Poin"
            value={profileData.points}
            suffix="poin"
          />
          <AchievementCard
            title="Catatan Sampah"
            value={profileData.totalLogs}
            suffix="log"
          />
          <AchievementCard
            title="Sampah Dikelola"
            value={profileData.totalWaste}
            suffix="kg"
          />
        </div>

        {/* Form edit */}
        <SectionCard
          title="Informasi Akun"
          subtitle="Perbarui data diri kamu di sini"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 08123456789"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-600">
                  Alamat
                </label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Kota / Kabupaten"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-600">
                Bio
              </label>
              <textarea
                name="bio"
                value={form.bio}
                onChange={handleChange}
                rows={3}
                placeholder="Ceritakan sedikit tentang dirimu..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-1">
              {saved && (
                <span className="text-sm text-emerald-600 font-medium">
                  Perubahan tersimpan ✓
                </span>
              )}
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
              >
                <Save size={16} />
                Simpan Perubahan
              </button>
            </div>
          </form>
        </SectionCard>

        {/* Badge */}
        <SectionCard
          title="Koleksi Lencana"
          subtitle="Pencapaian yang sudah kamu raih"
        >
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {badges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </SectionCard>

      </div>
    </AppLayout>
  );
}

export default ProfilePage;
