import { useState } from "react";

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
    galleryImg: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImage = (e) => {
    setForm({ ...form, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", form);
  };

  return (
    <div className="h-[calc(100vh-4rem)] grid grid-cols-1 xl:grid-cols-3 gap-6">
      
      {/* LEFT FORM (SCROLLABLE) */}
      <form
        onSubmit={handleSubmit}
        className="xl:col-span-2 bg-[#0f141b] border border-slate-800
        rounded-2xl p-6 space-y-5 overflow-y-auto"
      >
        <h2 className="text-xl font-semibold sticky top-0 bg-[#0f141b] pb-4 z-10">
          Add New Project
        </h2>

        <Input label="Project Title" name="title" value={form.title} onChange={handleChange} />
        <Textarea label="Project Content" name="content" value={form.content} onChange={handleChange} />
        <Textarea label="Quotes" name="quotes" value={form.quotes} onChange={handleChange} />

        <div className="grid md:grid-cols-2 gap-4">
          <FileInput label="Project Image" name="projectImg" onChange={handleImage} />
          <FileInput label="Related Image" name="galleryImg" onChange={handleImage} />
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
        >
          Submit Project
        </button>
      </form>

      {/* RIGHT PREVIEW (SCROLLABLE) */}
      <div className="bg-[#0f141b] border border-slate-800 rounded-2xl p-6 space-y-4 overflow-y-auto">
        <h3 className="text-lg font-semibold sticky top-0 bg-[#0f141b] pb-4 z-10">
          Live Preview
        </h3>

        {form.projectImg && (
          <img
            src={URL.createObjectURL(form.projectImg)}
            className="rounded-xl w-full h-40 object-cover"
            alt="Project Preview"
          />
        )}

        <div>
          <p className="text-xl font-bold">{form.title || "Project Title"}</p>
          <p className="text-sm text-slate-400 mt-2">
            {form.content || "Project description will appear here"}
          </p>
        </div>

        <blockquote className="italic text-slate-300 border-l-4 border-blue-500 pl-4">
          {form.quotes || "Project quote"}
        </blockquote>

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

/* ---------- REUSABLE INPUTS ---------- */

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
    <input type="file" {...props} className="w-full text-sm text-slate-400" />
  </div>
);
