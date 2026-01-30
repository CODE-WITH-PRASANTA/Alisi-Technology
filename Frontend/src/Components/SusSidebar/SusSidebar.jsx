import React from "react";
import "./SusSidebar.css";

import sidebarPersonImg from "../../assets/service-details-1.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
];

const SusSidebar = () => {
  return (
    <div className="sus-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="sus-sidebar-services-box">

        <h3 className="sus-sidebar-title">
          More Services
        </h3>

        <ul className="sus-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="sus-sidebar-item">
              {item}
              <span className="sus-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="sus-sidebar-card">

        <div className="sus-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="sus-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="sus-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default SusSidebar;
