import React from "react";
import "./COSidebar.css";


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

const COSidebar = () => {
  return (
    <div className="coo-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="coo-sidebar-services-box">

        <h3 className="coo-sidebar-title">
          More Services
        </h3>

        <ul className="coo-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="coo-sidebar-item">
              {item}
              <span className="coo-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="coo-sidebar-card">

        <div className="coo-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="coo-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="coo-sidebar-image-holder">
          <img src="../../assets/Service-details-001.webp" alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default COSidebar;
