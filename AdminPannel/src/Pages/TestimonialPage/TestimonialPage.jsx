import React, { useEffect, useState } from "react";
import axios from "axios";

import TestimonialForm from "../../Component/TestimonialForms/TestimonialForm";
import TestimonialList from "../../Component/TestimonialForms/TestimonialList";
import "./TestimonialPage.css";
import { API_URL } from "../../Api/Api";

const TestimonialPage = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ================= */
  const fetchTestimonials = async () => {
    try {
      const res = await axios.get(`${API_URL}/testimonials`);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  /* ================= ADD ================= */
  const addTestimonial = async (formData) => {
    try {
      setLoading(true);
      await axios.post(`${API_URL}/testimonials`, formData);
      fetchTestimonials();
    } catch (err) {
      console.error("Add error:", err.response?.data || err.message);
      alert("Failed to add testimonial");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UPDATE ================= */
  const updateTestimonial = async (formData) => {
    try {
      setLoading(true);
      await axios.put(
        `${API_URL}/testimonials/${editItem._id}`,
        formData
      );
      setEditItem(null);
      fetchTestimonials();
    } catch (err) {
      console.error("Update error:", err.response?.data || err.message);
      alert("Failed to update testimonial");
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE ================= */
  const deleteTestimonial = async (id) => {
    if (!window.confirm("Delete this testimonial?")) return;

    try {
      await axios.delete(`${API_URL}/testimonials/${id}`);
      fetchTestimonials();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete testimonial");
    }
  };

  return (
    <div className="adm-testimonial-wrapper">
      <div className="adm-testimonial-form-section">
        <TestimonialForm
          addTestimonial={addTestimonial}
          editItem={editItem}
          updateTestimonial={updateTestimonial}
          loading={loading}
        />
      </div>

      <div className="adm-testimonial-list-section">
        <TestimonialList
          testimonials={testimonials}
          onEdit={setEditItem}
          onDelete={deleteTestimonial}
        />
      </div>
    </div>
  );
};

export default TestimonialPage;