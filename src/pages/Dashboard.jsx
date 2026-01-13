import { useCampaigns } from "../context/CampaignContext";
import { useState, useEffect } from "react";
import {
  FiTrendingUp,
  FiMail,
  FiUsers,
  FiArrowUpRight,
  FiInfo,
} from "react-icons/fi";

/* ---------------- MOCK VISUAL DATA (charts + UI only) ---------------- */
const DATA = {
  emails: {
    label: "Emails Sent",
    color: "from-purple-500 to-indigo-500",
    day: { chart: [20, 30, 25, 35, 32, 40, 34], progress: 62 },
    week: { chart: [30, 45, 42, 55, 50, 65, 60], progress: 74 },
    month: { chart: [40, 60, 52, 78, 65, 90, 72], progress: 88 },
    insight: "Email delivery rate is consistently high",
  },
  campaigns: {
    label: "Campaigns",
    color: "from-blue-500 to-cyan-500",
    day: { chart: [0, 1, 0, 1, 0, 1, 0], progress: 40 },
    week: { chart: [1, 1, 2, 1, 0, 1, 0], progress: 66 },
    month: { chart: [2, 1, 3, 2, 1, 2, 1], progress: 82 },
    insight: "Campaign frequency increased this period",
  },
  contacts: {
    label: "Active Contacts",
    color: "from-green-500 to-emerald-500",
    day: { chart: [40, 60, 55, 70, 65, 80, 75], progress: 58 },
    week: { chart: [220, 320, 280, 400, 360, 520, 480], progress: 72 },
    month: { chart: [520, 640, 600, 720, 680, 840, 800], progress: 86 },
    insight: "Audience engagement growing steadily",
  },
};

const ranges = ["day", "week", "month"];

/* --------- Helpers to simulate analytics ranges (frontend-only) -------- */
const getEmailTotalByRange = (total, range) => {
  if (range === "day") return Math.floor(total * 0.05);
  if (range === "week") return Math.floor(total * 0.3);
  return total; // month
};

const getCampaignTotalByRange = (total, range) => {
  if (total === 0) return 0;

  if (range === "day") {
    return Math.min(total, 2);
  }

  if (range === "week") {
    return Math.min(total, Math.max(2, Math.ceil(total * 0.6)));
  }

  return total; // month
};

/* ---------------- DASHBOARD ---------------- */
export default function Dashboard() {
  const { campaigns } = useCampaigns();

  /* REAL DATA FROM CONTEXT */
  const totalCampaigns = campaigns.length;
  const totalEmails = campaigns.reduce((sum, c) => sum + (c.emails || 0), 0);

  const [metric, setMetric] = useState("emails");
  const [range, setRange] = useState("month");
  const [count, setCount] = useState(0);

  /* Merge real totals with mock visuals */
  const base = DATA[metric][range];
  const current = {
    ...base,
    total:
      metric === "emails"
        ? getEmailTotalByRange(totalEmails, range)
        : metric === "campaigns"
        ? getCampaignTotalByRange(totalCampaigns, range)
        : metric === "contacts"
        ? base.chart.reduce((a, b) => a + b, 0)
        : 0,
  };

  const chartMax = Math.max(...base.chart);

  /* Animated counter */
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.ceil(current.total / 30));

    const interval = setInterval(() => {
      start += step;
      if (start >= current.total) {
        setCount(current.total);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [metric, range, current.total]);

  return (
    <div className="space-y-10 animate-rise">
      {/* HEADER */}
      <div>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Analytics Dashboard
        </h1>
        <p className="text-gray-600 mt-1 text-lg">
          Interactive insights across campaigns & audiences
        </p>
      </div>

      {/* METRIC SELECTOR */}
      <div className="flex gap-3">
        {Object.keys(DATA).map((key) => (
          <button
            key={key}
            onClick={() => setMetric(key)}
            className={`px-5 py-2 rounded-xl font-semibold transition-all
              ${
                metric === key
                  ? `bg-gradient-to-r ${DATA[key].color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-600 hover:shadow"
              }`}
          >
            {DATA[key].label}
          </button>
        ))}
      </div>

      {/* RANGE SELECTOR */}
      <div className="flex gap-2 bg-white w-fit p-1 rounded-xl shadow">
        {ranges.map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={`px-4 py-1.5 rounded-lg capitalize transition
              ${range === r ? "bg-gray-900 text-white" : "hover:bg-gray-100"}`}
          >
            {r}
          </button>
        ))}
      </div>

      {/* HERO CARD */}
      <div
        className={`relative overflow-hidden rounded-3xl p-8 bg-gradient-to-r ${DATA[metric].color} text-white shadow-xl`}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,#ffffff,transparent_40%)]"></div>

        <div className="relative flex justify-between items-center">
          <div>
            <p className="uppercase tracking-wide text-sm opacity-90">
              {DATA[metric].label} ({range})
            </p>
            <h2 className="text-6xl font-extrabold mt-2">
              {count.toLocaleString()}
            </h2>
            <p className="opacity-90 mt-1">{DATA[metric].insight}</p>
          </div>

          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
            <FiArrowUpRight />
            <span className="font-semibold">Live</span>
          </div>
        </div>
      </div>

      {/* ANALYTICS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* BAR CHART */}
        <div className="lg:col-span-2 bg-white/80 backdrop-blur rounded-3xl p-6 shadow-lg border">
          <h3 className="text-xl font-bold text-gray-800 mb-6">
            Trend Analysis
          </h3>

          <div className="flex items-end gap-4 h-44">
            {base.chart.map((v, i) => (
              <div
                key={i}
                title={v}
                className={`flex-1 rounded-xl cursor-pointer transition-all duration-300
                  bg-gradient-to-t ${DATA[metric].color}
                  hover:scale-y-110`}
                style={{ height: `${(v / chartMax) * 100}%` }}
              />
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500 mt-4">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* PROGRESS RING */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border flex flex-col items-center justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="url(#grad)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * base.progress) / 100}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="grad">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
              {base.progress}%
            </div>
          </div>

          <p className="mt-4 font-semibold text-gray-700">Performance Score</p>
        </div>
      </div>

      {/* INSIGHTS */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-3xl p-6 shadow-lg flex items-center gap-4">
        <FiInfo size={24} />
        <p className="text-lg">
          Metrics update dynamically based on created campaigns and selected
          time range.
        </p>
      </div>
    </div>
  );
}
