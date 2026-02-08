import { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./TestimonialPage.css";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  /* ================= FETCH ================= */
  const fetchTestimonials = async () => {
    try {
      const res = await API_URL.get("/testimonials");
      setTestimonials(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ================= IMAGE ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Name and message are required");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("designation", designation);
    formData.append("message", message);
    formData.append("rating", rating);
    if (image) formData.append("image", image);

    try {
      setLoading(true);

      if (editItem) {
        await API_URL.put(`/testimonials/${editItem._id}`, formData);
        setEditItem(null);
      } else {
        await API_URL.post("/testimonials", formData);
      }

      resetForm();
      fetchTestimonials();
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= EDIT ================= */
  const handleEdit = (item) => {
    setEditItem(item);
    setName(item.name);
    setDesignation(item.designation || "");
    setMessage(item.message);
    setRating(item.rating);
    setPreview(item.image ? `${IMAGE_BASE_URL}/${item.image}` : "");
    setImage(null);
  };

  /* ================= DELETE ================= */
  const deleteTestimonial = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;
    try {
      await API_URL.delete(`/testimonials/${id}`);
      fetchTestimonials();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  /* ================= RESET ================= */
  const resetForm = () => {
    setName("");
    setDesignation("");
    setMessage("");
    setRating(5);
    setImage(null);
    setPreview("");
  };

  return (
    <div className="adm-testimonial-wrapper">
      {/* ================= FORM ================= */}
      <form className="adm-testimonial-form" onSubmit={handleSubmit}>
        <h2 className="adm-form-title">
          {editItem ? "Edit Testimonial" : "Add Testimonial"}
        </h2>

        <div className="adm-form-scroll">
          <input type="file" accept="image/*" onChange={handleImage} />

          {preview && (
            <img
              src={preview}
              className="adm-preview-img"
              alt="preview"
            />
          )}

          <input
            placeholder="Client Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            placeholder="Designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />

          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {/* STAR RATING */}
          <div className="adm-star-rating-box">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`adm-star ${rating >= star ? "active" : ""}`}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        <button className="adm-submit-btn" disabled={loading}>
          {loading ? "Saving..." : editItem ? "Update" : "Submit"}
        </button>
      </form>

      {/* ================= LIST ================= */}
      <div className="adm-testimonial-list-section">
        <h2 className="adm-list-title">Manage Testimonials</h2>

        {testimonials.length === 0 && (
          <p className="adm-empty-text">No testimonials added yet.</p>
        )}

        {testimonials.map((item) => (
          <div className="adm-testimonial-card" key={item._id}>
            {item.image && (
              <img
                src={`${IMAGE_BASE_URL}/${item.image}`}
                className="adm-client-photo"
                alt="client"
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/80")
                }
              />
            )}

            <div className="adm-card-content">
              <h4 className="adm-client-name">{item.name}</h4>
              <p className="adm-client-position">{item.designation}</p>
              <p className="adm-feedback-text">{item.message}</p>

              <div className="adm-rating-view">
                {"★".repeat(item.rating)}
              </div>

              <div className="adm-card-actions">
                <button
                  className="adm-edit-btn"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="adm-delete-btn"
                  onClick={() => deleteTestimonial(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
