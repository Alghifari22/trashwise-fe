import { motion } from "framer-motion";

function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  gradient,
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-sm"
    >
      <div
        className={`absolute right-0 top-0 h-28 w-28 rounded-full blur-3xl opacity-20 ${gradient}`}
      />

      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-bold text-slate-800">
            {value}
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className={`rounded-2xl p-4 text-white shadow-lg ${gradient}`}
        >
          <Icon size={26} />
        </div>
      </div>
    </motion.div>
  );
}

export default StatCard;