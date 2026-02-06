import React, { useState } from "react";
import './KPOLeftComponent.css'
import KPOPricing from "../KPOPricing/KPOPricing";
import img1 from "../../Assets/Kpo-img1.webp";
import img2 from "../../Assets/Co-img2.webp";
import img3 from "../../Assets/Cyber-teamwork.webp";
const faqData = [
  {
    question: "What KPO services does Alisil Technology offer?",
    answer:
      "Alisil Technology provides comprehensive Knowledge Process Outsourcing (KPO) services including data analytics, research and reporting, financial analysis, content development, legal support services, and business intelligence solutions designed to support informed decision-making."
  },
  {
    question: "How is KPO different from traditional outsourcing?",
    answer:
      "Unlike basic outsourcing, KPO focuses on high-value, knowledge-driven processes that require skilled professionals and industry expertise. Alisil Technology’s KPO services help businesses gain strategic insights rather than just operational support."
  },
  {
    question: "Is sensitive business data secure with KPO services?",
    answer:
      "Yes. Alisil Technology follows strict data protection policies including secure servers, controlled access, encryption methods, and compliance standards to ensure complete confidentiality of client information."
  },
  {
    question: "Can KPO services be customized to business needs?",
    answer:
      "Absolutely. Our KPO solutions are fully customizable and scalable, allowing businesses to select specific services based on their goals, industry requirements, and project scope."
  },
  {
    question: "Which industries benefit from KPO services?",
    answer:
      "We support industries such as finance, healthcare, education, IT, legal services, market research, and e-commerce by providing specialized knowledge-based outsourcing solutions."
  },
  {
    question: "How does Alisil Technology maintain quality in KPO services?",
    answer: 
      "Quality is ensured through skilled professionals, continuous training, performance monitoring, advanced tools, and regular client feedback to deliver accurate and reliable results."
  }
];

const KPOLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="kpo-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="kpo-banner-box">
        <img src={img1} alt="KPO Services by Alisil Technology" />
      </div>

      {/* TITLE */}
      <h1 className="kpo-main-heading">
        KPO Services by Alisil Technology
      </h1>

      {/* DESCRIPTION */}
      <p className="kpo-text">
        Alisil Technology delivers professional KPO services that help organizations access specialized expertise, gain valuable insights, and improve strategic decision-making. Our knowledge-driven outsourcing solutions support businesses in managing complex processes with accuracy and efficiency.
      </p>

      <p className="kpo-text">
        From market research and data analytics to financial modeling, content services, and legal process support, our experienced KPO team provides high-quality solutions tailored to business requirements. We focus on delivering measurable value while ensuring confidentiality and reliability.
      </p>

      {/* FEATURE LIST */}
      <div className="kpo-feature-container">

        <ul className="kpo-feature-list">
          <li>Advanced Data Analysis & Reporting</li>
          <li>Industry-Specific Research</li>
          <li>Secure Knowledge Management</li>
          <li>Customized Outsourcing Solutions</li>
        </ul>

        <ul className="kpo-feature-list">
          <li>Cost Efficiency</li>
          <li>Expert Professional Teams</li>
          <li>Continuous Quality Monitoring</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="kpo-image-layout">
        <img src={img2} alt="KPO professionals analyzing data" />
        <img src={img3} alt="Knowledge process outsourcing team" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="kpo-services-section">

        <h2 className="kpo-section-title">
          Key Benefits of Our KPO Services
        </h2>

        <p className="kpo-section-desc">
          Alisil Technology’s KPO solutions empower businesses with specialized knowledge, operational efficiency, and strategic growth support.
        </p>

        <div className="kpo-card-grid">

          <div className="kpo-service-card">
            <span className="kpo-card-number">01</span>
            <h4>Access to Expertise</h4>
            <p>
              Our skilled professionals provide deep industry knowledge and analytical expertise to support complex business processes.
            </p>
          </div>

          <div className="kpo-service-card">
            <span className="kpo-card-number">02</span>
            <h4>Improved Business Decisions</h4>
            <p>
              Accurate insights and data-driven reporting help organizations make informed strategic decisions.
            </p>
          </div>

          <div className="kpo-service-card">
            <span className="kpo-card-number">03</span>
            <h4>Operational Efficiency</h4>
            <p>
              Outsourcing knowledge-based tasks allows internal teams to focus on core business functions and innovation.
            </p>
          </div>

        </div>
      </div>

      <KPOPricing />

      {/* FAQ */}
      <div className="kpo-faq-area">

        <h2 className="kpo-section-title">
          Frequently Asked Questions About KPO Services
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`kpo-faq-box ${
              activeIndex === index ? "kpo-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="kpo-faq-header">
              <h4>{item.question}</h4>
              <span className="kpo-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="kpo-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default KPOLeftComponent;
