import React from "react";
import "./AllServicesFeatures.css";
import {
  FaBrain,
  FaCloud,
  FaProjectDiagram,
  FaUserTie,
  FaShieldAlt,
  FaBuilding,
  FaMicrochip,
  FaNetworkWired,
  FaLeaf,
  FaCode,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaBrain />,
    title: "Artificial Intelligence & Data Analytics",
    desc: "Leverage AI-driven insights, machine learning, and advanced analytics to make smarter business decisions.",
  },
  {
    id: "02",
    icon: <FaCloud />,
    title: "Cloud",
    desc: "End-to-end cloud solutions including migration, modernization, security, and cloud-native development.",
  },
  {
    id: "03",
    icon: <FaProjectDiagram />,
    title: "Cognitive Business Operations",
    desc: "Optimize operations using automation, AI-powered workflows, and intelligent business processes.",
  },
  {
    id: "04",
    icon: <FaUserTie />,
    title: "Consulting",
    desc: "Strategic consulting services to guide digital transformation and long-term business growth.",
  },
  {
    id: "05",
    icon: <FaShieldAlt />,
    title: "Cybersecurity",
    desc: "Comprehensive security solutions to protect data, applications, and infrastructure from cyber threats.",
  },
  {
    id: "06",
    icon: <FaBuilding />,
    title: "Enterprise Solutions",
    desc: "Robust enterprise platforms and integrations that enhance productivity and operational efficiency.",
  },
  {
    id: "07",
    icon: <FaMicrochip />,
    title: "IoT & Digital Engineering",
    desc: "Smart IoT solutions and digital engineering services to connect devices and modernize systems.",
  },
  {
    id: "08",
    icon: <FaNetworkWired />,
    title: "Network Solutions & Services",
    desc: "High-performance, secure network architecture and managed networking services.",
  },
  {
    id: "09",
    icon: <FaLeaf />,
    title: "Sustainability Services",
    desc: "Technology-driven sustainability solutions to support ESG goals and responsible innovation.",
  },
  {
    id: "10",
    icon: <FaCode />,
    title: "Software Development",
    desc: "Custom web, mobile, and enterprise software solutions tailored to your business needs.",
  },
];

const AllServicesFeatures = () => {
  return (
    <section className="all-services-section">
      {/* ================= HEADER (SEO H1) ================= */}
      <div className="all-services-summary">
        <h1>IT Services & Digital Transformation Solutions</h1>
        <p>
          We provide end-to-end IT services and digital solutions that help
          businesses innovate, scale, and stay secure in today’s fast-paced
          digital landscape.
        </p>
      </div>

      {/* ================= SERVICES GRID ================= */}
      <div className="all-services-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="all-service-card"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="all-service-number">{service.id}</span>
            <div className="all-service-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.desc}</p>

            <a href="#" className="all-learn-more">
              Learn more <span>›</span>
            </a>
          </div>
        ))}
      </div>

      {/* ================= SEO CONTENT SECTION ================= */}
      <div className="all-services-seo-content">
        <h2>Comprehensive IT Services for Modern Businesses</h2>
        <p>
          Our IT services are designed to support organizations at every stage
          of their digital journey. From artificial intelligence and cloud
          computing to cybersecurity and enterprise solutions, we deliver
          scalable and secure technology services tailored to business needs.
        </p>

        <h3>Why Choose Our Technology Services?</h3>
        <p>
          We combine industry expertise, innovative technologies, and proven
          methodologies to help businesses achieve operational excellence.
          Whether you need cloud migration, data analytics, IoT solutions, or
          custom software development, our team ensures measurable results and
          long-term growth.
        </p>

        <h3>Industries We Serve</h3>
        <p>
          Our digital services support industries including finance, healthcare,
          manufacturing, retail, education, and enterprise organizations,
          enabling them to adapt, innovate, and compete in the digital era.
        </p>
      </div>
    </section>
  );
};

export default AllServicesFeatures;
