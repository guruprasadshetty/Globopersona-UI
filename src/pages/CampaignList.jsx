import { useCampaigns } from "../context/CampaignContext";
import { useState } from "react";
import {
  FiSearch,
  FiMail,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiX,
} from "react-icons/fi";

export default function CampaignList() {
  const { campaigns } = useCampaigns();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const filteredCampaigns = campaigns.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ? true : c.status.toLowerCase() === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-10 animate-fadeIn">
      {/* HEADER */}
      <div
        className="relative overflow-hidden rounded-3xl p-8 
                      bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 
                      text-white shadow-xl"
      >
        <div
          className="absolute inset-0 opacity-20 
                        bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]"
        />
        <div className="relative">
          <h1 className="text-4xl font-extrabold tracking-tight">Campaigns</h1>
          <p className="text-lg opacity-90 mt-1">
            Manage and monitor all your marketing campaigns
          </p>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SummaryCard
          title="Total Campaigns"
          value={campaigns.length}
          icon={<FiMail />}
          color="from-purple-500 to-indigo-500"
        />
        <SummaryCard
          title="Active"
          value={campaigns.filter((c) => c.status === "Active").length}
          icon={<FiCheckCircle />}
          color="from-green-500 to-emerald-500"
        />
        <SummaryCard
          title="Draft"
          value={campaigns.filter((c) => c.status !== "Active").length}
          icon={<FiClock />}
          color="from-yellow-400 to-orange-500"
        />
      </div>

      {/* CONTROLS */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search campaigns..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border 
                       focus:ring-2 focus:ring-purple-400 outline-none"
          />
        </div>

        <div className="flex gap-2 bg-white rounded-xl p-1 shadow">
          {["all", "active", "draft"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg capitalize transition
                ${
                  filter === f ? "bg-gray-900 text-white" : "hover:bg-gray-100"
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* LIST */}
      {filteredCampaigns.length === 0 ? (
        <div className="bg-white rounded-3xl shadow p-10 text-center">
          <h3 className="text-xl font-bold text-gray-800">
            No campaigns found
          </h3>
          <p className="text-gray-500 mt-2">
            Try adjusting your search or create a new campaign
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredCampaigns.map((c) => (
            <div
              key={c.id}
              className="group bg-white rounded-2xl border shadow-sm p-6
                         hover:shadow-lg transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
                  <p className="text-gray-500">{c.subject}</p>

                  <div className="flex flex-wrap gap-3 mt-2 text-sm">
                    <Badge icon={<FiUsers />} text={c.audience} />
                    <Badge icon={<FiMail />} text={`${c.emails} Emails`} />
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold
                      ${
                        c.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {c.status}
                  </span>

                  <button
                    onClick={() => setSelectedCampaign(c)}
                    className="opacity-0 group-hover:opacity-100 transition
                               px-4 py-2 rounded-lg bg-purple-600 text-white
                               hover:bg-purple-700"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW MODAL */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-xl w-full max-w-lg p-6 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Campaign Details
              </h2>
              <button
                onClick={() => setSelectedCampaign(null)}
                className="text-gray-500 hover:text-gray-800"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <Detail label="Campaign Name" value={selectedCampaign.name} />
              <Detail label="Subject" value={selectedCampaign.subject} />
              <Detail label="Audience" value={selectedCampaign.audience} />
              <Detail label="Emails Sent" value={selectedCampaign.emails} />
              <Detail label="Status" value={selectedCampaign.status} />
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedCampaign(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function SummaryCard({ title, value, icon, color }) {
  return (
    <div
      className={`rounded-2xl p-6 text-white shadow-lg bg-gradient-to-r ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">{title}</p>
          <h3 className="text-3xl font-extrabold mt-1">{value}</h3>
        </div>
        <div className="text-3xl opacity-80">{icon}</div>
      </div>
    </div>
  );
}

function Badge({ icon, text }) {
  return (
    <span
      className="flex items-center gap-2 bg-gray-100 
                     text-gray-700 px-3 py-1.5 rounded-lg"
    >
      {icon}
      {text}
    </span>
  );
}

function Detail({ label, value }) {
  return (
    <div className="flex justify-between border-b pb-1">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-800">{value}</span>
    </div>
  );
}
