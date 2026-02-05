import React from "react";
import { Link } from "react-router-dom";
import "./CyberSidebar.css";
import sidebarImg from "../../assets/Service-details-001.webp";

const services = [
  { name: "All Services", path: "/services/all-services" },
  { name: "Artificial Intelligence & Data Analytics", path: "/services/Data-Analytics" },
  { name: "BPO Services", path: "/services/bpo" },
  { name: "KPO Services", path: "/services/kpo" },
  { name: "Cloud Computing", path: "/services/Cloud" },
  { name: "Cognitive Business Operations", path: "/services/Cognitive" },
  { name: "Consulting", path: "/services/Consulting" },
  { name: "Cybersecurity", path: "/services/Cybersecurity" },
  { name: "Enterprise Solutions", path: "/services/Enterprise-Solutions" },
  { name: "IoT & Digital Engineering", path: "/services/IoT-Digital-Eng." },
  { name: "Network Solutions & Services", path: "/services/Network" },
  { name: "Sustainability Services", path: "/services/Sustainability" },
];

const CyberSidebar = () => {
  return (
    <div className="cyber-sidebar-wrapper">

      {/* SERVICES LIST */}
      <div className="cyber-sidebar-services-box">
        <h3 className="cyber-sidebar-title">More Services</h3>

        <ul className="cyber-sidebar-list">
          {services.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="cyber-sidebar-item">
                {item.name}
                <span className="cyber-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="cyber-sidebar-card">
        <div className="cyber-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="cyber-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="cyber-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div>
      </div>

    </div>
  );
};

export default CyberSidebar;
