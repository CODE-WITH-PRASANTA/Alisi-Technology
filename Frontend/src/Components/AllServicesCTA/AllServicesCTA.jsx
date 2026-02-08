import React from "react";
import "./AllServicesCTA.css";
import { FaArrowRight } from "react-icons/fa";

const AllServicesCTA = () => {
  return (
    <section className="as-cta">
      <div className="as-cta-overlay" />

      <div className="as-cta-container">
        {/* LEFT */}
        <div className="as-cta-left">
          <span className="as-tag">[ GET IN TOUCH ]</span>

          <h2>
            Have any Questions on <br />
            Mind? Get in Touch for <br />
            Market Experts.
          </h2>

          <button className="as-primary-btn">
            Contact Us Now <FaArrowRight />
          </button>

          <div className="as-info-grid">
            <div>
              <h4>Contact Info:</h4>
              <p>+011-6931-3553</p>
              <p>support@tekmino.com</p>
            </div>

            <div>
              <h4>Find Us:</h4>
              <p>
                VILL &  PO-RASAPUNJA, PS BISHNUPUR, NEAR RASAPUNJA PANCHYAT. <br />
                SOUTH 24 PARGANAS, WESTBENGAL - 700104
              </p>
            </div>

            <div>
              <h4>Contact Info:</h4>
              <p>
                Mon – Fri <span>(Open)</span>
              </p>
              <p>09:00am – 06:00pm</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="as-cta-form">
          <h3>
            Drop Us a <span>Line.</span>
          </h3>

          <form>
            <div className="as-form-grid">
              <div>
                <label>Full Name *</label>
                <input type="text" />
              </div>

              <div>
                <label>Email Address *</label>
                <input type="email" />
              </div>

              <div>
                <label>Phone Number *</label>
                <input type="tel" />
              </div>

              <div>
                <label>Select Service *</label>
                <select>
                  <option>Choose an Option</option>
                  <option>Managed IT Services</option>
                  <option>Cloud Computing</option>
                  <option>Cyber Security</option>
                </select>
              </div>
            </div>

            <div className="as-form-full">
              <label>Type Message</label>
              <textarea />
            </div>

            <button className="as-submit-btn">
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AllServicesCTA;
