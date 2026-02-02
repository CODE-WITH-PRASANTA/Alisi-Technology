import React from "react";
import "./IotSidebar.css";

import sidebarPersonImg from "../../assets/service-details-1.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
];

const IotSidebar = () => {
  return (
    <div className="iot-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="iot-sidebar-services-box">

        <h3 className="iot-sidebar-title">
          More Services
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
          <p>IT Solutions.</p>

          <div className="iot-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="iot-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default IotSidebar;
