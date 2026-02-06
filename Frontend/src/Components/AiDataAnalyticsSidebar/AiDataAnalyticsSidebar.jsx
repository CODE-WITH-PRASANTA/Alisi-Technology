import React from "react";
import { Link } from "react-router-dom";
import "./AiDataAnalyticsSidebar.css";
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

const AiDataAnalyticsSidebar = () => {
  return (
    <div className="ai-analytics-sidebar-wrapper">

      {/* SERVICES */}
      <div className="ai-analytics-sidebar-services-box">
        <h3 className="ai-analytics-sidebar-title">More Services</h3>

        <ul className="ai-analytics-sidebar-list">
          {services.map((service, index) => (
            <li key={index} className="ai-analytics-sidebar-item">
              <Link to={service.path}>
                {service.name}
                <span className="ai-analytics-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* INFO CARD */}
      <div className="ai-analytics-sidebar-card">
        <div className="ai-analytics-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="ai-analytics-sidebar-phone">
            📞+1 (009) 544-7818
          </div>
        </div>

        <div className="ai-analytics-sidebar-image-holder">
          <img src={sidebarImg} alt="IT Solutions" />
        </div>
      </div>

    </div>
  );
};

export default AiDataAnalyticsSidebar;
