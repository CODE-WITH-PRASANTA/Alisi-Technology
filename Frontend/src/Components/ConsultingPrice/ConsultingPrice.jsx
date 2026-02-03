import React, { useState } from "react";
import "./ConsultingPrice.css";
import { FaCheck } from "react-icons/fa";

const ConsultingPrice = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      desc: "Essential IT Services",
      monthly: 99,
      features: [
        "Essential IT Support",
        "Cloud Storage (50 GB)",
        "Monthly System Check",
        "Security Updates",
        "Software Fixes",
      ],
    },
    {
      name: "Standard Plan",
      desc: "Complete IT Solutions",
      monthly: 249,
      featured: true,
      features: [
        "Advanced IT Management",
        "Cloud Storage (200 GB)",
        "Custom Software",
        "Threat Detection",
        "Backup & Recovery",
      ],
    },
    {
      name: "Premium Plan",
      desc: "Advanced IT Services",
      monthly: 499,
      features: [
        "Unlimited Cloud Storage",
        "1-Hour Priority Support",
        "Cybersecurity Protection",
        "Dedicated Account Manager",
        "24/7 Emergency Service",
      ],
    },
  ];

  const getPrice = (price) =>
    yearly ? Math.round(price * 12 * 0.85) : price;

  return (
    <section className="Consulting-section">
      {/* Header */}
      <div className="Consulting-header">
        <span className="Consulting-tag">[ BEST PRICING ]</span>
        <h2>
          Pricing Plans to Find the <br /> Right IT Support
        </h2>

        {/* Toggle */}
        <div className="Consulting-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>

          <div
            className={`Consulting-switch ${yearly ? "yearly" : ""}`}
            onClick={() => setYearly(!yearly)}
          >
            <span />
          </div>

          <span className={yearly ? "active" : ""}>
            Yearly <em>(Save 15%)</em>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="Consulting-grid">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`Consulting-card ${plan.featured ? "featured" : ""}`}
          >
            <h3>{plan.name}</h3>
            <p className="Consulting-sub">{plan.desc}</p>

            <h1>
              ${getPrice(plan.monthly)}
              <span>{yearly ? "/per year" : "/per month"}</span>
            </h1>

            <button
              className={`Consulting-btn ${
                plan.featured ? "solid" : "outline"
              }`}
            >
              Choose package →
            </button>

            <ul>
              {plan.features.map((f, idx) => (
                <li key={idx}>
                  <FaCheck /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConsultingPrice;
