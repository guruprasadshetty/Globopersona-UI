import { useEffect, useState } from "react";
import {
  FiMail,
  FiUsers,
  FiCheckCircle,
  FiTrendingUp,
  FiPlay,
  FiActivity,
  FiSend,
} from "react-icons/fi";

export default function Dashboard() {
  const [stats, setStats] = useState({
    campaigns: 0,
    contacts: 0,
    emails: 0,
  });

  const target = {
    campaigns: 12,
    contacts: 5220,
    emails: 48400,
  };

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setStats({
        campaigns: Math.min(target.campaigns, i),
        contacts: Math.min(target.contacts, i * 500),
        emails: Math.min(target.emails, i * 4000),
      });
      if (i >= 12) clearInterval(interval);
    }, 70);
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="relative mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]"></div>

          <div className="relative flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold">Dashboard Overview</h1>
              <p className="mt-2 opacity-80">
                Track performance, analyze growth and manage campaigns
                effortlessly.
              </p>
            </div>

            <button className="px-6 py-3 bg-white text-purple-700 rounded-xl shadow hover:scale-105 transition font-semibold flex items-center gap-2">
              <FiPlay /> Start New Campaign
            </button>
          </div>
        </div>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-xl border hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Campaigns</p>
              <h2 className="text-4xl font-extrabold mt-2">
                {stats.campaigns}
              </h2>
            </div>
            <div className="w-14 h-14 bg-purple-100 text-purple-600 flex items-center justify-center rounded-xl">
              <FiMail size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl border hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Active Contacts</p>
              <h2 className="text-4xl font-extrabold mt-2">
                {stats.contacts.toLocaleString()}
              </h2>
            </div>
            <div className="w-14 h-14 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl">
              <FiUsers size={28} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-xl border hover:shadow-2xl transition transform hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Emails Sent</p>
              <h2 className="text-4xl font-extrabold mt-2">
                {stats.emails.toLocaleString()}
              </h2>
            </div>
            <div className="w-14 h-14 bg-green-100 text-green-600 flex items-center justify-center rounded-xl">
              <FiCheckCircle size={28} />
            </div>
          </div>
        </div>
      </div>

      {/* LOWER SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {/* PERFORMANCE CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border lg:col-span-2">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FiTrendingUp /> Weekly Performance
          </h2>

          <div className="flex items-end gap-4 h-44">
            {[30, 60, 45, 80, 55, 90, 75].map((v, i) => (
              <div
                key={i}
                className="bg-purple-500 hover:bg-purple-600 transition rounded-xl w-10"
                style={{ height: `${v}%` }}
              ></div>
            ))}
          </div>

          <div className="flex justify-between text-gray-500 mt-3 text-sm">
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
            <p>Sat</p>
            <p>Sun</p>
          </div>
        </div>

        {/* ACTIVITY TIMELINE */}
        <div className="bg-white p-6 rounded-2xl shadow-xl border">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FiActivity /> Recent Activity
          </h2>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold">Welcome Campaign Sent</p>
                <p className="text-gray-500 text-sm">2300 emails delivered</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold">Black Friday Campaign Completed</p>
                <p className="text-gray-500 text-sm">12,100 emails sent</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="font-semibold">New Audience Added</p>
                <p className="text-gray-500 text-sm">1,200 new subscribers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
