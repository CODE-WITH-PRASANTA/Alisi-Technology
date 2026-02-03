import React from "react";
import "./IotSidebar.css";

import sidebarPersonImg from "../../assets/Service-details-001.webp";

// SEO-friendly & professional service names
const services = [
  "IoT Network Infrastructure Solutions",
  "Custom Software Development",
  "Digital Engineering Consulting",
  "Advanced Cybersecurity Services",
  "Cloud & IoT Platform Solutions",
  "Managed IT & System Support",
];

const IotSidebar = () => {
  return (
    <div className="iot-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="iot-sidebar-services-box">

        <h3 className="iot-sidebar-title">
          Our Technology Services
        </h3>

        <ul className="iot-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="iot-sidebar-item">
              {item}
              <span className="iot-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="iot-sidebar-card">

        <div className="iot-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IoT & Digital Engineering Solutions</p>

          <div className="iot-sidebar-phone">
            📞 Speak With Our Experts: +8 (321) 890-640
          </div>

        </div>

        <div className="iot-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Alisil Technology Digital Engineering Team" />
        </div>

      </div>

    </div>
  );
};

export default IotSidebar;
