import { Inbox } from "lucide-react";

function EmptyState({
  title,
  description,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="rounded-full bg-slate-100 p-6">
        <Inbox
          size={40}
          className="text-slate-400"
        />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-slate-700">
        {title}
      </h3>

      <p className="mt-2 max-w-md text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default EmptyState;