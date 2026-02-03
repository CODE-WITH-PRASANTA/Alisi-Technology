import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./SusSidebar.css";

/* ✅ ALL SERVICES ROUTES (MATCHING NAVBAR) */
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

  /* SEO (lightweight, no helmet) */
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
      <div className="sus-sidebar-services-box">
        <h3 className="sus-sidebar-title">More Services</h3>

        <ul className="sus-sidebar-list">
          {services.map((service, index) => (
            <li key={index}>
              <NavLink
                to={service.path}
                className={({ isActive }) =>
                  isActive
                    ? "sus-sidebar-link active"
                    : "sus-sidebar-link"
                }
              >
                <span>{service.name}</span>
                <span className="sus-sidebar-arrow">›</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SusSidebar;
