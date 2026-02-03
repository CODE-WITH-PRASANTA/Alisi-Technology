import React, { useState, useEffect } from "react";
import "./SusLeftComponent.css";

import bannerImg from "../../assets/service-details-3.webp";
import imgOne from "../../assets/service-details-2.webp";
import imgTwo from "../../assets/service-details-1.webp";

const faqData = [
  {
    question: "What are the main types of cloud computing?",
    answer:
      "Cloud computing includes IaaS, PaaS, and SaaS models offering scalable infrastructure, platforms, and software solutions."
  },
  {
    question: "How secure is cloud computing?",
    answer:
      "Cloud providers implement encryption, firewalls, and multi-factor authentication to protect data."
  },
  {
    question: "Can I move my existing applications to the cloud?",
    answer:
      "Yes, most applications can be migrated using cloud migration strategies."
  },
  {
    question: "How does cloud computing reduce costs?",
    answer:
      "It eliminates hardware investments and allows pay-as-you-go pricing."
  },
  {
    question: "How do you collect customer feedback?",
    answer:
      "Through surveys, analytics tools, and continuous monitoring systems."
  },
  {
    question: "How Do I Choose the Right Cloud Service Provider?",
    answer:
      "Cloud providers implement strong security measures such as encryption, firewalls, and multi-factor authentication. Businesses must also follow best practices like strong password policies and regular security audits."
  }
];

const SusLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===============================
     SEO (NO HELMET, NO UI CHANGE)
     =============================== */
  useEffect(() => {
    // Page title
    document.title =
      "Cloud Computing Services | Secure & Scalable IT Solutions";

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Professional cloud computing services offering scalable infrastructure, enhanced security, disaster recovery, and cost-effective IT solutions for modern businesses."
      );
    }

    // Meta keywords (optional)
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      "cloud computing services, cloud infrastructure, AWS cloud solutions, Azure cloud services, secure cloud computing, scalable IT solutions, enterprise cloud"
    );
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sus-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="sus-banner-box">
        <img src={bannerImg} alt="Cloud Computing Services Banner" />
      </div>

      {/* TITLE */}
      <h1 className="sus-main-heading">
        Cloud Computing: Transforming the Future of IT Solution
      </h1>

      {/* DESCRIPTION */}
      <p className="sus-text">
        Cloud computing is revolutionizing the way businesses and individuals store, access, and manage data. It refers to the delivery of computing services—such as storage, servers, networking, databases, software, and analytics—over the internet rather than relying on local servers or personal devices.
      </p>

      <p className="sus-text">
        Cloud computing is categorized into Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), enabling businesses to scale efficiently while reducing costs and improving collaboration.
      </p>

      {/* FEATURE LIST */}
      <div className="sus-feature-container">
        <ul className="sus-feature-list">
          <li>Scalable IT Infrastructure</li>
          <li>High Data Security</li>
          <li>Disaster Recovery Solutions</li>
          <li>Flexible Storage Options</li>
        </ul>

        <ul className="sus-feature-list">
          <li>Compliance & Support</li>
          <li>Reduced Hardware Costs</li>
          <li>24/7 Cloud Monitoring</li>
        </ul>
      </div>

      {/* IMAGE GRID */}
      <div className="sus-image-layout">
        <img src={imgOne} alt="Cloud team collaboration" />
        <img src={imgTwo} alt="Cloud infrastructure discussion" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="sus-services-section">
        <h2 className="sus-section-title">
          Our Range of Customer Services
        </h2>

        <p className="sus-section-desc">
          We deliver reliable cloud and IT services tailored to business needs. Our solutions ensure seamless operations, enhanced security, and optimized performance for organizations of all sizes.
        </p>

        <div className="sus-card-grid">
          <div className="sus-service-card">
            <span className="sus-card-number">01</span>
            <h4>Increased Customer Satisfaction</h4>
            <p>
              Personalized solutions help businesses deliver better customer experiences.
            </p>
          </div>

          <div className="sus-service-card">
            <span className="sus-card-number">02</span>
            <h4>Improved Operational Efficiency</h4>
            <p>
              Automation and cloud tools streamline workflows and reduce manual effort.
            </p>
          </div>

          <div className="sus-service-card">
            <span className="sus-card-number">03</span>
            <h4>Insights for Improvement</h4>
            <p>
              Data-driven insights empower continuous business growth.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="sus-faq-area">
        <h2 className="sus-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`sus-faq-box ${
              activeIndex === index ? "sus-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="sus-faq-header">
              <h4>{item.question}</h4>
              <span className="sus-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="sus-faq-content">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default SusLeftComponent;
