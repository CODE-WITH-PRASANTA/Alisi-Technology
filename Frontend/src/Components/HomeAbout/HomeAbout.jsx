import React, { useEffect, useRef } from "react";
import "./HomeAbout.css";
import { FaAward } from "react-icons/fa";

import aboutImg from "../../Assets/about-img-1.webp";
import awardBg from "../../Assets/award-circle-bg.webp";
import awardText from "../../Assets/award-circle-text.webp";
import founder from "../../Assets/client-1.webp";
import sign from "../../Assets/signature.webp";
import bg from "../../Assets/common-bg.webp";

export default function AboutTekmino() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && ref.current.classList.add("show"),
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
  }, []);

  return (
    <section
      ref={ref}
      className="about-wrap reveal"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="about-container">
        {/* LEFT */}
        <div className="about-left fade delay-1">
          <img src={aboutImg} className="about-main" alt="" />

          {/* Experience badge */}
          <div className="exp-badge">
            <h2>20+</h2>
            <p>Years of Excellence in IT Solutions Company.</p>
          </div>

          {/* Founder */}
          <div className="founder">
            <img src={founder} alt="" />
            <div className="founder-text">
              <h4>Burdee Nicolas</h4>
              <span>Co. Founder</span>
            </div>
            <img src={sign} className="sign" alt="" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="about-right fade delay-2">
          <span className="tag">[ ABOUT TEKMINO ]</span>

          <h2>
            Delivering Solution That Drive Our Innovation & Fast Success.
          </h2>

          <p>
            We are a team of passionate tech experts delivering innovative IT
            solutions tailored to help businesses grow, adapt, and thrive in a
            digital. Stay ahead of the competition.
          </p>

          <div className="stats">
            <div>
              <h3>3K+</h3>
              <span>Successful Projects.</span>
            </div>
            <div>
              <h3>98+</h3>
              <span>IT Professionals.</span>
            </div>
          </div>

          <button className="about-btn">
            Learn More <span>↗</span>
          </button>

          {/* Award */}
          <div className="award">
            <img src={awardBg} className="award-bg" alt="" />
            <img src={awardText} className="award-text" alt="" />

            {/* CENTER ICON */}
            <div className="award-icon">
              <FaAward />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
