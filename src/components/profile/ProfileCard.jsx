import {
  Mail,
  Award,
} from "lucide-react";

function ProfileCard({ profile }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-4xl font-bold text-white shadow-lg">
          AR
        </div>

        <h2 className="mt-5 text-3xl font-bold text-slate-800">
          {profile.name}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-slate-500">
          <Mail size={16} />

          <span>{profile.email}</span>
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
          <Award size={16} />

          {profile.level}
        </div>

        <p className="mt-6 max-w-xl text-slate-500">
          {profile.bio}
        </p>
      </div>
    </div>
  );
}

export default ProfileCard;