import React from "react";
import "./SolutionSidebar.css";


const services = [
  "BPO Services",
  "KPO Services",
  "Cloud Computing",
  "Cognitive Business Operations",
  "Artificial Intelligence & Data & Analytics",
  "Consulting",
  "Cyber Security",
  "IoT & Digital Engineering",
  "Network Solutions & Services",
  "Sustainability Services",
];

const SolutionSidebar = () => {
  return (
    <div className="solution-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="solution-sidebar-services-box">

        <h3 className="solution-sidebar-title">
          More Services
        </h3>

        <ul className="solution-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="solution-sidebar-item">
              {item}
              <span className="solution-sidebar-arrow">›</span>
            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="solution-sidebar-card">

        <div className="solution-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="solution-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="solution-sidebar-image-holder">
          <img src="../../assets/Service-details-001.webp" alt="Professional" />
        </div>

      </div>

    </div>
  );
};

export default SolutionSidebar;
