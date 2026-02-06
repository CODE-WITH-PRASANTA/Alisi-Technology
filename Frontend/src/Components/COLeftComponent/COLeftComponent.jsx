import React, { useState } from "react";
import './COLeftComponent.css'
import COPricing from "../COPricing/COPricing";
import img1 from "../../Assets/Co-img1.webp";
import img2 from "../../Assets/Co-img2.webp";
import img3 from "../../Assets/Co-img3.webp";


const faqData = [
  {
    question: "What are Cognitive Business Operations at Alisil Technology?",
    answer:
      "Cognitive Business Operations at Alisil Technology combine advanced analytics, automation, artificial intelligence, and process optimization to improve business efficiency, decision-making, and service quality across operations."
  },
  {
    question: "How do cognitive operations improve business performance?",
    answer:
      "Cognitive operations use intelligent systems to analyze data, automate workflows, and identify opportunities for improvement. This helps organizations reduce costs, improve accuracy, and deliver faster, more reliable services."
  },
  {
    question: "Are cognitive business solutions secure?",
    answer:
      "Yes. Alisil Technology follows strict security standards including data encryption, access controls, compliance frameworks, and continuous monitoring to ensure business data remains protected."
  },
  {
    question: "Can cognitive operations be customized for specific industries?",
    answer:
      "Absolutely. Our cognitive business solutions are tailored to industry needs including healthcare, finance, manufacturing, logistics, retail, and technology services."
  },
  {
    question: "What technologies power your cognitive operations services?",
    answer:
      "We leverage AI-driven automation, data analytics, machine learning models, cloud platforms, and intelligent workflow systems to optimize business processes."
  },
  {
    question: "How does Alisil Technology ensure quality and accuracy?",
    answer: 
      "Our team combines intelligent systems with human expertise, continuous performance tracking, and quality audits to ensure consistent and accurate operational results."
  }
];

const COLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="co-left-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="co-left-banner-box">
        <img src={img1} alt="Cognitive Business Operations by Alisil Technology" />
      </div>

      {/* TITLE */}
      <h1 className="co-left-main-heading">
        Cognitive Business Operations by Alisil Technology
      </h1>

      {/* DESCRIPTION */}
      <p className="co-left-text">
        Alisil Technology delivers intelligent cognitive business operations designed to transform traditional workflows into smart, data-driven processes. Our solutions help organizations improve efficiency, reduce operational risks, and enhance service performance through automation and advanced analytics.
      </p>

      <p className="co-left-text">
        By integrating artificial intelligence, process optimization, and human expertise, we support businesses in managing complex operations with greater accuracy and speed. Our cognitive approach ensures better decision-making, improved productivity, and sustainable business growth.
      </p>

      {/* FEATURE LIST */}
      <div className="co-left-feature-container">

        <ul className="co-left-feature-list">
          <li>Intelligent Process Automation</li>
          <li>Advanced Data Analytics</li>
          <li>AI-Driven Decision Support</li>
          <li>Customized Operational Solutions</li>
        </ul>

        <ul className="co-left-feature-list">
          <li>Operational Cost Reduction</li>
          <li>Enhanced Process Accuracy</li>
          <li>Continuous Performance Optimization</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="co-left-image-layout">
        <img src={img2} alt="Cognitive operations analytics team" />
        <img src={img3} alt="AI driven business workflow management" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="co-left-services-section">

        <h2 className="co-left-section-title">
          Benefits of Our Cognitive Business Operations
        </h2>

        <p className="co-left-section-desc">
          Alisil Technology’s cognitive operations services help businesses operate smarter, faster, and more efficiently.
        </p>

        <div className="co-left-card-grid">

          <div className="co-left-service-card">
            <span className="co-left-card-number">01</span>
            <h4>Smarter Decision-Making</h4>
            <p>
              Real-time analytics and intelligent insights enable organizations to make informed business decisions quickly and confidently.
            </p>
          </div>

          <div className="co-left-service-card">
            <span className="co-left-card-number">02</span>
            <h4>Operational Excellence</h4>
            <p>
              Automation and optimization reduce manual errors, streamline workflows, and improve overall service quality.
            </p>
          </div>

          <div className="co-left-service-card">
            <span className="co-left-card-number">03</span>
            <h4>Scalable Business Growth</h4>
            <p>
              Cognitive solutions adapt to changing business needs, supporting growth without increasing operational complexity.
            </p>
          </div>

        </div>
      </div>

      <COPricing />

      {/* FAQ */}
      <div className="co-left-faq-area">

        <h2 className="co-left-section-title">
          Frequently Asked Questions About Cognitive Business Operations
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`co-left-faq-box ${
              activeIndex === index ? "co-left-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="co-left-faq-header">
              <h4>{item.question}</h4>
              <span className="co-left-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="co-left-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default COLeftComponent;
