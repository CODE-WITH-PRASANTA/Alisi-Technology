import React, { useState } from "react";
import "./LeftContent.css";

import bannerImg from "../../assets/service-details-3.webp";
import imgOne from "../../assets/service-details-2.webp";
import imgTwo from "../../assets/service-details-1.webp";

const faqData = [
  {
    question: "What are the main types of cloud computing?",
    answer:
      "Cloud computing includes IaaS, PaaS, and SaaS models offering scalable infrastructure, platforms, and software solutions.",
  },
  {
    question: "How secure is cloud computing?",
    answer:
      "Cloud providers implement encryption, firewalls, and multi-factor authentication to protect data.",
  },
  {
    question: "Can I move my existing applications to the cloud?",
    answer:
      "Yes, most applications can be migrated using proven cloud migration strategies.",
  },
  {
    question: "How does cloud computing reduce costs?",
    answer:
      "It eliminates large hardware investments and offers flexible, pay-as-you-go pricing models.",
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
        Cloud Computing: Transforming the Future of IT Solutions
      </h1>

      {/* ================= DESCRIPTION ================= */}
      <p className="ai-analytics-text">
        Cloud computing is transforming how organizations store, manage, and
        access data. By delivering computing services over the internet,
        businesses can scale faster, improve collaboration, and reduce
        operational costs while maintaining security and performance.
      </p>

      <p className="ai-analytics-text">
        Our cloud solutions span Infrastructure as a Service (IaaS), Platform as
        a Service (PaaS), and Software as a Service (SaaS), enabling businesses
        to modernize IT systems and adapt to evolving digital demands.
      </p>

      {/* ================= FEATURES ================= */}
      <div className="ai-analytics-feature-container">
        <ul className="ai-analytics-feature-list">
          <li>Scalable IT Infrastructure</li>
          <li>High Data Security</li>
          <li>Disaster Recovery Solutions</li>
          <li>Flexible Storage Options</li>
        </ul>

        <ul className="ai-analytics-feature-list">
          <li>Compliance & Regulatory Support</li>
          <li>Reduced Hardware Costs</li>
          <li>24/7 Cloud Monitoring</li>
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
            <h4>Client-Focused Thinking</h4>
            <p>
              We align technology with real business goals to deliver measurable
              value and long-term impact.
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>02</span>
            <h4>Continuous Learning & Innovation</h4>
            <p>
              Our teams continuously strengthen their expertise through hands-on
              experience and emerging technologies.
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>03</span>
            <h4>Security, Quality & Reliability</h4>
            <p>
              We follow industry best practices to deliver secure, compliant,
              and highly reliable cloud and IT services.
            </p>
          </div>

          <div className="ai-analytics-value-card">
            <span>04</span>
            <h4>Long-Term Partnership</h4>
            <p>
              Beyond delivery, we provide continuous support and strategic
              guidance to help businesses scale with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* ================= CUSTOMER SERVICES ================= */}
      <div className="ai-analytics-services-section">
        <h2 className="ai-analytics-section-title">
          Our Range of Customer Services
        </h2>

        <p className="ai-analytics-section-desc">
          We deliver reliable cloud and IT services that improve operational
          efficiency, enhance security, and support sustainable business growth.
        </p>

        <div className="ai-analytics-card-grid">
          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">01</span>
            <h4>Increased Customer Satisfaction</h4>
            <p>
              Tailored cloud solutions improve performance and user experience.
            </p>
          </div>

          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">02</span>
            <h4>Operational Efficiency</h4>
            <p>
              Automation and optimization reduce manual effort and downtime.
            </p>
          </div>

          <div className="ai-analytics-service-card">
            <span className="ai-analytics-card-number">03</span>
            <h4>Actionable Insights</h4>
            <p>
              Data-driven strategies enable smarter decision-making.
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
