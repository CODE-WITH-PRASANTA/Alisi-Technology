import React from "react";
import "./cloudCTA.css";
import { FaArrowRight } from "react-icons/fa";

const AllServicesCTA = () => {
  return (
    <section className="cloud-cta">
      <div className="cloud-cta-overlay" />

      <div className="cloud-cta-container">
        {/* LEFT */}
        <div className="cloud-cta-left">
          <span className="cloud-tag">[ GET IN TOUCH ]</span>

          <h2>
            Have any Questions on <br />
            Mind? Get in Touch for <br />
            Market Experts.
          </h2>

          <button className="cloud-primary-btn">
            Contact Us Now <FaArrowRight />
          </button>

          <div className="cloud-info-grid">
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
        <div className="cloud-cta-form">
          <h3>
            Drop Us a <span>Line.</span>
          </h3>

          <form>
            <div className="cloud-form-grid">
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

            <div className="cloud-form-full">
              <label>Type Message</label>
              <textarea />
            </div>

            <button className="cloud-submit-btn">
              Send Message <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AllServicesCTA;
