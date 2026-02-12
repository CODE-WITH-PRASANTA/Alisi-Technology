import React from "react";
import { Link } from "react-router-dom";
import "./SolutionSidebar.css";
// import sidebarImg from "../../assets/Service-details-001.webp";

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

const SolutionSidebar = () => {
  return (
    <div className="solution-sidebar-wrapper">

      {/* SERVICES LIST */}
      <div className="solution-sidebar-services-box">
        <h3 className="solution-sidebar-title">More Services</h3>

        <ul className="solution-sidebar-list">
          {services.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="solution-sidebar-item">
                {item.name}
                <span className="solution-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="solution-sidebar-card">
        <div className="solution-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="solution-sidebar-phone">
            📞 +1 (009) 544-7818
          </div>
        </div>

        {/* <div className="solution-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div> */}
      </div>

    </div>
  );
};

export default SolutionSidebar;
