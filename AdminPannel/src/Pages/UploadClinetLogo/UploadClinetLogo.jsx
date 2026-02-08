import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./UploadClinetLogo.css";

const UploadClientLogo = () => {
  const [logos, setLogos] = useState([]);
  const [logoFile, setLogoFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= FETCH LOGOS ================= */
  const fetchLogos = async () => {
    try {
      const res = await API_URL.get("/client-logos");
      setLogos(res.data);
    } catch (err) {
      console.error("FETCH LOGOS ERROR:", err);
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  /* ================= FILE HANDLE ================= */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLogoFile(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!logoFile) return alert("Please select a logo");

    const formData = new FormData();
    formData.append("logo", logoFile);

    try {
      setLoading(true);
      await API_URL.post("/client-logos", formData);
      setLogoFile(null);
      setPreview("");
      fetchLogos();
    } catch (err) {
      console.error("UPLOAD ERROR:", err);
      alert("Logo upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */
  const deleteLogo = async (id) => {
    if (!window.confirm("Delete this logo?")) return;

    try {
      await API_URL.delete(`/client-logos/${id}`);
      fetchLogos();
    } catch (err) {
      console.error("DELETE ERROR:", err);
      alert("Delete failed");
    }
  };

  return (
    <div className="upload-client-logo-wrapper">
      {/* ================= LEFT : FORM ================= */}
      <div className="upload-client-logo-form-box">
        <h2 className="upload-client-logo-title">Upload Client Logo</h2>

        <form onSubmit={handleSubmit} className="upload-client-logo-form">
          <label className="upload-client-logo-label">
            Select Logo Image
          </label>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="upload-client-logo-input"
          />

          {preview && (
            <img
              src={preview}
              alt="preview"
              className="upload-client-logo-preview"
            />
          )}

          <button
            className="upload-client-logo-submit"
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload Logo"}
          </button>
        </form>
      </div>

      {/* ================= RIGHT : TABLE ================= */}
      <div className="upload-client-logo-table-box">
        <h2 className="upload-client-logo-title">
          Uploaded Client Logos
        </h2>

        <div className="upload-client-logo-table-scroll">
          <table className="upload-client-logo-table">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Logo</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {logos.length === 0 && (
                <tr>
                  <td colSpan="3" className="upload-client-logo-empty">
                    No logos uploaded
                  </td>
                </tr>
              )}

              {logos.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`${IMAGE_BASE_URL}/${item.logo}`}
                      alt="logo"
                      className="upload-client-logo-img"
                    />
                  </td>
                  <td>
                    <button
                      className="upload-client-logo-delete"
                      onClick={() => deleteLogo(item._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UploadClientLogo;
