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
    desc: "Harness the power of AI, machine learning, and advanced analytics to unlock valuable business insights. We help organizations automate processes, predict trends, and make data-driven decisions that improve efficiency, customer experience, and revenue growth.",
  },
  {
    id: "02",
    icon: <FaCloud />,
    title: "BPO Services",
    desc: "Streamline your business operations with reliable Business Process Outsourcing solutions. From customer support to back-office management, we deliver cost-effective services that enhance productivity while allowing you to focus on core business objectives.",
  },
  {
    id: "03",
    icon: <FaProjectDiagram />,
    title: "KPO Services",
    desc: "Drive smarter outcomes with Knowledge Process Outsourcing services. Our experts provide high-value research, analytics, financial modeling, and domain-specific support to help organizations make informed strategic decisions.",
  },
  {
    id: "04",
    icon: <FaUserTie />,
    title: "Cloud Computing",
    desc: "Accelerate innovation with scalable cloud solutions. We offer cloud migration, modernization, security, and cloud-native development services that improve agility, reduce infrastructure costs, and ensure business continuity.",
  },
  {
    id: "05",
    icon: <FaShieldAlt />,
    title: "Cognitive Business Operations",
    desc: "Optimize enterprise operations using AI-powered automation and intelligent workflows. Our cognitive solutions improve accuracy, reduce manual effort, and enhance performance across finance, HR, supply chain, and customer engagement.",
  },
  {
    id: "06",
    icon: <FaBuilding />,
    title: "Consulting",
    desc: "Transform your business with strategic IT consulting. We guide organizations through digital transformation, technology planning, and process optimization to achieve sustainable growth in today’s competitive digital environment.",
  },
  {
    id: "07",
    icon: <FaMicrochip />,
    title: "IoT & Digital Engineering",
    desc: "Enable smart connectivity with IoT and digital engineering services. We design intelligent systems that connect devices, modernize infrastructure, and optimize performance across industries like manufacturing, healthcare, and logistics.",
  },
  {
    id: "08",
    icon: <FaNetworkWired />,
    title: "Sustainability Services",
    desc: "Support ESG goals with technology-driven sustainability solutions. We help organizations reduce environmental impact through energy optimization, carbon tracking, and digital sustainability strategies.",
  },
  {
    id: "09",
    icon: <FaLeaf />,
    title: "Network Solutions & Services",
    desc: "Ensure seamless connectivity with secure, high-performance network solutions. Our managed networking services deliver reliable infrastructure, optimized performance, and continuous monitoring for uninterrupted business operations.",
  },
  {
    id: "10",
    icon: <FaCode />,
    title: "Cybersecurity",
    desc: "Protect your digital ecosystem with comprehensive cybersecurity services. From risk assessment and threat detection to compliance and infrastructure security, we safeguard your data, applications, and networks against evolving cyber threats.",
  },
  {
    id: "11",
    icon: <FaCode />,
    title: "Enterprise Solutions",
    desc: "Build robust enterprise platforms and system integrations that improve productivity and operational efficiency. We deliver ERP, CRM, and custom enterprise solutions designed to support scalable business growth.",
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
