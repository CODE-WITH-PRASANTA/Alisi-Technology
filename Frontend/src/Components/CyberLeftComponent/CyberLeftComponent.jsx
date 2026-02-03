import React, { useState } from "react";
import "./CyberLeftComponent.css";

import bannerImg from "../../assets/service-details-2.webp";
import imgOne from "../../assets/service-details-2.webp";
import imgTwo from "../../assets/service-details-1.webp";

const faqData = [
  {
    question: "What cyber security services does Alisil Technology provide?",
    answer:
      "We offer end-to-end cyber security services including network protection, cloud security, endpoint security, threat monitoring, vulnerability testing, and compliance support."
  },
  {
    question: "How secure are your cyber security solutions?",
    answer:
      "Our solutions use enterprise-grade encryption, advanced threat intelligence, and continuous monitoring to ensure maximum protection against evolving cyber threats."
  },
  {
    question: "Can you protect cloud and on-premise systems?",
    answer:
      "Yes. We secure both cloud-based and on-premise environments using hybrid security architectures and best practices."
  },
  {
    question: "How does cyber security help reduce business risk?",
    answer:
      "Cyber security prevents data breaches, minimizes downtime, protects customer information, and ensures regulatory compliance—saving costs associated with incidents and recovery."
  },
  {
    question: "Do you provide ongoing monitoring and support?",
    answer:
      "Absolutely. We offer 24/7 monitoring, incident response, and managed security services to keep your systems protected at all times."
  },
  {
    question: "How do I get started with Alisil Technology?",
    answer: 
    "Simply contact our team for a security assessment. We’ll evaluate your current infrastructure and recommend a customized cyber security roadmap."
  }
];

const CyberLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cyber-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="cyber-banner-box">
        <img src={bannerImg} alt="Service Banner" />
      </div>

      {/* TITLE */}
      <h1 className="cyber-main-heading">
        Cyber Security Solutions: Protecting Your Digital Assets with Alisil Technology
      </h1>

      {/* DESCRIPTION */}
      <p className="cyber-text">
       In today’s rapidly evolving digital landscape, cyber threats are becoming more sophisticated and frequent. At Alisil Technology, we deliver comprehensive cyber security solutions designed to safeguard your business infrastructure, applications, and sensitive data from modern cyber risks.
      </p>

      <p className="cyber-text">
       Our expert-driven security services help organizations prevent breaches, detect threats in real time, and respond quickly to incidents—ensuring business continuity, compliance, and peace of mind. From startups to enterprises, we provide scalable security strategies tailored to your operational needs.
      </p>

      {/* FEATURE LIST */}
      <div className="cyber-feature-container">

        <ul className="cyber-feature-list">
          <li>Advanced Threat Detection & Prevention</li>
          <li>Enterprise-Grade Data Protection</li>
          <li>Secure Network Infrastructure</li>
          <li>Compliance & Regulatory Support</li>
        </ul>

        <ul className="cyber-feature-list">
          <li>Disaster Recovery & Business Continuity Planning</li>
          <li>Vulnerability Assessment & Penetration Testing</li>
          <li>24/7 Security Monitoring & Incident Response</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="cyber-image-layout">
        <img src={imgOne} alt="Team working" />
        <img src={imgTwo} alt="Discussion" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="cyber-services-section">

        <h2 className="cyber-section-title">
         Our Range of Cyber Security Services
        </h2>

        <p className="cyber-section-desc">
          We deliver reliable cyber security and IT protection services that enhance resilience, improve operational efficiency, and strengthen customer trust.
        </p>

        <div className="cyber-card-grid">

          <div className="cyber-service-card">
            <span className="cyber-card-number">01</span>
            <h4>Comprehensive Security Protection</h4>
            <p>
              We implement multi-layered security frameworks to protect your systems, applications, and data from malware, ransomware, phishing, and unauthorized access.
            </p>
          </div>

          <div className="cyber-service-card">
            <span className="cyber-card-number">02</span>
            <h4>Operational Risk Reduction</h4>
            <p>
             Through automation, monitoring, and real-time alerts, we minimize downtime and mitigate cyber risks—keeping your business running smoothly.
            </p>
          </div>

          <div className="cyber-service-card">
            <span className="cyber-card-number">03</span>
            <h4>Actionable Security Insights</h4>
            <p>
             Our analytics-driven approach provides visibility into threats, enabling smarter decisions and continuous improvement of your security posture.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="cyber-faq-area">

        <h2 className="cyber-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`cyber-faq-box ${
              activeIndex === index ? "cyber-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="cyber-faq-header">
              <h4>{item.question}</h4>
              <span className="cyber-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="cyber-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default CyberLeftComponent;
