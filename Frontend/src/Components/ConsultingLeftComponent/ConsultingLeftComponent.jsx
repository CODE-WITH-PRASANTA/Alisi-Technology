import React, { useState } from "react";
import "./ConsultingLeftComponent.css";

import bannerImg from "../../assets/Service-details-001.webp";
import imgOne from "../../assets/Service-details-002.webp";
import imgTwo from "../../assets/Service-details-002.webp";

const faqData = [
  {
    question: "What consulting services does Alisil Technology offer?",
    answer:
      "We provide IT consulting, digital transformation strategy, cloud advisory, cybersecurity consulting, enterprise architecture planning, and process optimization services tailored to your business needs."
  },
  {
    question: "How can consulting help my business grow?",
    answer:
      "Our consulting services help improve efficiency, reduce operational risks, optimize technology investments, and enable innovation—supporting sustainable business growth."
  },
  {
    question: "Do you offer customized consulting solutions?",
    answer:
      "Yes. Every organization is unique. We deliver personalized consulting strategies based on your industry, goals, and operational requirements."
  },
  {
    question: "What industries do you support?",
    answer:
      "We serve multiple industries including healthcare, finance, retail, manufacturing, logistics, and technology startups with tailored consulting solutions."
  },
  {
    question: "Do you provide ongoing support after consulting engagements?",
    answer:
      "Absolutely. Alisil Technology offers continuous advisory, performance monitoring, and optimization services to ensure long-term success."
  },
  {
    question: "How do I get started with Alisil Technology consulting services?",
    answer: 
    "You can contact our consulting team to schedule a free consultation. We assess your business needs and propose a customized roadmap aligned with your goals."
  }
];

const ConsultingLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="consulting-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="consulting-banner-box">
        <img src={bannerImg} alt="Service Banner" />
      </div>

      {/* TITLE */}
      <h1 className="consulting-main-heading">
        Smart Technology Consulting to Accelerate Your Business Growth
      </h1>

      {/* DESCRIPTION */}
      <p className="consulting-text">
        At Alisil Technology, we deliver expert IT consulting services designed to help businesses leverage technology, improve operational efficiency, and achieve sustainable growth. Our consulting approach combines strategic planning, modern digital solutions, and industry best practices to transform your ideas into scalable, secure, and high-performing systems.
      </p>

      <p className="consulting-text">
       Whether you’re a startup, SME, or enterprise, our professional consultants work closely with your team to understand your goals and provide customized technology strategies that drive real business results.
      </p>

      {/* FEATURE LIST */}
      <div className="consulting-feature-container">

        <ul className="consulting-feature-list">
          <li>Strategic IT Consulting</li>
          <li>Digital Transformation Planning</li>
          <li>Business Process Optimization</li>
          <li>Cloud Migration Consulting</li>
        </ul>

        <ul className="consulting-feature-list">
          <li>Data Analytics & Insights</li>
          <li>Continuous Technical Advisory</li>
          <li>Performance Optimization</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="consulting-image-layout">
        <img src={imgOne} alt="Team working" />
        <img src={imgTwo} alt="Discussion" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="consulting-services-section">

        <h2 className="consulting-section-title">
          Our IT Consulting Expertise
        </h2>

        <p className="consulting-section-desc">
          We offer end-to-end consulting solutions tailored to your organization’s unique requirements:
        </p>

        <div className="consulting-card-grid">

          <div className="consulting-service-card">
            <span className="consulting-card-number">01</span>
            <h4>Digital Transformation Consulting</h4>
            <p>
              Modernize your business with cloud adoption, automation, and data-driven processes. We help you transition from traditional systems to agile digital platforms that improve productivity and customer experience.
            </p>
          </div>

          <div className="consulting-service-card">
            <span className="consulting-card-number">02</span>
            <h4>Cloud & Infrastructure Consulting</h4>
            <p>
              From architecture design to deployment, we guide you through secure and scalable cloud solutions. Our experts help optimize infrastructure, reduce operational costs, and ensure high availability across your systems.
            </p>
          </div>

          <div className="consulting-service-card">
            <span className="consulting-card-number">03</span>
            <h4>Cybersecurity & Compliance Consulting</h4>
            <p>
              Protect your digital assets with enterprise-grade security strategies. We assess vulnerabilities, implement best practices, and help maintain compliance with industry standards.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="consulting-faq-area">

        <h2 className="consulting-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`consulting-faq-box ${
              activeIndex === index ? "consulting-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="consulting-faq-header">
              <h4>{item.question}</h4>
              <span className="consulting-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="consulting-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default ConsultingLeftComponent;
