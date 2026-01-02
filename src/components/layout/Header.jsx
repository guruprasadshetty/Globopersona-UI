import { useState } from "react";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow p-4 flex justify-between items-center relative">
      <h2 className="text-lg font-semibold">Email Marketing Platform</h2>

      <div className="relative">
        {/* USER BUTTON */}
        <div
          onClick={() => setOpen(!open)}
          className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center text-white cursor-pointer hover:scale-105 transition"
        >
          U
        </div>

        {/* POPUP */}
        {open && (
          <div className="absolute right-0 mt-3 bg-white shadow-xl border rounded-xl w-56 p-4 z-50 animate-fadeIn">
            <p className="font-semibold">User Profile</p>
            <p className="text-gray-500 text-sm mb-3">user@example.com</p>

            <div className="border-t pt-3 space-y-3">
              <button className="flex items-center gap-2 w-full text-left hover:text-purple-600 transition">
                <FiUser /> Profile
              </button>

              <button className="flex items-center gap-2 w-full text-left hover:text-purple-600 transition">
                <FiSettings /> Settings
              </button>

              <button className="flex items-center gap-2 w-full text-left text-red-500 hover:text-red-600 transition">
                <FiLogOut /> Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
