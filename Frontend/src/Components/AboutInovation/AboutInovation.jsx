import React from "react";
import "./AboutInovation.css";


import { FiArrowUpRight } from "react-icons/fi";

const AboutTekmino = () => {
  return (
    <section className="tek-about-section">
      <div className="tek-about-container">

        {/* LEFT IMAGE */}
        <div className="tek-about-image-box">
          <img src="''../../assets/Main-001.webp" alt="About Alisil Technology" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="tek-about-content-box">

          <span className="tek-about-tag">[ ABOUT ALISIL TECHNOLOGY ]</span>

          <h2 className="tek-about-title">
            Driving Innovation Through Smart Technology and Digital Engineering
          </h2>

          <div className="tek-about-info-wrapper">

            {/* LOGO BOX */}
            <div className="tek-about-logo-card">
              <img src="../../assets/T-LOGO.webp" alt="Alisil Technology Logo" />
              <h4>Alisil Technology</h4>
            </div>

            {/* TEXT SECTION */}
            <div className="tek-about-text-cards">

              <div className="tek-about-card">
                <h4>Our Mission</h4>
                <p>
                  To deliver innovative digital, IoT, and engineering solutions
                  that help businesses improve performance, efficiency, and
                  long-term growth.
                </p>
              </div>

              <div className="tek-about-card tek-about-vision-card">
                <h4>Our Vision</h4>
                <p>
                  To become a trusted technology partner driving digital
                  transformation through smart systems, automation, and modern
                  engineering solutions.
                </p>
              </div>

              {/* BUTTON BELOW VISION */}
              <button className="tek-about-btn tek-about-btn-below">
                <span>Learn More</span>
                <div className="tek-about-btn-icon">
                  <FiArrowUpRight />
                </div>
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutTekmino;
