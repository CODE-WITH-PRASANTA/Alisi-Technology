import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const OurProjectComp = () => {
  const [logo, setLogo] = useState(null);
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ================= HANDLERS ================= */

  const handleLogoChange = (e) => {
    setLogo(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!logo) {
      alert("Please select a logo");
      return;
    }

    setLoading(true);

    // simulate upload
    const newLogo = {
      id: Date.now(),
      preview: URL.createObjectURL(logo),
    };

    setTimeout(() => {
      setLogos((prev) => [newLogo, ...prev]);
      setLogo(null);
      setSuccess(true);
      setLoading(false);

      setTimeout(() => setSuccess(false), 2500);
    }, 800);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Delete this logo?")) return;
    setLogos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="h-[calc(100vh-4rem)] grid grid-cols-1 xl:grid-cols-3 gap-6">
      {/* ================= LEFT FORM ================= */}
      <form
        onSubmit={handleSubmit}
        className="xl:col-span-1 bg-[#0f141b] border border-slate-800
        rounded-2xl p-6 space-y-5"
      >
        <h2 className="text-xl font-semibold">Add Company Logo</h2>

        {success && (
          <div className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-lg text-sm">
            ✅ Logo uploaded successfully
          </div>
        )}

        <FileInput label="Company Logo" onChange={handleLogoChange} />

        {logo && (
          <img
            src={URL.createObjectURL(logo)}
            className="w-full h-40 object-contain bg-[#0b0f14]
            rounded-xl border border-slate-700"
            alt="Preview"
          />
        )}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60
          text-white px-6 py-2 rounded-lg font-medium w-full"
        >
          {loading ? "Uploading..." : "Submit Logo"}
        </button>
      </form>

      {/* ================= RIGHT LOGO LIST ================= */}
      <div
        className="xl:col-span-2 bg-[#0f141b] border border-slate-800
        rounded-2xl p-6 overflow-y-auto no-scrollbar"
      >
        <h3 className="text-lg font-semibold mb-4">All Company Logos</h3>

        {logos.length === 0 ? (
          <p className="text-slate-400 text-sm">
            No logos uploaded yet
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {logos.map((item) => (
              <div
                key={item.id}
                className="relative group border border-slate-700
                rounded-xl bg-[#0b0f14] p-4 flex items-center justify-center"
              >
                <img
                  src={item.preview}
                  alt="Company Logo"
                  className="max-h-20 object-contain"
                />

                {/* DELETE */}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="absolute top-2 right-2 bg-red-500
                  text-white p-2 rounded-full opacity-0
                  group-hover:opacity-100 transition"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OurProjectComp;

/* ================= REUSABLE ================= */

const FileInput = ({ label, ...props }) => (
  <div>
    <label className="block text-sm mb-1 text-slate-400">
      {label}
    </label>
    <input
      type="file"
      {...props}
      className="w-full text-sm text-slate-400"
    />
  </div>
);