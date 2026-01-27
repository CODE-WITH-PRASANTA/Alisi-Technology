import React from "react";
import "./AllServicesFeatures.css";
import {
  FaDesktop,
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaNetworkWired,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaDesktop />,
    title: "Managed IT Services",
    desc: "Comprehensive IT management, including monitoring, maintenance, and support to keep your business running smoothly.",
  },
  {
    id: "02",
    icon: <FaCloud />,
    title: "Cloud Computing",
    desc: "Scalable cloud-based services, including migration, storage, and security, for enhanced flexibility and efficiency.",
  },
  {
    id: "03",
    icon: <FaShieldAlt />,
    title: "Cybersecurity Solutions",
    desc: "Advanced security measures, including firewall protection, threat detection, and compliance business solutions.",
  },
  {
    id: "04",
    icon: <FaCogs />,
    title: "IT Consulting & Strategy",
    desc: "Expert guidance to optimize your IT infrastructure, streamline operations, and drive digital transformation.",
  },
  {
    id: "05",
    icon: <FaNetworkWired />,
    title: "Network Infrastructure",
    desc: "Designing, implementing, and maintaining secure and high-performance network systems.",
  },
  {
    id: "06",
    icon: <FaCode />,
    title: "Software Development",
    desc: "Custom software solutions tailored to your business needs, including web and mobile application development.",
  },
];

const AllServicesFeatures = () => {
  return (
    <section className="all-services-section">
      <div className="all-services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="all-service-card"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="all-service-number">{service.id}</span>

            <div className="all-service-icon">{service.icon}</div>

            <h3>{service.title}</h3>
            <p>{service.desc}</p>

            <a href="#" className="all-learn-more">
              Learn more <span>›</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllServicesFeatures;
