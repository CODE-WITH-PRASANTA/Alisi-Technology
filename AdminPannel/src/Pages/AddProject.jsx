import { useState } from "react";
import api from "../Api/Api";

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
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleProjectImage = (e) => {
    setForm((p) => ({ ...p, projectImg: e.target.files[0] }));
  };

  const handleGalleryImages = (e) => {
    setForm((p) => ({
      ...p,
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

    Object.entries(form).forEach(([key, value]) => {
      if (key === "galleryImg") {
        value.forEach((file) => formData.append("galleryImg", file));
      } else if (key === "projectImg") {
        formData.append("projectImg", value);
      } else {
        formData.append(key, value);
      }
    });

    try {
      await api.post("/projects", formData);
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
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 text-black">
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto bg-white rounded-xl
        border border-slate-200 shadow-sm p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-slate-800">
          Add New Project
        </h2>

        {success && (
          <div className="rounded-md bg-green-50 border border-green-200
          text-green-700 px-4 py-3 text-sm">
            ✅ Project added successfully
          </div>
        )}

        {/* INPUT GRID */}
        <div className="grid md:grid-cols-2 gap-5">
          <Input label="Project Title" name="title" value={form.title} onChange={handleChange} />
          <Input label="Category" name="category" value={form.category} onChange={handleChange} />
          <Input label="Client Name" name="clientName" value={form.clientName} onChange={handleChange} />
          <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} />
          <Input label="Budget" name="budget" value={form.budget} onChange={handleChange} />
          <Input label="Location" name="location" value={form.location} onChange={handleChange} />
          <Input label="Sector" name="sector" value={form.sector} onChange={handleChange} />
          <Input type="date" label="Completion Date" name="completeDate" value={form.completeDate} onChange={handleChange} />
        </div>

        <Textarea label="Project Content" name="content" value={form.content} onChange={handleChange} />
        <Textarea label="Quotes" name="quotes" value={form.quotes} onChange={handleChange} />

        <div className="grid md:grid-cols-2 gap-5">
          <FileInput label="Project Image" onChange={handleProjectImage} />
          <FileInput label="Gallery Images" multiple onChange={handleGalleryImages} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 rounded-lg bg-blue-600
          hover:bg-blue-700 text-white font-medium
          transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Project"}
        </button>
      </form>
    </div>
  );
};

/* ================= UI COMPONENTS ================= */

const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-600 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full h-10 rounded-md border border-slate-300
      px-3 text-sm focus:outline-none focus:ring-2
      focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-600 mb-1">
      {label}
    </label>
    <textarea
      {...props}
      rows={4}
      className="w-full rounded-md border border-slate-300
      px-3 py-2 text-sm focus:outline-none
      focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
    />
  </div>
);

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-slate-600 mb-1">
      {label}
    </label>
    <input
      type="file"
      {...props}
      className="w-full text-sm text-slate-600
      file:h-10 file:px-4 file:rounded-md
      file:border file:border-slate-300
      file:bg-slate-50 file:text-slate-700
      hover:file:bg-slate-100"
    />
  </div>
);

export default AddProject;