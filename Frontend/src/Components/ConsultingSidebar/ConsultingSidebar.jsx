import React from "react";
import { Link } from "react-router-dom";
import "./ConsultingSidebar.css";
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

const ConsultingSidebar = () => {
  return (
    <div className="consultingg-sidebar-wrapper">

      {/* SERVICES LIST */}
      <div className="consultingg-sidebar-services-box">
        <h3 className="consultingg-sidebar-title">More Services</h3>

        <ul className="consultingg-sidebar-list">
          {services.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="consultingg-sidebar-item"
              >
                {item.name}
                <span className="consultingg-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="consultingg-sidebar-card">
        <div className="consultingg-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="consultingg-sidebar-phone">
            📞 +1 (009) 544-7818
          </div>
        </div>

        {/* <div className="consultingg-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div> */}
      </div>

    </div>
  );
};

export default ConsultingSidebar;
