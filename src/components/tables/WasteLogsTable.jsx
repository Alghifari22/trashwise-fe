import {
  Pencil,
  Trash2,
} from "lucide-react";

import EmptyState from "../common/EmptyState";

function getCategoryColor(category) {
  switch (category) {
    case "Organik":
      return "bg-emerald-100 text-emerald-700";

    case "Plastik":
      return "bg-cyan-100 text-cyan-700";

    case "Elektronik":
      return "bg-amber-100 text-amber-700";

    case "B3":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100 text-slate-700";
  }
}

function WasteLogsTable({ data }) {
  if (!data.length) {
    return (
      <EmptyState
        title="Belum Ada Catatan Sampah"
        description="Mulai berkontribusi dengan menambahkan catatan sampah pertama Anda."
      />
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-slate-200">
            <th className="pb-4 text-left text-sm font-semibold text-slate-500">
              Kategori
            </th>

            <th className="pb-4 text-left text-sm font-semibold text-slate-500">
              Berat
            </th>

            <th className="pb-4 text-left text-sm font-semibold text-slate-500">
              Poin
            </th>

            <th className="pb-4 text-left text-sm font-semibold text-slate-500">
              Tanggal
            </th>

            <th className="pb-4 text-left text-sm font-semibold text-slate-500">
              Catatan
            </th>

            <th className="pb-4 text-right text-sm font-semibold text-slate-500">
              Aksi
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((log) => (
            <tr
              key={log.id}
              className="border-b border-slate-100 transition hover:bg-slate-50"
            >
              <td className="py-5">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${getCategoryColor(
                    log.category
                  )}`}
                >
                  {log.category}
                </span>
              </td>

              <td className="py-5 text-sm text-slate-700">
                {log.weight} Kg
              </td>

              <td className="py-5">
                <span className="font-semibold text-emerald-600">
                  +{log.points}
                </span>
              </td>

              <td className="py-5 text-sm text-slate-500">
                {log.date}
              </td>

              <td className="py-5 text-sm text-slate-500">
                {log.notes}
              </td>

              <td className="py-5">
                <div className="flex justify-end gap-2">
                  <button className="rounded-xl bg-slate-100 p-2 transition hover:bg-slate-200">
                    <Pencil
                      size={16}
                      className="text-slate-600"
                    />
                  </button>

                  <button className="rounded-xl bg-red-100 p-2 transition hover:bg-red-200">
                    <Trash2
                      size={16}
                      className="text-red-600"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WasteLogsTable;