import React, { useState } from "react";
import "./SolutionLeftComponent.css";

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
    question: "How Do i Choose the Right Cloud Service Provider?",
    answer: 
    "Cloud providers implement strong security measures such as encryption, firewalls, and multi-factor authentication. However, businesses must also follow best practices, such as strong password policies and regular security audits, to enhance protection. Our solutions optimize every touchpoint of the customer journey, ensuring seamless, personalized, and meaningful interactions."
  }
];

const SolutionLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="solution-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="solution-banner-box">
        <img src={bannerImg} alt="Service Banner" />
      </div>

      {/* TITLE */}
      <h1 className="solution-main-heading">
        Cloud Computing: Transforming the Future of IT Solution
      </h1>

      {/* DESCRIPTION */}
      <p className="solution-text">
        Cloud computing is revolutionizing the way businesses and individuals store, access, and manage data. It refers to the delivery of computing services—such as storage, servers, networking, databases, software, and analytics—over the internet rather than relying on local servers or personal devices. This technology enables businesses to scale efficiently, reduce costs, and enhance collaboration by providing on-demand access to powerful computing resources.
      </p>

      <p className="solution-text">
        Cloud computing is categorized into different models, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), each catering to different business needs. Popular cloud providers like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud.
      </p>

      {/* FEATURE LIST */}
      <div className="solution-feature-container">

        <ul className="solution-feature-list">
          <li>Scalable IT Infrastructure</li>
          <li>High Data Security</li>
          <li>Disaster Recovery Solutions</li>
          <li>Flexible Storage Options</li>
        </ul>

        <ul className="solution-feature-list">
          <li>Compliance & Support</li>
          <li>Reduced Hardware Costs</li>
          <li>24/7 Cloud Monitoring</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="solution-image-layout">
        <img src={imgOne} alt="Team working" />
        <img src={imgTwo} alt="Discussion" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="solution-services-section">

        <h2 className="solution-section-title">
          Our Range of Customer Services
        </h2>

        <p className="solution-section-desc">
          We are committed to delivering top-notch customer services tailored meet your business needs. Our comprehensive range of IT solutions ensures seamless operations, enhanced security, and optimized performance for businesses of all sizes., leveraging technology, or designing more engaging digital experiences, our team is here to help you exceed your customers' expectations every time. We help you understand your customers.
        </p>

        <div className="solution-card-grid">

          <div className="solution-service-card">
            <span className="solution-card-number">01</span>
            <h4>Increased Customer Satisfaction</h4>
            <p>
              Personalized experiences ensure customers feel valued and engaged.
            </p>
          </div>

          <div className="solution-service-card">
            <span className="solution-card-number">02</span>
            <h4>Improved Operational Efficiency</h4>
            <p>
              Automation tools help teams handle tasks faster and smarter.
            </p>
          </div>

          <div className="solution-service-card">
            <span className="solution-card-number">03</span>
            <h4>Insights for Improvement</h4>
            <p>
              Data-driven strategies help businesses grow continuously.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="solution-faq-area">

        <h2 className="solution-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`solution-faq-box ${
              activeIndex === index ? "solution-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="solution-faq-header">
              <h4>{item.question}</h4>
              <span className="solution-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="solution-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default SolutionLeftComponent;
