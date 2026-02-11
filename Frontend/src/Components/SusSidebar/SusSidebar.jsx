import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SusSidebar.css";
// import sidebarImg from "../../assets/AI-data-4.webp";

/* ALL SERVICES ROUTES */
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

const SusSidebar = () => {
  useEffect(() => {
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Explore our IT services including AI & data analytics, cloud computing, cybersecurity, consulting, enterprise solutions, and sustainability services."
      );
    }
  }, []);

  return (
    <div className="sus-sidebar-wrapper">

      {/* SERVICES */}
      <div className="sus-sidebar-services-box">
        <h3 className="sus-sidebar-title">More Services</h3>

        <ul className="sus-sidebar-list">
          {services.map((service, index) => (
            <li key={index}>
              <NavLink
                to={service.path}
                className={({ isActive }) =>
                  isActive ? "sus-sidebar-link active" : "sus-sidebar-link"
                }
              >
                <span>{service.name}</span>
                <span className="sus-sidebar-arrow">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* INNOVATIVE CARD */}
      <div className="sus-sidebar-card">
        <div className="sus-sidebar-card-content">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="sus-sidebar-phone">
            📞 +1 (009) 544-7818
          </div>
        </div>

        {/* <div className="sus-sidebar-image-holder">
          <img src={sidebarImg} alt="Professional" />
        </div> */}
      </div>

    </div>
  );
};

export default SusSidebar;
