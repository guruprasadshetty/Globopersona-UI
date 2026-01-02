import { FiMail, FiTag, FiEdit, FiClock } from "react-icons/fi";
import Button from "../components/ui/Button";

export default function CampaignForm() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create Campaign</h1>

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full lg:w-3/4 border border-gray-100">
        {/* Header Info */}
        <div className="mb-6">
          <p className="text-gray-600">
            Set up your email campaign details and configure the content.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Campaign Name */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 flex items-center gap-2">
              <FiTag /> Campaign Name
            </label>
            <input
              className="border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Ex: Welcome Campaign"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 flex items-center gap-2">
              <FiMail /> Subject Line
            </label>
            <input
              className="border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-purple-400 outline-none"
              placeholder="Ex: Welcome to our platform 🎉"
            />
          </div>

          {/* Schedule */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 flex items-center gap-2">
              <FiClock /> Schedule Campaign
            </label>
            <select className="border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-purple-400 outline-none">
              <option>Send Now</option>
              <option>Schedule</option>
              <option>Save as Draft</option>
            </select>
          </div>

          {/* Audience */}
          <div className="flex flex-col">
            <label className="text-sm text-gray-500 flex items-center gap-2">
              🎯 Target Audience
            </label>
            <select className="border rounded-lg p-3 mt-1 focus:ring-2 focus:ring-purple-400 outline-none">
              <option>All Subscribers</option>
              <option>New Users</option>
              <option>Inactive Users</option>
            </select>
          </div>
        </div>

        {/* Email Content */}
        <div className="mt-6">
          <label className="text-sm text-gray-500 flex items-center gap-2 mb-1">
            <FiEdit /> Email Content
          </label>

          <textarea
            rows={8}
            className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-purple-400 outline-none"
            placeholder="Write your amazing email content here..."
          ></textarea>
        </div>

        {/* Action Bar */}
        <div className="flex justify-end mt-8 gap-4">
          <button className="px-5 py-2 rounded-lg border hover:bg-gray-100 transition">
            Cancel
          </button>

          <Button>Create Campaign</Button>
        </div>
      </div>
    </>
  );
}
