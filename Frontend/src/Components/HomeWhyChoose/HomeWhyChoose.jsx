import React from "react";
import "./HomeWhyChoose.css";
import {
  FaThumbsUp,
  FaLightbulb,
  FaRocket,
  FaHandshake
} from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="why-wrapper">
      <div className="why-top">
        <div>
          <span className="why-tag">[ WHY CHOOSE US ]</span>
          <h2>
            Reliable IT Solution, for <br /> Best Results.
          </h2>
        </div>

        <div className="why-right">
          <p>Our services are customized to meet your unique.</p>
          <button className="learn-btn">
            Learn More <span>↗</span>
          </button>
        </div>
      </div>

      <div className="why-cards">
        <div className="why-card">
          <div className="icon">
            <FaThumbsUp />
          </div>
          <h3>Proven Track Record</h3>
          <p>
            With a portfolio of successful projects and satisfied clients, we
            have a reputation.
          </p>
        </div>

        <div className="why-card active">
          <div className="icon">
            <FaLightbulb />
          </div>
          <h3>Tailored Solutions</h3>
          <p>
            Our services are customized to meet your unique business needs,
            ensuring solution.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>Future Technologies</h3>
          <p>
            Stay ahead of the competition with AI, cloud computing, and
            automation solutions.
          </p>
        </div>

        <div className="why-card">
          <div className="icon">
            <FaHandshake />
          </div>
          <h3>24/7 Support</h3>
          <p>
            With a portfolio of successful projects and satisfied clients, we
            have a reputation.
          </p>
        </div>
      </div>
    </section>
  );
}
