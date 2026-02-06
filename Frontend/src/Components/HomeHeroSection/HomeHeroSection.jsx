import React from "react";
import "./HomeHeroSection.css";

import bg from "../../Assets/footer-bg.webp";
import hero from "../../Assets/home-hero-img.webp";
import c1 from "../../Assets/client-1.webp";
import c2 from "../../Assets/teastmonial-client-2.webp"
import c3 from "../../Assets/home-client-3.webp";
import c4 from "../../Assets/teastmonial-client-2.webp";

export default function HomeHero() {
  return (
    <section
      className="home-hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <span className="tag">[ TRANSFORMING IDEAS ]</span>

          <h1>
            Empowering Businesses  
            <br />
            Through Smart Digital
            <br />
            & IT Solutions.
          </h1>

          <div className="hero-actions">
            <button className="explore-btn">
              Explore Services <span>↗</span>
            </button>

            <div className="call">
              ☎ <span>+1 (888) 333-8181</span>
            </div>
          </div>

          <div className="hero-points">
            <p>✔ Innovate Smarter</p>
            <p>✔ Technology Simplified</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <img src={hero} alt="" className="Home-hero-img" />

          {/* Trusted badge */}
          <div className="trusted">
            ✔ Trusted  800+ <br /> Technology Partner
          </div>

          {/* Review card */}
          <div className="review-card">
            <div className="avatars">
              <img src={c1} alt="" />
              <img src={c2} alt="" />
              <img src={c3} alt="" />
              <img src={c4} alt="" />
            </div>

            <h2>4.9 <span>★★★★★</span></h2>
            <p>Based on 600+ Google Reviews.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
