import React from "react";
import "./HomeHeroSection.css";
import { Link } from "react-router-dom";


import bg from "../../Assets/footer-bg.webp";
import hero from "../../Assets/home-hero-img.webp";
import c1 from "../../Assets/client-1.webp";
import c2 from "../../Assets/teastmonial-client-2.webp";
import c3 from "../../Assets/home-client-3.webp";
import c4 from "../../Assets/teastmonial-client-2.webp";

export default function HomeHero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-left">
          <span className="hero-tag">
            TRUSTED DIGITAL TRANSFORMATION PARTNER
          </span>

          <h1>
            Building Smart <br />
            Digital & IT Solutions <br />
            for <span>Future-Ready Businesses</span>
          </h1>

          <p className="hero-desc">
            Alisil Technology Cloud services enable organizations to move faster, reduce costs, and enhance performance through modern cloud architectures.
            <br /> We provide comprehensive IT solutions that ensure business continuity, operational efficiency, and long-term growth
          </p>

          <div className="hero-actions">
          <Link to="/services/all-services" className="explore-btn">
                View Our Services →
            </Link>

            <a href="tel:01169313553" className="call">
              ☎ 011-6931-3553
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <h3>100+</h3>
              <p>Global Clients</p>
            </div>
            <div>
              <h3>3+</h3>
              <p>Years of Excellence</p>
            </div>
            <div>
              <h3>3+</h3>
              <p>Technology Experts</p>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-right">
          <img src={hero} alt="Alisil Technology IT Services" />

          <div className="review-card">
            <div className="avatars">
              <img src={c1} alt="Client Review" />
              <img src={c2} alt="Client Review" />
              <img src={c3} alt="Client Review" />
              <img src={c4} alt="Client Review" />
            </div>

            <h2>
              4.9 <span>★★★★★</span>
            </h2>
            <p>Rated by 50+ satisfied clients worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
