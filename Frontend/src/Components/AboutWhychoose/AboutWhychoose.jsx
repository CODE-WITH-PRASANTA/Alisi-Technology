import React from "react";
import "./AboutWhychoose.css";
import {
  FaThumbsUp,
  FaLightbulb,
  FaRocket,
  FaHandshake
} from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="abbout-wrapper">
      <div className="abbout-top">
        <div>
          <span className="abbout-tag">[ WHY CHOOSE ALISIL TECHNOLOGY ]</span>
          <h2>
            Trusted Digital Solutions <br /> That Drive Real Results
          </h2>
        </div>

        <div className="abbout-right">
          <p>
            At Alisil Technology Pvt Ltd, we deliver innovative IT, IoT, and
            digital engineering solutions designed to help businesses grow,
            operate efficiently, and stay competitive in a digital-first world.
          </p>
          <button className="learn-btn">
            Learn More <span>↗</span>
          </button>
        </div>
      </div>

      <div className="abbout-cards">

        <div className="abbout-card">
          <div className="icon">
            <FaThumbsUp />
          </div>
          <h3>Proven Industry Experience</h3>
          <p>
            We have successfully delivered reliable technology solutions across
            multiple industries, helping clients achieve measurable business
            growth and operational efficiency.
          </p>
        </div>

        <div className="abbout-card active">
          <div className="icon">
            <FaLightbulb />
          </div>
          <h3>Customized Business Solutions</h3>
          <p>
            Every business is unique. Our team designs tailored digital,
            software, and IoT solutions aligned with your specific goals and
            technical requirements.
          </p>
        </div>

        <div className="abbout-card">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>Advanced & Future-Ready Technologies</h3>
          <p>
            We leverage modern technologies such as cloud computing, automation,
            IoT systems, and digital engineering to build scalable, future-proof
            platforms.
          </p>
        </div>

        <div className="abbout-card">
          <div className="icon">
            <FaHandshake />
          </div>
          <h3>Dedicated Client Support</h3>
          <p>
            Our experts provide continuous technical support, system monitoring,
            and performance optimization to ensure long-term success for your
            business.
          </p>
        </div>

      </div>
    </section>
  );
}
