import { useState } from "react";
import axios from "axios";
import { API_URL } from "../Api/Api";

const AddProject = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    quotes: "",
    clientName: "",
    companyName: "",
    budget: "",
    location: "",
    sector: "",
    completeDate: "",
    category: "",
    projectImg: null,
    galleryImg: [],
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectImage = (e) => {
    setForm((prev) => ({ ...prev, projectImg: e.target.files[0] }));
  };

  const handleGalleryImages = (e) => {
    setForm((prev) => ({
      ...prev,
      galleryImg: Array.from(e.target.files),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.projectImg) {
      alert("Project image is required");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    Object.keys(form).forEach((key) => {
      if (key === "galleryImg") {
        form.galleryImg.forEach((file) =>
          formData.append("galleryImg", file)
        );
      } else {
        formData.append(key, form[key]);
      }
    });

    try {
      await axios.post(`${API_URL}/projects`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);

      setForm({
        title: "",
        content: "",
        quotes: "",
        clientName: "",
        companyName: "",
        budget: "",
        location: "",
        sector: "",
        completeDate: "",
        category: "",
        projectImg: null,
        galleryImg: [],
      });

      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("API Error:", err.response?.data || err.message);
      alert("Something went wrong while submitting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* ================= LEFT FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="xl:col-span-2 bg-[#0f141b] border border-slate-800
        rounded-2xl p-6 space-y-5 overflow-y-auto no-scrollbar"
      >
        <h2 className="text-xl font-semibold sticky top-0 bg-[#0f141b] pb-4 z-10">
          Add New Project
        </h2>

        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg text-sm">
            ✅ Project added successfully!
          </div>
        )}

        <Input label="Project Title" name="title" value={form.title} onChange={handleChange} />
        <Textarea label="Project Content" name="content" value={form.content} onChange={handleChange} />
        <Textarea label="Quotes" name="quotes" value={form.quotes} onChange={handleChange} />

        <div className="grid md:grid-cols-2 gap-4">
          <FileInput label="Project Image" onChange={handleProjectImage} />
          <FileInput label="Gallery Images" multiple onChange={handleGalleryImages} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <Input label="Client Name" name="clientName" value={form.clientName} onChange={handleChange} />
          <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
          <Input label="Budget" name="budget" value={form.budget} onChange={handleChange} />
          <Input label="Location" name="location" value={form.location} onChange={handleChange} />
          <Input label="Sector" name="sector" value={form.sector} onChange={handleChange} />
          <Input label="Category" name="category" value={form.category} onChange={handleChange} />
          <Input label="Completion Date" type="date" name="completeDate" value={form.completeDate} onChange={handleChange} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60
          text-white px-6 py-2 rounded-lg font-medium"
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
      </form>

      {/* ================= RIGHT LIVE PREVIEW ================= */}
      <div className="bg-[#0f141b] border border-slate-800 rounded-2xl p-6 space-y-4 overflow-y-auto no-scrollbar">
        <h3 className="text-lg font-semibold sticky top-0 bg-[#0f141b] pb-4 z-10">
          Live Preview
        </h3>

        {form.projectImg ? (
          <img
            src={URL.createObjectURL(form.projectImg)}
            className="rounded-xl w-full h-40 object-cover"
            alt="Preview"
          />
        ) : (
          <div className="h-40 flex items-center justify-center text-slate-500 border border-dashed border-slate-700 rounded-xl">
            Project Image Preview
          </div>
        )}

        <h2 className="text-xl font-bold text-white">
          {form.title || "Project Title"}
        </h2>

        <p className="text-sm text-slate-400">
          {form.content || "Project description will appear here..."}
        </p>

        <blockquote className="italic text-slate-300 border-l-4 border-blue-500 pl-4">
          {form.quotes || "Project quote will appear here"}
        </blockquote>

        {form.galleryImg.length > 0 && (
          <div className="grid grid-cols-3 gap-2">
            {form.galleryImg.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                className="rounded-lg h-20 object-cover"
                alt="Gallery"
              />
            ))}
          </div>
        )}

        <ul className="text-sm text-slate-400 space-y-1">
          <li><b>Client:</b> {form.clientName || "-"}</li>
          <li><b>Company:</b> {form.companyName || "-"}</li>
          <li><b>Budget:</b> {form.budget || "-"}</li>
          <li><b>Location:</b> {form.location || "-"}</li>
          <li><b>Sector:</b> {form.sector || "-"}</li>
          <li><b>Category:</b> {form.category || "-"}</li>
          <li><b>Complete Date:</b> {form.completeDate || "-"}</li>
        </ul>
      </div>
    </div>
  );
};

export default AddProject;

/* ================= REUSABLE INPUTS ================= */

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

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm mb-1 text-slate-400">{label}</label>
    <input
      type="file"
      {...props}
      className="w-full text-sm text-slate-400"
    />
  </div>
);