import React from "react";
import "./AboutBreadcrum.css";
import aboutBg from "../../assets/breadcrum.webp"; // use your image path

const AboutHeroTekmino = () => {
  return (
    <section
      className="tek-about-hero"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="tek-about-overlay">

        <h1 className="tek-about-title">About </h1>

        <div className="tek-about-breadcrumb">
          <span className="tek-bread-home">🏠 Home</span>
          <span className="tek-bread-sep">›</span>
          <span className="tek-bread-current">About </span>
        </div>

      </div>
    </section>
  );
};

export default AboutHeroTekmino;