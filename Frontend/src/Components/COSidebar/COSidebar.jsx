import React from "react";
import { Link } from "react-router-dom";
import "./COSidebar.css";
// import sidebarImg from "../../assets/AI&-Data-2.webp";

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

const COSidebar = () => {
  return (
    <div className="coo-sidebar-wrapper">

      {/* SERVICES LIST */}
      <div className="coo-sidebar-services-box">
        <h3 className="coo-sidebar-title">More Services</h3>

        <ul className="coo-sidebar-list">
          {services.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="coo-sidebar-item">
                {item.name}
                <span className="coo-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="coo-sidebar-card">
        <div className="coo-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="coo-sidebar-phone">
            📞 +1 (009) 544-7818
          </div>
        </div>

        {/* <div className="coo-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div> */}
      </div>

    </div>
  );
};

export default COSidebar;
