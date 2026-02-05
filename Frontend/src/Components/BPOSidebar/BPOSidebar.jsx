import React from "react";
import "./BPOSidebar.css";


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

const BPOSidebar = () => {
  return (
    <div className="bpoo-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="bpoo-sidebar-services-box">

        <h3 className="bpoo-sidebar-title">
          More Services
        </h3>

        <ul className="bpoo-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="bpoo-sidebar-item">
              {item}
              <span className="bpoo-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="bpoo-sidebar-card">

        <div className="bpoo-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="bpoo-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="bpoo-sidebar-image-holder">
          <img src="../../assets/Service-details-001.webp" alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default BPOSidebar;
