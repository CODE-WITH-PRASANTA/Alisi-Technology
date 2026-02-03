import React, { useEffect, useRef } from "react";
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
    title: "Managed IT Services",
    desc: "End-to-end IT management to keep your systems running smoothly and securely.",
    points: [
      "24/7 monitoring & maintenance",
      "Technical support services",
      "Remote IT assistance",
    ],
  },
  {
    id: "02",
    icon: <FiCloud />,
    title: "Cloud Computing Solutions",
    desc: "Flexible cloud platforms that support business growth and digital transformation.",
    points: [
      "Cloud migration services",
      "Secure cloud infrastructure",
      "Hybrid cloud solutions",
    ],
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
  },
  {
    id: "04",
    icon: <FiSettings />,
    title: "IT Consulting & Strategy",
    desc: "Expert guidance to optimize technology and improve business performance.",
    points: [
      "Digital transformation planning",
      "System optimization",
      "Technology consulting",
    ],
  },
  {
    id: "05",
    icon: <FiShare2 />,
    title: "Network & IoT Infrastructure",
    desc: "Reliable connectivity solutions for modern digital operations.",
    points: [
      "Network design & setup",
      "IoT system integration",
      "Secure connectivity",
    ],
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

          <button className="main-btn">
            Learn More <FiArrowUpRight />
          </button>
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

              <button className="learn-btn">Learn more →</button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
