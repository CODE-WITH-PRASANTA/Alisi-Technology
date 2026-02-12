import { useState } from "react";
import API_URL from "../../Api/Api";
import ViewPrices from "./ViewPrices";

const AiData = () => {
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
  const [editingId, setEditingId] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);
  const [loading, setLoading] = useState(false);

  /* ---------------- HANDLE INPUT ---------------- */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /* ---------------- FEATURE ADD ---------------- */

  const addFeature = () => {
    if (!featureInput.trim()) return;

    setForm({
      ...form,
      features: [...form.features, featureInput.trim()],
    });

    setFeatureInput("");
  };

  /* ---------------- FEATURE REMOVE ---------------- */

  const removeFeature = (index) => {
    setForm({
      ...form,
      features: form.features.filter((_, i) => i !== index),
    });
  };

  /* ---------------- RESET FORM ---------------- */

  const resetForm = () => {
    setForm({
      title: "",
      category: "",
      price: "",
      duration: "",
      description: "",
      features: [],
      status: "Active",
    });
    setFeatureInput("");
    setEditingId(null);
  };

  /* ---------------- SUBMIT (ADD / EDIT) ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (editingId) {
        await API_URL.put(`/ai-prices/${editingId}`, form);
        alert("Price Updated ✅");
      } else {
        await API_URL.post("/ai-prices", form);
        alert("Price Created ✅");
      }

      resetForm();
      setRefreshKey((prev) => prev + 1);
    } catch (err) {
      console.error(err);
      alert("Operation failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

      {/* ================= FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="xl:col-span-2 bg-[#0f141b] border border-slate-800 rounded-2xl p-6 space-y-5"
      >
        <h2 className="text-xl font-semibold">
          {editingId ? "Edit Price Plan" : "Add Price Plan"}
        </h2>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Plan Title"
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        />

        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        />

        <input
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        />

        {/* FEATURES */}
        <div className="flex gap-2">
          <input
            value={featureInput}
            onChange={(e) => setFeatureInput(e.target.value)}
            placeholder="Add feature"
            className="flex-1 p-2 bg-black border border-slate-700 rounded text-white"
          />
          <button
            type="button"
            onClick={addFeature}
            className="px-4 py-2 bg-blue-600 rounded text-white"
          >
            Add
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {form.features.map((f, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-[#1b2230] rounded-full text-sm text-white"
            >
              {f}
              <button
                type="button"
                onClick={() => removeFeature(i)}
                className="ml-2 text-red-400"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="w-full p-2 bg-black border border-slate-700 rounded text-white"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 px-6 py-2 rounded text-white"
        >
          {loading
            ? "Saving..."
            : editingId
            ? "Update Plan"
            : "Create Plan"}
        </button>
      </form>

      {/* ================= LIVE PREVIEW ================= */}
      <div className="bg-[#0f141b] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Live Preview</h3>

        <div className="border border-slate-700 p-4 rounded-xl bg-[#0b0f14]">
          <h3 className="text-xl font-bold">{form.title || "Plan Title"}</h3>

          <p className="text-slate-400">
            {form.category || "Category"}
          </p>

          <p className="text-2xl text-blue-400 mt-2">
            {form.price || "₹0"} / {form.duration || "Duration"}
          </p>

          <p className="mt-3 text-slate-300">
            {form.description || "Description preview..."}
          </p>

          <ul className="mt-3 text-sm text-slate-400">
            {form.features.length > 0 ? (
              form.features.map((f, i) => <li key={i}>• {f}</li>)
            ) : (
              <li>• No features added</li>
            )}
          </ul>

          <span
            className={`inline-block mt-3 px-3 py-1 text-xs rounded-full ${
              form.status === "Active"
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {form.status}
          </span>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="xl:col-span-3">
        <ViewPrices
          refreshKey={refreshKey}
          onEdit={(price) => {
            setForm({
              title: price.title,
              category: price.category,
              price: price.price,
              duration: price.duration,
              description: price.description,
              features: price.features || [],
              status: price.status,
            });
            setEditingId(price._id);
          }}
        />
      </div>
    </div>
  );
};

export default AiData;