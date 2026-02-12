import React from "react";
import { Link } from "react-router-dom";
import "./CloudSidebar.css";

// import sidebarImg from "../../assets/AI&-Data-2.webp";

const services = [
  { name: "All Services", path: "/services/all-services" },
  { name: "Artificial Intelligence & Data Analytics", path: "/services/Data-Analytics" },
  { name: "BPO Services", path: "/services/bpo" },
  { name: "KPO Services", path: "/services/kpo" },
  { name: "Cloud Computing", path: "/services/Cloud" },
  { name: "Cognitive Business Operations", path: "/services/Cognitive" },
  { name: "Consulting", path: "/services/Consulting" },
  { name: "Enterprise Solutions", path: "/services/Enterprise-Solutions" },
  { name: "IoT & Digital Engineering", path: "/services/IoT-Digital-Eng." },
  { name: "Network Solutions & Services", path: "/services/Network" },
  { name: "Sustainability Services", path: "/services/Sustainability" },
];

const CloudSidebar = () => {
  return (
    <div className="cloudd-sidebar-wrapper">
      <div className="cloudd-sidebar-services-box">
        <h3 className="cloudd-sidebar-title">More Services</h3>

        <ul className="cloudd-sidebar-list">
          {services.map((item, index) => (
            <li key={index} className="cloudd-sidebar-item">
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {item.name}
                <span className="cloudd-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="cloudd-sidebar-card">
        <div className="cloudd-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="cloudd-sidebar-phone">📞 +1 (009) 544-7818</div>
        </div>
{/* 
        <div className="cloudd-sidebar-image-holder">
          <img src={sidebarImg} alt="IT Solutions" />
        </div> */}
      </div>
    </div>
  );
};

export default CloudSidebar;
