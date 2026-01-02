import { campaigns } from "../data/campaigns";
import { FiSearch, FiEdit, FiTrash2 } from "react-icons/fi";

export default function CampaignList() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Campaigns</h1>

      {/* Search + Actions */}
      <div className="bg-white shadow-md rounded-2xl p-5 mb-6 border border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-2 px-3 py-2 border rounded-lg w-72">
          <FiSearch className="text-gray-500" />
          <input
            placeholder="Search campaigns..."
            className="outline-none w-full"
          />
        </div>

        <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          + New Campaign
        </button>
      </div>

      {/* Campaign Table */}
      <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-5">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 border-b">
              <th className="py-3">Name</th>
              <th className="py-3">Status</th>
              <th className="py-3">Emails Sent</th>
              <th className="py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {campaigns.map((c, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition">
                <td className="py-4 font-semibold">{c.name}</td>

                {/* Status Badge */}
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm 
                      ${c.status === "Active" && "bg-green-100 text-green-600"}
                      ${c.status === "Draft" && "bg-yellow-100 text-yellow-600"}
                      ${c.status === "Completed" && "bg-blue-100 text-blue-600"}
                    `}
                  >
                    {c.status}
                  </span>
                </td>

                <td className="py-4">{c.emails}</td>

                {/* Action Buttons */}
                <td className="py-4 flex gap-3">
                  <button className="p-2 rounded-lg border hover:bg-purple-100 hover:text-purple-600 transition">
                    <FiEdit />
                  </button>
                  <button className="p-2 rounded-lg border hover:bg-red-100 hover:text-red-600 transition">
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
