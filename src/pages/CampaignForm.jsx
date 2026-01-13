import { useCampaigns } from "../context/CampaignContext";
import { useState } from "react";
import { FiArrowRight, FiArrowLeft, FiCheck } from "react-icons/fi";

export default function CampaignForm() {
  const { addCampaign } = useCampaigns();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    subject: "",
    audience: "",
    content: "",
  });

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="space-y-10 animate-fadeIn">
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
        <div className="relative">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Create Campaign
          </h1>
          <p className="text-lg opacity-90 mt-1">
            Build and launch your email campaign step by step
          </p>
        </div>
      </div>

      {/* PROGRESS */}
      <div className="flex items-center gap-4">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center 
                font-bold transition
                ${
                  step >= s
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
            >
              {step > s ? <FiCheck /> : s}
            </div>
            {s < 3 && (
              <div className="w-10 h-1 bg-gray-200 rounded">
                <div
                  className={`h-1 rounded bg-purple-600 transition-all`}
                  style={{ width: step > s ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FORM CARD */}
      <div className="bg-white rounded-3xl shadow-lg border p-8">
        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900">
              Campaign Basics
            </h2>

            <input
              name="name"
              placeholder="Campaign Name"
              value={form.name}
              onChange={update}
              className="input"
            />

            <input
              name="subject"
              placeholder="Email Subject"
              value={form.subject}
              onChange={update}
              className="input"
            />
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900">
              Audience & Content
            </h2>

            <select
              name="audience"
              value={form.audience}
              onChange={update}
              className="input"
            >
              <option value="">Select audience</option>
              <option>Marketing Leads</option>
              <option>Existing Customers</option>
              <option>Newsletter Subscribers</option>
            </select>

            <textarea
              name="content"
              rows="4"
              placeholder="Email content..."
              value={form.content}
              onChange={update}
              className="input"
            />
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6 animate-fadeIn">
            <h2 className="text-2xl font-bold text-gray-900">
              Review Campaign
            </h2>

            <div className="bg-gray-50 rounded-xl p-6 space-y-2">
              <p>
                <strong>Name:</strong> {form.name || "-"}
              </p>
              <p>
                <strong>Subject:</strong> {form.subject || "-"}
              </p>
              <p>
                <strong>Audience:</strong> {form.audience || "-"}
              </p>
              <p>
                <strong>Content:</strong> {form.content || "-"}
              </p>
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="flex justify-between mt-10">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 px-5 py-2 
                         rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              <FiArrowLeft /> Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 px-6 py-2 
                         rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 
                         text-white hover:shadow-lg"
            >
              Next <FiArrowRight />
            </button>
          ) : (
            <button
              onClick={() => {
                addCampaign(form);
                setStep(1);
                alert("Campaign created successfully!");
              }}
              className="flex items-center gap-2 px-6 py-2 
             rounded-xl bg-green-600 text-white hover:bg-green-700"
            >
              <FiCheck /> Create Campaign
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
