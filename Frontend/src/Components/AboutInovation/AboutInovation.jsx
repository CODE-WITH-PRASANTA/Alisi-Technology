import React from "react";
import "./AboutInovation.css";
import aboutMainImg from "../../assets/main.webp";
import tekminoLogo from "../../assets/tlogo.webp";
import { FiArrowUpRight } from "react-icons/fi";

const AboutTekmino = () => {
  return (
    <section className="tek-about-section">
      <div className="tek-about-container">

        {/* LEFT IMAGE */}
        <div className="tek-about-image-box">
          <img src={aboutMainImg} alt="About Tekmino" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="tek-about-content-box">

          <span className="tek-about-tag">[ ABOUT TEKMINO ]</span>

          <h2 className="tek-about-title">
            Driving Innovation Through AI and New Technology,
            Delivering Tailored.
          </h2>

          <div className="tek-about-info-wrapper">

            {/* LOGO BOX */}
            <div className="tek-about-logo-card">
              <img src={tekminoLogo} alt="Tekmino Logo" />
              <h4>Tekmino</h4>
            </div>

            {/* TEXT SECTION */}
            <div className="tek-about-text-cards">

              <div className="tek-about-card">
                <h4>Our Mission</h4>
                <p>
                  Revolutionize the way you work with our solutions designed
                  to meet the challenges of today’s business landscape.
                </p>
              </div>

              <div className="tek-about-card tek-about-vision-card">
                <h4>Our Vision</h4>
                <p>
                  Deliver innovative and intelligent technology solutions
                  that empower businesses to grow and transform.
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
