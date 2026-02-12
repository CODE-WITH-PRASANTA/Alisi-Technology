import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./HomeServices.css";
import {
  FiMonitor,
  FiCloud,
  FiShield,
  FiSettings,
  FiShare2,
  FiArrowUpRight,
} from "react-icons/fi";

const services = [
  {
    id: "01",
    icon: <FiMonitor />,
    title: "AI and Data Analytics",
    desc: "Alisil Technology delivers advanced AI and data analytics solutions that help businesses unlock the true power of data. Our intelligent systems improve operational efficiency, automate workflows, and enable data-driven decision-making for sustainable growth and digital transformation.",
    points: [
      "Machine Learning & Predictive Analytics",
      "Business Intelligence & Real-Time Data Dashboards",
      "Data Automation & Intelligent Process Optimization",
      "AI-Powered Chatbots & Virtual Assistants",
      "AI Model Development & Deployment",
      "Data Security & AI Governance",
    ],
    link: "/services/Data-analytics",
  },
  {
    id: "02",
    icon: <FiCloud />,
    title: "IOT and Digital Engineering",
    desc: "Alisil Technology delivers secure IoT and digital engineering solutions that accelerate digital transformation. We build scalable cloud infrastructures and smart connected systems to improve efficiency, security, and innovation.",
    points: [
      "Cloud migration & infrastructure modernization",
      "Secure and compliant cloud architecture",
      "Hybrid & scalable enterprise solutions",
    ],
    link: "/services/iot-digital-engineering",
  },
  {
    id: "03",
    icon: <FiShield />,
    title: "Consulting",
    desc: "Alisil Technology provides expert consulting services to help businesses strengthen cybersecurity, protect digital assets, and build resilient IT infrastructures. Our strategic guidance ensures secure, scalable, and future-ready technology environments.",
    points: [
      "Threat prevention",
      "Network security protection",
      "Data safety solutions",
    ],
    link: "/services/Consulting",
  },
  {
    id: "04",
    icon: <FiSettings />,
    title: "Cognitive Business operation",
    desc: "Alisil Technology enables intelligent business operations through cognitive technologies and digital transformation strategies. We help organizations optimize systems, automate workflows, and improve overall business performance.",
    points: [
      "Digital transformation planning",
      "System & process optimization",
      "Intelligent automation solutions",
    ],
    link: "/services/cognitive-operations",
  },
  {
    id: "05",
    icon: <FiShare2 />,
    title: "Network Solution & Services",
    desc: "Alisil Technology delivers secure, scalable, and high-performance network solutions designed for modern digital operations. Our expert team ensures seamless connectivity, optimized infrastructure, and secure communication systems to support business growth and digital transformation.",
    points: [
      "Network design & setup",
      "IoT system integration",
      "Secure connectivity",
    ],
    link: "/services/network-solutions",
  },
];

export default function HomeServices() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="home-services">
      <div className="home-services-wrap">
        {/* LEFT CONTENT */}
        <div className="home-services-left">
          <span className="badge">[ OUR SERVICES ]</span>

          <h2>
            Smart IT & Digital Solutions <br /> Built for Business Growth
          </h2>

          <Link to="/services/all-services" className="main-btn">
            Learn more →
          </Link>
        </div>

        {/* RIGHT CARDS */}
        <div className="home-services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="home-service-card"
              ref={(el) => (cardsRef.current[i] = el)}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="card-number">{s.id}</span>

              <div className="icon-wrap">{s.icon}</div>

              <h3>{s.title}</h3>
              <p>{s.desc}</p>

              <ul>
                {s.points.map((p, idx) => (
                  <li key={idx}>✓ {p}</li>
                ))}
              </ul>

              <Link to={s.link} className="learn-btn">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
