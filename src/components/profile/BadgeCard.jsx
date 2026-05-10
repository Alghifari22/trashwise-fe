function BadgeCard({ badge }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-5xl">
        {badge.icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-slate-800">
        {badge.title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {badge.description}
      </p>
    </div>
  );
}

export default BadgeCard;