import React, { useState } from "react";
import './BPOLeftComponent.css'
import BPOPricing from "../../Components/BPOPricing/BPOPricing";

const faqData = [
  {
    question: "What BPO services does Alisil Technology provide?",
    answer:
      "Alisil Technology offers a complete range of Business Process Outsourcing (BPO) services including customer support, back-office operations, technical assistance, data management, and business process automation. Our services are designed to improve efficiency while reducing operational costs."
  },
  {
    question: "How does outsourcing with Alisil Technology benefit my business?",
    answer:
      "Outsourcing with Alisil Technology helps businesses focus on core operations while we handle daily processes. This leads to improved productivity, reduced expenses, better service quality, and faster business growth."
  },
  {
    question: "Is data security ensured in BPO services?",
    answer:
      "Yes. Data security is a top priority at Alisil Technology. We implement strict security protocols including encryption, controlled access, secure servers, and compliance with industry standards to protect all client information."
  },
  {
    question: "Can Alisil Technology scale services as my business grows?",
    answer:
      "Absolutely. Our BPO services are flexible and scalable, allowing businesses to easily increase or decrease service capacity based on demand without infrastructure investment."
  },
  {
    question: "Which industries do you support through BPO services?",
    answer:
      "We serve various industries including healthcare, education, finance, retail, e-commerce, logistics, and startups by providing customized outsourcing solutions."
  },
  {
    question: "How do you ensure service quality in BPO operations?",
    answer: 
      "Alisil Technology maintains high service standards through continuous monitoring, staff training, performance analytics, and client feedback to ensure consistent quality delivery."
  }
];

const BPOLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bpo-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="bpo-banner-box">
        <img src="../../assets/Service-details-001.webp" alt="BPO Services at Alisil Technology" />
      </div>

      {/* TITLE */}
      <h1 className="bpo-main-heading">
        BPO Services by Alisil Technology
      </h1>

      {/* DESCRIPTION */}
      <p className="bpo-text">
        Alisil Technology provides reliable and cost-effective BPO services that help businesses streamline operations, improve customer experience, and enhance overall productivity. Our outsourcing solutions are designed to support companies of all sizes with professional service delivery and modern process management.
      </p>

      <p className="bpo-text">
        From customer support and administrative tasks to technical assistance and data processing, our experienced BPO team ensures accuracy, efficiency, and confidentiality. We focus on helping organizations reduce operational burden while maintaining high service quality and business continuity.
      </p>

      {/* FEATURE LIST */}
      <div className="bpo-feature-container">

        <ul className="bpo-feature-list">
          <li>Professional Customer Support</li>
          <li>Secure Data Handling</li>
          <li>Process Automation</li>
          <li>Scalable Outsourcing Solutions</li>
        </ul>

        <ul className="bpo-feature-list">
          <li>Cost Optimization</li>
          <li>24/7 Service Availability</li>
          <li>Quality Performance Monitoring</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="bpo-image-layout">
        <img src="../../assets/Service-details-002.webp" alt="BPO operations team working" />
        <img src="../../assets/Service-details-002.webp" alt="Business outsourcing professionals" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="bpo-services-section">

        <h2 className="bpo-section-title">
          Our BPO Service Benefits
        </h2>

        <p className="bpo-section-desc">
          Alisil Technology delivers high-quality BPO solutions that support business growth, improve efficiency, and enhance customer satisfaction.
        </p>

        <div className="bpo-card-grid">

          <div className="bpo-service-card">
            <span className="bpo-card-number">01</span>
            <h4>Improved Customer Experience</h4>
            <p>
              Our trained professionals handle customer interactions efficiently, ensuring quick resolution, positive engagement, and brand trust.
            </p>
          </div>

          <div className="bpo-service-card">
            <span className="bpo-card-number">02</span>
            <h4>Operational Cost Savings</h4>
            <p>
              Outsourcing with Alisil Technology reduces staffing, infrastructure, and operational costs while maintaining high performance standards.
            </p>
          </div>

          <div className="bpo-service-card">
            <span className="bpo-card-number">03</span>
            <h4>Business Scalability</h4>
            <p>
              Our flexible service models allow businesses to scale operations easily during growth phases or seasonal demands.
            </p>
          </div>

        </div>
      </div>

        <BPOPricing />
      {/* FAQ */}
      <div className="bpo-faq-area">

        <h2 className="bpo-section-title">
          Frequently Asked Questions About BPO Services
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`bpo-faq-box ${
              activeIndex === index ? "bpo-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="bpo-faq-header">
              <h4>{item.question}</h4>
              <span className="bpo-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="bpo-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default BPOLeftComponent;
