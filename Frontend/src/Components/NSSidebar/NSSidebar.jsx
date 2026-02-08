import React from "react";
import { Link } from "react-router-dom";
import "./NSSidebar.css";
// import sidebarImg from "../../assets/AI&Data-1.webp";

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

const NSSidebar = () => {
  return (
    <div className="nss-sidebar-wrapper">

      {/* SERVICES */}
      <div className="nss-sidebar-services-box">
        <h3 className="nss-sidebar-title">More Services</h3>

        <ul className="nss-sidebar-list">
          {services.map((service, index) => (
            <li key={index} className="nss-sidebar-item">
              <Link to={service.path}>
                <span>{service.name}</span>
                <span className="nss-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* INNOVATIVE CARD */}
      <div className="nss-sidebar-card">
        <div className="nss-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="nss-sidebar-phone">
            📞 +011-6931-3553
          </div>
        </div>

        {/* <div className="nss-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div> */}
      </div>

    </div>
  );
};

export default NSSidebar;
