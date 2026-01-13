import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiGrid, FiMail, FiPlusCircle, FiUser, FiLogOut } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className="w-64 h-screen fixed left-0 top-0 
             bg-white border-r shadow-xl flex flex-col"
    >
      {/* BRAND */}
      <div
        className="relative overflow-hidden p-6 
                      bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 
                      text-white"
      >
        <div
          className="absolute inset-0 opacity-20 
                        bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]"
        />
        <div className="relative">
          <h1 className="text-2xl font-extrabold tracking-wide font-brand">
            GLOBOPERSONA
          </h1>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem to="/" icon={<FiGrid />} label="Dashboard" />
        <NavItem to="/campaigns" icon={<FiMail />} label="Campaigns" />
        <NavItem
          to="/campaigns/create"
          icon={<FiPlusCircle />}
          label="Create Campaign"
          highlight
        />
      </nav>

      {/* USER PROFILE */}
      <div className="relative px-4 py-5 border-t">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center gap-3 
                     p-3 rounded-xl hover:bg-gray-100 transition"
        >
          <div
            className="w-10 h-10 rounded-full 
                          bg-gradient-to-r from-purple-500 to-indigo-500 
                          flex items-center justify-center text-white font-bold"
          >
            G
          </div>
          <div className="text-left flex-1">
            <p className="font-semibold text-gray-800">Guruprasad</p>
            <p className="text-sm text-gray-500">Marketing Team</p>
          </div>
          <FiUser />
        </button>

        {/* DROPDOWN */}
        {open && (
          <div
            className="absolute bottom-20 left-4 right-4 
                          bg-white rounded-xl shadow-xl border 
                          animate-fadeIn"
          >
            <NavLink
              to="/profile"
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
            >
              <FiUser /> Profile
            </NavLink>

            <button
              className="w-full flex items-center gap-3 px-4 py-3 
                               hover:bg-gray-100 text-red-600"
            >
              <FiLogOut /> Logout
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}

/* ---------------- NAV ITEM ---------------- */

function NavItem({ to, icon, label, highlight }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all
        ${
          isActive
            ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg"
            : highlight
            ? "bg-purple-50 text-purple-700 hover:bg-purple-100"
            : "text-gray-700 hover:bg-gray-100"
        }`
      }
    >
      <span className="text-xl">{icon}</span>
      {label}
    </NavLink>
  );
}
