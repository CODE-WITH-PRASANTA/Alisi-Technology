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
    desc: "End-to-end IT management to keep your systems running smoothly and securely.",
    points: [
      "24/7 monitoring & maintenance",
      "Technical support services",
      "Remote IT assistance",
    ],
    link: "/services/Data-analytics",
  },
  {
    id: "02",
    icon: <FiCloud />,
    title: "IOT and Digital Engineering",
    desc: "Flexible cloud platforms that support business growth and digital transformation.",
    points: [
      "Cloud migration services",
      "Secure cloud infrastructure",
      "Hybrid cloud solutions",
    ],
    link: "/services/IoT-Digital-Eng.",
  },
  {
    id: "03",
    icon: <FiShield />,
    title: "Cybersecurity Services",
    desc: "Advanced security solutions to protect your digital assets and data.",
    points: [
      "Threat prevention systems",
      "Network security protection",
      "Data safety solutions",
    ],
    link: "/services/cybersecurity",
  },
  {
    id: "04",
    icon: <FiSettings />,
    title: "Cognitive Business operation",
    desc: "Expert guidance to optimize technology and improve business performance.",
    points: [
      "Digital transformation planning",
      "System optimization",
      "Technology consulting",
    ],
    link: "/services/Cognitive",
  },
  {
    id: "05",
    icon: <FiShare2 />,
    title: "Network Solution & Services",
    desc: "Reliable connectivity solutions for modern digital operations.",
    points: [
      "Network design & setup",
      "IoT system integration",
      "Secure connectivity",
    ],
    link: "/services/Network",
  },
];

export default function HomeServices() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(el => observer.observe(el));
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

          <Link to="/services" className="main-btn">
            Learn More <FiArrowUpRight />
          </Link>
        </div>

        {/* RIGHT CARDS */}
        <div className="home-services-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className="home-service-card"
              ref={el => (cardsRef.current[i] = el)}
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
