import { FiMail, FiUser, FiBriefcase, FiEdit } from "react-icons/fi";

export default function Profile() {
  return (
    <div className="space-y-10 animate-rise">
      {/* HEADER */}
      <div
        className="relative overflow-hidden rounded-3xl p-8 
                      bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 
                      text-white shadow-xl"
      >
        <div
          className="absolute inset-0 opacity-20 
                        bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]"
        />
        <div className="relative flex items-center gap-6">
          <div
            className="w-20 h-20 rounded-full 
                          bg-white/20 flex items-center justify-center 
                          text-4xl font-extrabold"
          >
            G
          </div>
          <div>
            <h1 className="text-3xl font-extrabold">Guruprasad Shetty</h1>
            <p className="opacity-90 text-lg">Marketing Administrator</p>
          </div>
        </div>
      </div>

      {/* PROFILE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BASIC INFO */}
        <div className="bg-white rounded-3xl p-6 shadow border space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiUser /> Basic Information
          </h2>

          <Info label="Full Name" value="Guruprasad Shetty" />
          <Info label="Email" value="guruprasad555shetty@gmail.com" />
          <Info label="Role" value="Admin" />
        </div>

        {/* WORK INFO */}
        <div className="bg-white rounded-3xl p-6 shadow border space-y-4">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiBriefcase /> Work Details
          </h2>

          <Info label="Team" value="Marketing" />
          <Info label="Organization" value="Globopersona" />
          <Info label="Account Type" value="Administrator" />
        </div>

        {/* PREFERENCES */}
        <div className="bg-white rounded-3xl p-6 shadow border space-y-6">
          <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <FiMail /> Preferences
          </h2>

          <Toggle label="Email Notifications" />
          <Toggle label="Weekly Reports" />
          <Toggle label="Product Updates" />

          <button
            className="mt-4 w-full flex items-center justify-center gap-2 
                       px-4 py-2 rounded-xl bg-gradient-to-r 
                       from-purple-600 to-indigo-600 text-white 
                       hover:shadow-lg transition"
          >
            <FiEdit /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Info({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}

function Toggle({ label }) {
  return (
    <label className="flex items-center justify-between cursor-pointer">
      <span className="text-gray-700">{label}</span>
      <input
        type="checkbox"
        defaultChecked
        className="w-5 h-5 accent-purple-600"
      />
    </label>
  );
}
