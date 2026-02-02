import React from "react";
import "./CloudSidebar.css";

import sidebarPersonImg from "../../assets/service-details-1.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
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
