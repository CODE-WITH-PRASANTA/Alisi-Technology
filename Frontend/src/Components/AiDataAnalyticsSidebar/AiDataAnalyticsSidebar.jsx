import React from "react";
import "./AiDataAnalyticsSidebar.css";

import sidebarPersonImg from "../../assets/service-details-1.webp";

const services = [
  "Network Infrastructure",
  "Software Development",
  "IT Consulting & Strategy",
  "Cybersecurity Solutions",
  "Cloud Computing",
  "Managed IT Services",
];

const AiDataAnalyticsSidebar = () => {
  return (
    <div className="ai-analytics-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="ai-analytics-sidebar-services-box">

        <h3 className="ai-analytics-sidebar-title">
          More Services
        </h3>

        <ul className="ai-analytics-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="ai-analytics-sidebar-item">
              {item}
              <span className="ai-analytics-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="ai-analytics-sidebar-card">

        <div className="ai-analytics-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="ai-analytics-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="ai-analytics-sidebar-image-holder">
          <img src={sidebarPersonImg} alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default AiDataAnalyticsSidebar;
