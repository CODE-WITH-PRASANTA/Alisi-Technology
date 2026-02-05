import React from "react";
import { Link } from "react-router-dom";
import "./NSSidebar.css";

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

const NSSiderbar = () => {
  return (
    <div className="nss-sidebar-wrapper">

      {/* SERVICES LIST FIRST */}
      <div className="nss-sidebar-services-box">

        <h3 className="nss-sidebar-title">
          More Services
        </h3>

        <ul className="nss-sidebar-list">
          {services.map((service, index) => (
            <li key={index} className="nss-sidebar-item">

              <Link 
                to={service.path} 
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  alignItems: "center"
                }}
              >
                {service.name}
                <span className="nss-sidebar-arrow">›</span>
              </Link>

            </li>
          ))}
        </ul>

      </div>

      {/* INNOVATIVE CARD SECOND */}
      <div className="nss-sidebar-card">

        <div className="nss-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="nss-sidebar-phone">
            📞 +8 (321) 890-640
          </div>
        </div>

        <div className="nss-sidebar-image-holder">
          <img 
            src="../../assets/Service-details-001.webp" 
            alt="Professional" 
          />
        </div>

      </div>

    </div>
  );
};

export default NSSiderbar;
