import React from "react";
import "./BolgDetailsBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="Blog-Details-hero">
      <div className="Blog-Details-hero-overlay">
        <h1>Blog Details</h1>

        <div className="Blog-Details-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Blog Details</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
