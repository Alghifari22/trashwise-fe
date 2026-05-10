function SectionCard({
  title,
  subtitle,
  children,
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

      {children}
    </div>
  );
}

export default SectionCard;