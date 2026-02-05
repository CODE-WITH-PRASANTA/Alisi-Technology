import React, { useState } from "react";
import "./CloudLeftComponent.css";

// ✅ Proper image imports
import cloudMain from "../../Assets/Cloud-main-img.webp";
import cloudDiscussion from "../../Assets/Cloud-discussion.webp";
import cloudTeamworking from "../../Assets/Cloud-Teamworking.webp";
import CloudPricing from "../CloudPricing/CloudPricing";

const faqData = [
  {
    question: "What are the main types of cloud computing?",
    answer:
      "Cloud computing includes Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). At Alisil Technology, we help businesses choose and implement the right cloud model based on performance needs, scalability goals, and budget."
  },
  {
    question: "How secure is cloud computing with Alisil Technology?",
    answer:
      "Security is our top priority. Alisil Technology delivers enterprise-grade cloud security including data encryption, access control, firewall protection, compliance management, and continuous monitoring. Our solutions follow industry best practices to protect your applications, infrastructure, and sensitive business data."
  },
  {
    question: "Can I move my existing applications to the cloud?",
    answer:
      "Yes. We provide complete cloud migration services including assessment, planning, data transfer, application modernization, and post-migration optimization. Our experts ensure minimal downtime while securely moving your existing systems to the cloud."
  },
  {
    question: "How does cloud computing reduce IT costs?",
    answer:
      "Cloud computing eliminates expensive on-premise hardware and enables pay-as-you-go pricing. With Alisil Technology, businesses reduce infrastructure costs, lower maintenance expenses, and improve resource utilization while gaining scalable computing power."
  },
  {
    question: "How does Alisil Technology collect customer feedback?",
    answer:
      "We actively collect customer feedback through performance reviews, surveys, analytics, and ongoing support interactions. This helps us continuously improve our cloud services and deliver solutions aligned with client expectations."
  },
  {
    question: "What industries does Alisil Technology serve?",
    answer:
      "We support multiple industries including healthcare, finance, retail, manufacturing, logistics, and startups by delivering tailored cloud solutions that meet industry-specific compliance and performance requirements."
  }
];

const CloudLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="cloud-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="cloud-banner-box">
        <img src={cloudMain} alt="Cloud Services Banner" />
      </div>

      <h1 className="cloud-main-heading">
        Cloud Computing Services by Alisil Technology
      </h1>

      <p className="cloud-text">
        At Alisil Technology, we deliver secure, scalable, and high-performance cloud computing solutions designed to help businesses modernize infrastructure, improve agility, and reduce operational costs.
      </p>

      <p className="cloud-text">
        From startups to large enterprises, we provide end-to-end cloud services including IaaS, PaaS, and SaaS with full migration and DevOps support.
      </p>

      {/* FEATURES */}
      <div className="cloud-feature-container">
        <ul className="cloud-feature-list">
          <li>Scalable IT Infrastructure</li>
          <li>High Data Security</li>
          <li>Disaster Recovery Solutions</li>
          <li>Flexible Storage Options</li>
        </ul>

        <ul className="cloud-feature-list">
          <li>Compliance & Support</li>
          <li>Reduced Hardware Costs</li>
          <li>24/7 Cloud Monitoring</li>
        </ul>
      </div>

      {/* IMAGE GRID */}
      <div className="cloud-image-layout">
        <img src={cloudTeamworking} alt="Cloud Team Working" />
        <img src={cloudDiscussion} alt="Cloud Discussion" />
      </div>

      {/* SERVICES */}
      <div className="cloud-services-section">
        <h2 className="cloud-section-title">
          Our Range of Cloud Customer Services
        </h2>

        <p className="cloud-section-desc">
          At Alisil Technology, we deliver reliable cloud and IT services that improve operational efficiency, enhance security, and support sustainable business growth.
        </p>

        <div className="cloud-card-grid">

          <div className="cloud-service-card">
            <span className="cloud-card-number">01</span>
            <h4>Increased Customer Satisfaction</h4>
            <p>
              Tailored cloud solutions improve performance, availability, and user experience.
            </p>
          </div>

          <div className="cloud-service-card">
            <span className="cloud-card-number">02</span>
            <h4>Operational Efficiency</h4>
            <p>
              Automation and DevOps reduce manual workload and infrastructure costs.
            </p>
          </div>

          <div className="cloud-service-card">
            <span className="cloud-card-number">03</span>
            <h4>Actionable Insights</h4>
            <p>
              Advanced analytics provide real-time performance visibility.
            </p>
          </div>

        </div>
      </div>

           <CloudPricing />

      {/* FAQ */}
      <div className="cloud-faq-area">
        <h2 className="cloud-section-title">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`cloud-faq-box ${activeIndex === index ? "cloud-faq-active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="cloud-faq-header">
              <h4>{item.question}</h4>
              <span className="cloud-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="cloud-faq-content">{item.answer}</p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default CloudLeftComponent;
