import React from "react";
import "./IOTBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const IOTBreadcrum = () => {
  return (
    <section className="iot-hero">
      <div className="iot-hero-overlay">
        <h1>IoT & Digital Eng.</h1>
        <div className="iot-breadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">IoT & Digital Eng.</span>
        </div>
      </div>
    </section>
  );
};

export default IOTBreadcrum;
