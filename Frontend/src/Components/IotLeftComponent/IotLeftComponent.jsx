import React, { useState } from "react";
import "./IotLeftComponent.css";


const faqData = [
  {
    question: "What IoT and Digital Engineering services does Alisil Technology offer?",
    answer:
      "Alisil Technology Pvt Ltd provides end-to-end IoT and digital engineering solutions including smart device integration, cloud-connected platforms, embedded system development, real-time data analytics, automation solutions, and digital transformation services tailored to business needs.."
  },
  {
    question: "How secure are your IoT and digital platforms?",
    answer:
      "Security is a core focus of our solutions. We implement enterprise-grade security protocols, data encryption, secure cloud infrastructure, and continuous monitoring to protect devices, networks, and business data from cyber threats.."
  },
  {
    question: "Can existing systems be integrated with IoT solutions?",
    answer:
      "Yes. Our digital engineering experts specialize in seamless system integration. We connect legacy systems with modern IoT platforms to improve efficiency, enable real-time monitoring, and enhance overall business performance without disrupting operations."
  },
  {
    question: "How can IoT solutions improve business efficiency?",
    answer:
      "IoT technologies enable real-time tracking, automation, predictive maintenance, and data-driven decision-making. This helps reduce downtime, optimize resources, lower operational costs, and improve productivity across industries."
  },
  {
    question: "Do you provide customized IoT and digital engineering solutions?",
    answer:
      "Absolutely. Every business has unique requirements. We design and develop customized IoT ecosystems and digital platforms that align with your operational goals, industry standards, and scalability needs."
  },
  {
    question: "How do you support businesses after project deployment??",
    answer: 
    "Alisil Technology offers continuous technical support, system monitoring, performance optimization, and regular updates to ensure your IoT and digital solutions operate smoothly and remain future-ready."
  }
];

const IotLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="iot-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="iot-banner-box">
        <img src="../../assets/Service-details-001.webp" alt="Service Banner" />
      </div>

      {/* TITLE */}
      <h1 className="iot-main-heading">
       IoT & Digital Engineering: Powering Smart, Connected Business Solutions
      </h1>

      {/* DESCRIPTION */}
      <p className="iot-text">
        At Alisil Technology Pvt Ltd, we deliver advanced IoT and Digital Engineering solutions that help businesses transform operations, improve efficiency, and unlock real-time insights. Our expertise spans smart device integration, cloud-connected platforms, embedded systems, and scalable digital infrastructures designed to support modern enterprises.
      </p>

      <p className="iot-text">
      We specialize in building secure, high-performance IoT ecosystems that connect hardware, software, and data into a unified intelligent system. From industrial automation and smart monitoring to digital transformation strategies, our solutions are tailored to meet the evolving needs of businesses across industries.
      </p>

      {/* FEATURE LIST */}
      <div className="iot-feature-container">

        <ul className="iot-feature-list">
          <li>Smart IoT System Design & Development</li>
          <li>Secure Cloud-Based IoT Platforms</li>
          <li>Real-Time Data Analytics & Monitoring</li>
          <li>Embedded Software Engineering</li>
        </ul>

        <ul className="iot-feature-list">
          <li>High Performance & Reliability</li>
          <li>Enterprise-Grade Security Standards</li>
          <li>24/7 Technical Support & Monitoring</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="iot-image-layout">
        <img src="../../assets/Service-details-002.webp" alt="Team working" />
        <img src="../../assets/Service-details-002.webp" alt="Discussion" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="iot-services-section">

        <h2 className="iot-section-title">
         Our Range of Digital Engineering & IoT Services
        </h2>

        <p className="iot-section-desc">
         At Alisil Technology Pvt Ltd, we offer a comprehensive range of IoT and digital engineering services designed to help businesses innovate, streamline operations, and stay ahead in the digital era. Our solutions combine smart technology, secure digital platforms, and intelligent automation to deliver measurable business impact.
        </p>

        <div className="iot-card-grid">

          <div className="iot-service-card">
            <span className="iot-card-number">01</span>
            <h4>Increased Business Efficiency</h4>
            <p>
              Smart IoT automation and digital systems streamline workflows, reduce manual processes, and improve operational performance across your organization.
            </p>
          </div>

          <div className="iot-service-card">
            <span className="iot-card-number">02</span>
            <h4>Scalable Digital Solutions</h4>
            <p>
              Our cloud-enabled platforms and engineering frameworks are built to grow with your business, ensuring flexibility and long-term sustainability.
            </p>
          </div>

          <div className="iot-service-card">
            <span className="iot-card-number">03</span>
            <h4>Data-Driven Innovation</h4>
            <p>
             Real-time monitoring, analytics, and intelligent insights empower businesses to make smarter decisions and continuously improve performance.
            </p>
          </div>

        </div>
      </div>

      {/* FAQ */}
      <div className="iot-faq-area">

        <h2 className="iot-section-title">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`iot-faq-box ${
              activeIndex === index ? "iot-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="iot-faq-header">
              <h4>{item.question}</h4>
              <span className="iot-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="iot-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default IotLeftComponent;
