import React from "react";
import "./ConsultingSidebar.css";

import sidebarPersonImg from "../../assets/service-details-2.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
];

const ConsultingSidebar = () => {
  return (
    <div className="consultingg-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="consultingg-sidebar-services-box">

        <h3 className="consultingg-sidebar-title">
          More Services
        </h3>

        <ul className="consultingg-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="consultingg-sidebar-item">
              {item}
              <span className="consultingg-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="consultingg-sidebar-card">

        <div className="consultingg-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="consultingg-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="consultingg-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default ConsultingSidebar;
