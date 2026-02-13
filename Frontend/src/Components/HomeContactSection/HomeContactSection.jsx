import React from "react";
import { Link } from "react-router-dom";
import "./HomeContactSection.css";
import bg from "../../Assets/common-bg-2.webp";

export default function ContactSection() {
  return (
    <section className="contact" style={{ backgroundImage: `url(${bg})` }}>
      <div className="Home-Contact-overlay"></div>

      <div className="Home-Contact-container">
        {/* LEFT */}
        <div className="Home-Contact-left">
          <span className="tag">[ GET IN TOUCH ]</span>

          <h2>Have any Questions on Mind? Get in Touch for Market Experts.</h2>

          {/* CONTACT BUTTON LINKED */}
          <Link to="/contact" className="Home-Contact-btn-link">
            <button className="primary-btn">
              Contact Us Now <span>↗</span>
            </button>
          </Link>

          <div className="Home-Contact-info">
            <div>
              <h4>Contact Info:</h4>
              <p> 011-6931-3553</p>
              <p>support@tekmino.com</p>
            </div>

            <div>
              <h4>Find Us:</h4>
              <p>
                VILL & PO-RASAPUNJA, PS BISHNUPUR, Near Rasapunja Panchayat,
                South 24 Parganas, West Bengal – 700104
              </p>
            </div>

            <div>
              <h4>Contact Info:</h4>
              <p>
                Mon - Fri <span>(Open)</span>
              </p>
              <p>09:00am - 06.00pm</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="Home-Contact-form">
          <h3>
            Drop Us a <span>Line.</span>
          </h3>

          <form>
            <div className="form-grid">
              <input placeholder="Full Name *" />
              <input placeholder="Email Address *" />
              <input placeholder="Phone Number *" />

              <select>
                <option>Choose an Option</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Cloud Service</option>
              </select>
            </div>

            <textarea placeholder="Type Message"></textarea>

            <button className="primary-btn">
              Send Message <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
