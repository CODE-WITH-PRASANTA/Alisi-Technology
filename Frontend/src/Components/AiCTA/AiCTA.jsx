import React from "react";
import "./AiCTA.css";
import { FaArrowRight } from "react-icons/fa";

const AllServicesCTA = () => {
  return (
    <section className="ai-cta">
      <div className="ai-cta-overlay" />

      <div className="ai-cta-container">
        {/* LEFT */}
        <div className="ai-cta-left">
          <span className="ai-tag">[ GET IN TOUCH ]</span>

          <h2>
            Have any Questions on <br />
            Mind? Get in Touch for <br />
            Market Experts.
          </h2>

          <button className="ai-primary-btn">
            Contact Us Now <FaArrowRight />
          </button>

          <div className="ai-info-grid">
            <div>
              <h4>Contact Info:</h4>
              <p>+1 (009) 544-7818</p>
              <p>support@tekmino.com</p>
            </div>

            <div>
              <h4>Find Us:</h4>
              <p>
                Renner Burg, West Rond, <br />
                MT 9421-030, USA.
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
        <div className="ai-cta-form">
          <h3>
            Drop Us a <span>Line.</span>
          </h3>

          <form>
            <div className="ai-form-grid">
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

            <div className="ai-form-full">
              <label>Type Message</label>
              <textarea />
            </div>

            <button className="ai-submit-btn">
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AllServicesCTA;
