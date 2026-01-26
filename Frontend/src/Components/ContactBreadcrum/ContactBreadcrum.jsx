import React from "react";
import "./ContactBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactBreadcrum = () => {
  return (
    <section className="contact-hero">
      <div className="contact-hero-overlay">
        <h1>Contact Us</h1>

        <div className="contact-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Contact Us</span>
        </div>
      </div>
    </section>
  );
};

export default ContactBreadcrum;
