function AchievementCard({
  title,
  value,
  suffix,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <div className="mt-3 flex items-end gap-1">
        <span className="text-4xl font-bold text-slate-800">
          {value}
        </span>

        <span className="mb-1 text-slate-400">
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default AchievementCard;