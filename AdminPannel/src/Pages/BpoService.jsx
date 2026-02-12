import { useState } from "react";
import ViewPrices from "./ViewPrices";

/* ---------- REUSABLE INPUT COMPONENTS ---------- */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm mb-1 text-slate-400">{label}</label>
    <input
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-[#0b0f14]
      border border-slate-700 text-white outline-none focus:border-blue-500"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm mb-1 text-slate-400">{label}</label>
    <textarea
      {...props}
      rows={4}
      className="w-full px-4 py-2 rounded-lg bg-[#0b0f14]
      border border-slate-700 text-white outline-none focus:border-blue-500"
    />
  </div>
);

const Select = ({ label, options, ...props }) => (
  <div>
    <label className="block text-sm mb-1 text-slate-400">{label}</label>
    <select
      {...props}
      className="w-full px-4 py-2 rounded-lg bg-[#0b0f14]
      border border-slate-700 text-white outline-none focus:border-blue-500"
    >
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

/* ---------- MAIN COMPONENT ---------- */

const BpoService = () => {
  const [form, setForm] = useState({
    title: "",
    category: "",
    price: "",
    duration: "",
    description: "",
    features: [],
    status: "Active",
  });

  const [featureInput, setFeatureInput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addFeature = () => {
    if (!featureInput.trim()) return;
    setForm({ ...form, features: [...form.features, featureInput.trim()] });
    setFeatureInput("");
  };

  const removeFeature = (index) => {
    setForm({
      ...form,
      features: form.features.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Price Data:", form);
    alert("Price added (check console)");
  };

  return (
    <div className="h-[calc(100vh-6rem)]">

      {/* ---------- PAGE TITLE ---------- */}
      <h1 className="text-2xl font-semibold mb-6">Bpo Service Price</h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* ---------- FORM ---------- */}
        <form
          onSubmit={handleSubmit}
          className="xl:col-span-2 bg-[#0f141b] border border-slate-800
          rounded-2xl p-6 space-y-5 overflow-y-auto h-[60vh]"
        >

          {/* ✔ Removed: Add Price heading */}

          <Input label="Plan Title" name="title" value={form.title} onChange={handleChange} />
          <Input label="Category" name="category" value={form.category} onChange={handleChange} />
          <Input label="Price" name="price" value={form.price} onChange={handleChange} />
          <Input label="Duration (Monthly / Yearly)" name="duration" value={form.duration} onChange={handleChange} />

          <Textarea
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          {/* FEATURES */}
          <div>
            <label className="block text-sm mb-1 text-slate-400">Features</label>

            <div className="flex gap-2">
              <input
                value={featureInput}
                onChange={(e) => setFeatureInput(e.target.value)}
                placeholder="Enter feature"
                className="flex-1 px-4 py-2 rounded-lg bg-[#0b0f14]
                border border-slate-700 outline-none focus:border-blue-500"
              />
              <button
                type="button"
                onClick={addFeature}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              {form.features.map((f, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 px-3 py-1
                  bg-[#1b2230] rounded-full text-sm"
                >
                  {f}
                  <button
                    type="button"
                    onClick={() => removeFeature(i)}
                    className="text-red-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </span>
              ))}
            </div>
          </div>

          <Select
            label="Status"
            name="status"
            value={form.status}
            onChange={handleChange}
            options={["Active", "Inactive"]}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
          >
            Submit Price
          </button>
        </form>

        {/* ---------- LIVE PREVIEW ---------- */}
        <div
          className="bg-[#0f141b] border border-slate-800 rounded-2xl
          p-6 space-y-4 overflow-y-auto h-full"
        >
          <h3 className="text-lg font-semibold sticky top-0 bg-[#0f141b] pb-4 z-10">
            Live Preview
          </h3>

          <div className="border border-slate-700 rounded-xl p-4 bg-[#0b0f14]">
            <p className="text-xl font-bold">{form.title || "Plan Title"}</p>
            <p className="text-sm text-slate-400">{form.category || "Category"}</p>

            <p className="text-2xl font-extrabold text-blue-400 mt-2">
              {form.price || "₹0"}
              <span className="text-sm text-slate-400">
                {" "} / {form.duration || "Duration"}
              </span>
            </p>

            <p className="text-sm text-slate-300 mt-3">
              {form.description || "Plan description will appear here"}
            </p>

            <ul className="mt-3 space-y-1 text-sm text-slate-400">
              {form.features.length > 0 ? (
                form.features.map((f, i) => <li key={i}>• {f}</li>)
              ) : (
                <li>• No features added</li>
              )}
            </ul>

            <span
              className={`inline-block mt-4 px-3 py-1 text-xs rounded-full
              ${
                form.status === "Active"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {form.status}
            </span>
          </div>
        </div>

        {/* ---------- VIEW PRICES ---------- */}
        <div className="xl:col-span-3 w-full">
          <ViewPrices />
        </div>

      </div>
    </div>
  );
};

export default BpoService;
