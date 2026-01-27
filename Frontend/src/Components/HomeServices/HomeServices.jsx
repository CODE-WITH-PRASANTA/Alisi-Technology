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
    desc: "Comprehensive IT management, including monitoring, maintenance.",
    points: [
      "24/7 system monitoring",
      "IT support & troubleshooting",
      "Remote IT assistance",
    ],
  },
  {
    id: "02",
    icon: <FiCloud />,
    title: "Cloud Computing",
    desc: "Scalable cloud-based services, including migration, storage, and security.",
    points: [
      "Scalable cloud storage",
      "SaaS, PaaS, IaaS",
      "Hybrid & multi-cloud",
    ],
  },
  {
    id: "03",
    icon: <FiShield />,
    title: "Cybersecurity Solutions",
    desc: "Advanced security measures including firewall protection.",
    points: [
      "Firewall security",
      "Threat prevention",
      "Endpoint protection",
    ],
  },
  {
    id: "04",
    icon: <FiSettings />,
    title: "IT Consulting & Strategy",
    desc: "Expert guidance to optimize IT infrastructure.",
    points: [
      "Transformation planning",
      "Infrastructure optimization",
      "Risk assessment",
    ],
  },
  {
    id: "05",
    icon: <FiShare2 />,
    title: "Network Infrastructure",
    desc: "Designing and maintaining secure high-performance networks.",
    points: [
      "Network planning",
      "Optimization",
      "Risk assessment",
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
          <span className="badge">[ EXPLORE SERVICES ]</span>

          <h2>
            Reliable IT Solution <br /> for a Smarter.
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
