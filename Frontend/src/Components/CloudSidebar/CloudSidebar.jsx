import React from "react";
import "./CloudSidebar.css";

import sidebarPersonImg from "../../assets/Service-details-002.webp";

const services = [
  "BPO Services",
  "KPO Services",
  "Artificial Intelligence & Data & Analytics",
  "Cognitive Business Operations",
  "Consulting",
  "Cybersecurity",
  "Enterprise Solutions",
  "IoT & Digital Engineering",
  "Network Solutions & Services",
  "Sustainability Services",
];

const CloudSidebar = () => {
  return (
    <div className="cloudd-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="cloudd-sidebar-services-box">

        <h3 className="cloudd-sidebar-title">
          More Services
        </h3>

        <ul className="cloudd-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="cloudd-sidebar-item">
              {item}
              <span className="cloudd-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="cloudd-sidebar-card">

        <div className="cloudd-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="cloudd-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="cloudd-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default CloudSidebar;
