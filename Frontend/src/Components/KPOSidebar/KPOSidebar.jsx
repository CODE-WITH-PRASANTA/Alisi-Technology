import React from "react";
import "./KPOSidebar.css";


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

const KPOSidebar = () => {
  return (
    <div className="kpoo-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="kpoo-sidebar-services-box">

        <h3 className="kpoo-sidebar-title">
          More Services
        </h3>

        <ul className="kpoo-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="kpoo-sidebar-item">
              {item}
              <span className="kpoo-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="kpoo-sidebar-card">

        <div className="kpoo-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="kpoo-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="kpoo-sidebar-image-holder">
          <img src="../../assets/Service-details-001.webp" alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default KPOSidebar;
