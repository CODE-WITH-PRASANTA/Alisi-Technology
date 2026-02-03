import React, { useState } from "react";
import "./LeftContent.css";

import bannerImg from "../../Assets/AI&Data-1.webp";
import imgOne from "../../Assets/AI-data-4.webp";
import imgTwo from "../../Assets/AI&data-3.webp";

const faqData = [
  {
    question: "What AI services does Alisi Technology provide?",
    answer:
      "Alisi Technology delivers end-to-end AI solutions including machine learning models, intelligent automation, predictive analytics, and custom AI applications—helping businesses turn data into measurable outcomes.",
  },
  {
    question: "How does data analytics improve business performance?",
    answer:
      "Our data analytics solutions transform raw data into actionable insights, enabling smarter decisions, improved efficiency, and faster growth through real-time dashboards, advanced analytics, and business intelligence.",
  },
  {
    question: "Can AI be integrated with existing systems?",
    answer:
      "Yes. We seamlessly integrate AI models and analytics platforms into your current applications and infrastructure—enhancing performance without disrupting operations.",
  },
  {
    question: "Is my data secure with AI and analytics platforms?",
    answer:
      "Absolutely. Alisi Technology implements enterprise-grade security, encryption, access control, and continuous monitoring to ensure your data remains protected, compliant, and reliable.",
  },
];

const LeftContent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="ai-analytics-left-wrapper">
      {/* ================= BANNER ================= */}
      <div className="ai-analytics-banner-box">
        <img src={bannerImg} alt="Cloud Services Banner" />
      </div>

      {/* ================= MAIN HEADING ================= */}
      <h1 className="ai-analytics-main-heading">
        Bringing AI to Life with Data, Models & Intelligent Agents
      </h1>

      {/* ================= DESCRIPTION ================= */}
      <p className="ai-analytics-text">
       Our strategy moves beyond traditional enterprise software toward a modern paradigm powered by Data, AI Models, and Intelligent Agents—with humans always in the loop.
      </p>

      <p className="ai-analytics-text">
        We build intelligent systems that automate processes, enhance decision-making, and create reimagined value chains across industries. From predictive analytics to autonomous workflows, Alisi Technology helps you operationalize AI across your organization.
      </p>

      {/* ================= FEATURES ================= */}
      <div className="ai-analytics-feature-container">
        <ul className="ai-analytics-feature-list">
          <li>Scalable IT Infrastructure</li>
          <li>Build custom AI models</li>
          <li>Deploy intelligent automation</li>
          <li>Flexible Storage Architecture</li>
        </ul>

        <ul className="ai-analytics-feature-list">
          <li>Create AI-powered applications</li>
          <li>Business intelligence dashboards</li>
          <li>Data engineering & architecture</li>
        </ul>
      </div>

      {/* ================= IMAGE GRID ================= */}
      <div className="ai-analytics-image-layout">
        <img src={imgOne} alt="Cloud Engineering Team" />
        <img src={imgTwo} alt="Cloud Strategy Discussion" />
      </div>

      {/* ================= OUR VALUES & APPROACH ================= */}
      <div className="ai-analytics-values-section">
        <h2 className="ai-analytics-section-title">
          Our Values & Approach
        </h2>

        <div className="ai-analytics-values-grid">
          <div className="ai-analytics-value-card">
            <span>01</span>
            <h4>Client-First Strategy</h4>
            <p>
             We align technology with real business objectives—delivering measurable outcomes and sustainable value.
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>02</span>
            <h4>Security, Quality & Reliability</h4>
            <p>
              We follow global best practices to provide secure, compliant, and highly reliable IT and cloud services you can trust
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>03</span>
            <h4>Continuous Learning & Innovation</h4>
            <p>
              Our teams stay ahead of emerging technologies through hands-on experience, certifications, and continuous upskilling to bring you modern, future-proof solutions.
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>04</span>
            <h4>Long-Term Partnership</h4>
            <p>
             Beyond delivery, we offer continuous support and strategic guidance—helping your business grow with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CUSTOMER SERVICES ================= */}
      <div className="ai-analytics-services-section">
        <h2 className="ai-analytics-section-title">
         Powering the Intelligent Enterprise of Tomorrow
        </h2>

        <p className="ai-analytics-section-desc">
         At Alisi Technology, we deliver intelligent cloud, AI, and IT solutions designed to accelerate growth, enhance security, and improve operational performance. Our customer-centric approach ensures every solution is tailored to your business goals—helping you scale faster in today’s digital economy.
        </p>

        <div className="ai-analytics-card-grid">
          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">01</span>
            <h4>Enhanced Customer Experience</h4>
            <p>
              We design smart digital platforms and cloud environments that improve performance, availability, and user engagement—helping your business deliver seamless experiences across every touchpoint.
            </p>
          </div>

          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">02</span>
            <h4>Operational Excellence</h4>
            <p>
              Through automation, system optimization, and modern infrastructure, we reduce manual effort, minimize downtime, and streamline workflows to maximize productivity.
            </p>
          </div>

          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">03</span>
            <h4>Data-Driven Intelligence</h4>
            <p>
              Our analytics and AI solutions transform raw data into actionable insights, empowering leadership teams to make confident, informed decisions.
            </p>
          </div>
        </div>
      </div>

      {/* ================= FAQ ================= */}
      <div className="ai-analytics-faq-area">
        <h2 className="ai-analytics-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`ai-analytics-faq-box ${
              activeIndex === index ? "ai-analytics-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="ai-analytics-faq-header">
              <h4>{item.question}</h4>
              <span className="ai-analytics-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="ai-analytics-faq-content">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftContent;
