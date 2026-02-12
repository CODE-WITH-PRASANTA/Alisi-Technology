import React, { useState, useEffect } from "react";
import API_URL from "../../Api/Api";
import { Link } from "react-router-dom";
import "./HomeContactSection.css";
import bg from "../../Assets/common-bg-2.webp";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null); // success or error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setAlert(null);

    try {
      const res = await API_URL.post("/contacts", form);

      setAlert({
        type: "success",
        message: res.data.message || "Message sent successfully!",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setAlert({
        type: "error",
        message:
          err.response?.data?.message || "Server not responding",
      });
    }

    setLoading(false);
  };

  // Auto hide message after 4 seconds
  useEffect(() => {
    if (alert) {
      const timer = setTimeout(() => {
        setAlert(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

  return (
    <section className="Home-contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="Home-contact-overlay"></div>

      <div className="contact-container">
        <div className="contact-left">
          <span className="tag">[ GET IN TOUCH ]</span>
          <h2>Have any Questions on Mind? Get in Touch for Market Experts.</h2>

          <Link to="/contact" className="contact-btn-link">
            <button className="primary-btn">
              Contact Us Now <span>↗</span>
            </button>
          </Link>
        </div>

        <div className="contact-form">
          <h3>
            Drop Us a <span>Line.</span>
          </h3>

          {alert && (
            <div
              className={`form-alert ${
                alert.type === "success"
                  ? "alert-success"
                  : "alert-error"
              }`}
            >
              {alert.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <input
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
              />

              <input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={form.email}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={handleChange}
                required
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose an Option</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Cloud Service</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="Type Message"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"} <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}