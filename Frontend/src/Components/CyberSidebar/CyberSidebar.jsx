import React from "react";
import "./CyberSidebar.css";

import sidebarPersonImg from "../../assets/service-details-1.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
];

const CyberSidebar = () => {
  return (
    <div className="cyber-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="cyber-sidebar-services-box">

        <h3 className="cyber-sidebar-title">
          More Services
        </h3>

        <ul className="cyber-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="cyber-sidebar-item">
              {item}
              <span className="cyber-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="cyber-sidebar-card">

        <div className="cyber-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="cyber-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="cyber-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default CyberSidebar;
