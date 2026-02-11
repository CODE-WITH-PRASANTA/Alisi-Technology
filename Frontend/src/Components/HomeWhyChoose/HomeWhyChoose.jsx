import React, { useEffect, useRef } from "react";
import "./HomeWhyChoose.css";
import { Link } from "react-router-dom";
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
          <span className="why-tag">[ WHY CHOOSE ALISIL TECHNOLOGY ]</span>
          <h2>
            Smart Technology Solutions <br /> That Deliver Real Business Value
          </h2>
        </div>

        <div className="why-right fade-up delay-1">
          <p>
            Alisil Technology Pvt Ltd provides innovative IoT, digital
            engineering, and IT solutions designed to improve efficiency,
            strengthen performance, and support long-term business growth.
          </p>
         <Link to="/about" className="home-learn-btn" aria-label="Learn more about Alisil Technology">
              Learn More <span>↗</span>
            </Link>

        </div>
      </div>

      <div className="why-cards">

        <div className="why-card fade-up delay-1">
          <div className="icon">
            <FaThumbsUp />
          </div>
          <h3>Trusted Industry Experience</h3>
          <p>
            We have successfully delivered high-quality technology solutions
            across various industries, helping businesses modernize operations
            and achieve measurable results.
          </p>
        </div>

        <div className="why-card active fade-up delay-2">
          <div className="icon">
            <FaLightbulb />
          </div>
          <h3>Customized Digital Solutions</h3>
          <p>
            Our team develops tailored IoT systems, software platforms, and
            digital engineering solutions that align perfectly with your
            business goals and technical requirements.
          </p>
        </div>

        <div className="why-card fade-up delay-3">
          <div className="icon">
            <FaRocket />
          </div>
          <h3>Future-Ready Technologies</h3>
          <p>
            We leverage modern technologies such as cloud computing, automation,
            smart devices, and digital platforms to build scalable and
            future-proof solutions.
          </p>
        </div>

        <div className="why-card fade-up delay-4">
          <div className="icon">
            <FaHandshake />
          </div>
          <h3>Reliable Ongoing Support</h3>
          <p>
            Our dedicated support team ensures continuous system performance,
            security updates, and technical assistance for long-term success.
          </p>
        </div>

      </div>
    </section>
  );
}
