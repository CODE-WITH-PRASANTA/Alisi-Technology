import React from "react";
import { Link } from "react-router-dom";
import "./IotSidebar.css";
// import sidebarImg from "../../assets/AI-data-4.webp";

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

const IotSidebar = () => {
  return (
    <div className="iot-sidebar-wrapper">

      {/* SERVICES LIST */}
      <div className="iot-sidebar-services-box">
        <h3 className="iot-sidebar-title">Our Technology Services</h3>

        <ul className="iot-sidebar-list">
          {services.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="iot-sidebar-item">
                {item.name}
                <span className="iot-sidebar-arrow">›</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* CARD */}
      <div className="iot-sidebar-card">
        <div className="iot-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IoT & Digital Engineering Solutions</p>

          <div className="iot-sidebar-phone">
            📞 Speak With Our Experts: +1 (009) 544-7818
          </div>
        </div>

        {/* <div className="iot-sidebar-image-holder">
          <img src={sidebarImg} alt="Alisil Technology Digital Engineering Team" />
        </div> */}
      </div>

    </div>
  );
};

export default IotSidebar;
