import React from "react";
import "./ContactInfo.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      {/* Header */}
      <div className="contact-info-header">
        <span className="contact-tag">[ CONTACT INFO ]</span>
        <h2>Reach Out Us Now!</h2>
      </div>

      {/* Cards */}
      <div className="contact-info-grid">
        {/* Location */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaMapMarkerAlt />
          </div>
          <h3>Our Location</h3>
          <p>
            VILL &  PO-RASAPUNJA, PS BISHNUPUR, NEAR RASAPUNJA PANCHYAT.<br />
            SOUTH 24 PARGANAS, WESTBENGAL - 700104
          </p>
        </div>

        {/* Email */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h3>Email us</h3>
          <p>Alisiltechnology@gmail.com</p>
          
        </div>

        {/* Phone */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3>Call us</h3>
          <p> 011-6931-3553</p>
        </div>

        {/* Live Chat */}
        <div className="contact-card">
          <div className="contact-icon">
            <FaComments />
          </div>
          <h3>Live chat</h3>
          <p>Alisiltechnology@gmail.com</p>
          <p className="highlight">Need help?</p>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
