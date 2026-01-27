import React, { useEffect, useRef } from "react";
import "./HomeWhyChoose.css";
import {
  FaThumbsUp,
  FaLightbulb,
  FaRocket,
  FaHandshake
} from "react-icons/fa";

export default function WhyChoose() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section className="why-wrapper reveal" ref={sectionRef}>
      <div className="why-top">
        <div className="fade-up">
          <span className="why-tag">[ WHY CHOOSE US ]</span>
          <h2>
            Reliable IT Solution, for <br /> Best Results.
          </h2>
        </div>

        <div className="why-right fade-up delay-1">
          <p>Our services are customized to meet your unique.</p>
          <button className="learn-btn">
            Learn More <span>↗</span>
          </button>
        </div>
      </div>

      <div className="why-cards">
        <div className="why-card fade-up delay-1">
          <div className="icon">
            <FaThumbsUp />
          </div>
          <h3>Proven Track Record</h3>
          <p>
            With a portfolio of successful projects and satisfied clients, we
            have a reputation.
          </p>
        </div>

        <div className="why-card active fade-up delay-2">
          <div className="icon">
            <FaLightbulb />
          </div>
          <h3>Tailored Solutions</h3>
          <p>
            Our services are customized to meet your unique business needs,
            ensuring solution.
          </p>
        </div>

        <div className="why-card fade-up delay-3">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>Future Technologies</h3>
          <p>
            Stay ahead of the competition with AI, cloud computing, and
            automation solutions.
          </p>
        </div>

        <div className="why-card fade-up delay-4">
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
