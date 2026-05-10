import AppLayout from "../../layouts/AppLayout";

import StatCard from "../../components/common/StatCard";
import SectionCard from "../../components/common/SectionCard";

import WasteCategoryChart from "../../components/charts/WasteCategoryChart";
import WeeklyActivityChart from "../../components/charts/WeeklyActivityChart";

import WasteLogsTable from "../../components/tables/WasteLogsTable";

import { wasteLogs } from "../../constant/mockData";

import { Trophy, Recycle, Leaf, Target } from "lucide-react";

function DashboardPage() {
  return (
    <AppLayout title="Dashboard">
      <div className="space-y-6">
        {/* Hero */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-500 p-8 text-white shadow-lg">
          <h1 className="text-4xl font-bold">Selamat Datang Kembali 👋</h1>

          <p className="mt-3 max-w-2xl text-emerald-50">
            Terus pantau kontribusi sampah Anda dan bantu ciptakan
            lingkungan yang lebih bersih.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Total Poin"
            value="1.240"
            subtitle="+12% dari minggu lalu"
            icon={Trophy}
            gradient="bg-yellow-500"
          />

          <StatCard
            title="Sampah Terkumpul"
            value="128 Kg"
            subtitle="Total sampah terkelola"
            icon={Recycle}
            gradient="bg-emerald-500"
          />

          <StatCard
            title="Karbon Tersimpan"
            value="42%"
            subtitle="Dampak lingkungan"
            icon={Leaf}
            gradient="bg-teal-500"
          />

          <StatCard
            title="Target Bulanan"
            value="87%"
            subtitle="Hampir selesai"
            icon={Target}
            gradient="bg-cyan-500"
          />
        </div>

        {/* Charts */}
        <div className="grid gap-6 xl:grid-cols-2">
          <SectionCard
            title="Kategori Sampah"
            subtitle="Statistik komposisi sampah"
          >
            <WasteCategoryChart />
          </SectionCard>

          <SectionCard
            title="Aktivitas Mingguan"
            subtitle="Kontribusi Anda minggu ini"
          >
            <WeeklyActivityChart />
          </SectionCard>

          {/* Catatan Sampah */}
          <SectionCard
            title="Catatan Sampah"
            subtitle="Pantau semua aktivitas pengelolaan sampah Anda"
          >
            <WasteLogsTable data={wasteLogs} />
          </SectionCard>
        </div>
      </div>
    </AppLayout>
  );
}

export default DashboardPage;
