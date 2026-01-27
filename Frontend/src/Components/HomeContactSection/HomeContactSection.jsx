import React from "react";
import "./HomeContactSection.css";
import bg from "../../Assets/common-bg-2.webp";

export default function ContactSection() {
  return (
    <section
      className="contact"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="contact-overlay"></div>

      <div className="contact-container">
        {/* LEFT */}
        <div className="contact-left">
          <span className="tag">[ GET IN TOUCH ]</span>

          <h2>
            Have any Questions on Mind? Get in Touch for Market Experts.
          </h2>

          <button className="primary-btn">
            Contact Us Now <span>↗</span>
          </button>

          <div className="contact-info">
            <div>
              <h4>Contact Info:</h4>
              <p>+1 (009) 544-7818</p>
              <p>support@tekmino.com</p>
            </div>

            <div>
              <h4>Find Us:</h4>
              <p>Renner Burg, West Rond, MT 9421-030, USA.</p>
            </div>

            <div>
              <h4>Contact Info:</h4>
              <p>Mon - Fri <span>(Open)</span></p>
              <p>09:00am - 06.00pm</p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form">
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
