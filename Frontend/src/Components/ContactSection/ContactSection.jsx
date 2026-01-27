import React from "react";
import "./ContactSection.css";
import { FaArrowRight } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        {/* ================= LEFT FORM ================= */}
        <div className="contact-form-card">
          <h2>Feel Free Contact with Us!</h2>

          <form>
            <div className="form-grid">
              <input type="text" placeholder="Full Name*" required />
              <input type="email" placeholder="Email Address*" required />
              <input type="tel" placeholder="Phone Number*" required />

              <select required>
                <option value="">Choose an Option</option>
                <option>Web Development</option>
                <option>App Development</option>
                <option>UI/UX Design</option>
                <option>Cloud Services</option>
              </select>
            </div>

            <textarea placeholder="Type Message*" rows="5" required />

            <button type="submit" className="send-btn">
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>

        {/* ================= MAP ================= */}
        <div className="contact-map-card">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Cambridge%20Street&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
