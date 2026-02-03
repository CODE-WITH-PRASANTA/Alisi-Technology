import React from "react";
import "./AiDataAnalyticsSidebar.css";

import sidebarPersonImg from "../../assets/Service-details-002.webp";

const services = [
  "BPO Services",
  "KPO Services",
  "Cloud Computing",
  "Cognitive Business Operations",
  "Consulting",
  "Cybersecurity",
  "Enterprise Solutions",
  "IoT & Digital Engineering",
  "Network Solutions & Services",
  "Sustainability Services",
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
