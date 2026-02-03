import React, { useState } from "react";
import "./SolutionLeftComponent.css";

import bannerImg from "../../assets/Service-details-001.webp";
import imgOne from "../../assets/Service-details-002.webp";
import imgTwo from "../../assets/Service-details-001.webp";

const faqData = [
  
  {
    question: "What are enterprise solutions?",
    answer:
      "Enterprise solutions are comprehensive IT systems designed to support large-scale business operations. At Alisil Technology, our enterprise solutions include custom software development, system integration, business process automation, and secure infrastructure services that help organizations improve efficiency, scalability, and decision-making."
  },
  {
    question: "How secure are your enterprise and networking services?",
    answer:
      "Alisil Technology implements enterprise-grade security technologies including next-generation firewalls, encrypted VPNs, access controls, intrusion detection systems, and continuous monitoring. These measures protect your data and systems from cyber threats while ensuring compliance with industry standards."
  },
  {
    question: "What types of network services does Alisil Technology offer?",
    answer:
      "We provide end-to-end network services such as network design and deployment, managed network services, wireless networking, firewall configuration, VPN setup, performance optimization, disaster recovery planning, and 24/7 monitoring—supporting reliable and scalable enterprise environments."
  },
  {
    question: "Can you upgrade or modernize an existing network infrastructure?",
    answer:
      "Yes. Our team specializes in network modernization and upgrades. We assess your current infrastructure and implement scalable, high-performance solutions that improve speed, reliability, and security—while minimizing downtime and business disruption."
  },
  {
    question: "How do enterprise solutions help reduce business costs?",
    answer:
      "Enterprise solutions reduce costs by automating workflows, optimizing IT resources, centralizing operations, and minimizing manual effort. Alisil Technology helps organizations achieve long-term savings through efficient infrastructure, smarter processes, and proactive system management."
  },
  {
    question: "Do you provide custom enterprise software development?",
    answer:
      "Absolutely. Alisil Technology designs and develops custom enterprise applications tailored to your business needs, ensuring secure architecture, seamless integrations, and scalable performance to support future growth."
  },
  {
    question: "How do I choose the right cloud or enterprise service provider?",
    answer:
      "Choosing the right provider involves evaluating security standards, scalability, industry experience, support capabilities, and customization options. Alisil Technology delivers secure, flexible enterprise and cloud solutions backed by expert guidance, ongoing support, and proven implementation strategies."
  },
  {
    question: "Do you offer ongoing support and monitoring?",
    answer:
      "Yes. We provide continuous monitoring, maintenance, and technical support to ensure your enterprise systems remain secure, optimized, and up to date—helping your business operate smoothly 24/7."
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
      Enterprise Solutions: Driving Digital Transformation for Modern Businesses      </h1>

      {/* DESCRIPTION */}
      <p className="solution-text">
        At Alisil Technology, we deliver powerful Enterprise IT Solutions designed to streamline operations, enhance productivity, and accelerate business growth. Our enterprise services help organizations integrate advanced technologies, optimize workflows, and build scalable digital ecosystems that adapt to evolving market demands.
      </p>

      <p className="solution-text">
       Our enterprise offerings include Enterprise Resource Planning (ERP), Customer Relationship Management (CRM), Business Process Automation, and Custom Software Development, enabling companies to modernize infrastructure while maintaining reliability and compliance.
      </p>

      {/* FEATURE LIST */}
      <div className="solution-feature-container">

        <ul className="solution-feature-list">
          <li>Scalable Enterprise Architecture</li>
          <li>Secure Data Management & Compliance</li>
          <li>Seamless System Integration</li>
          <li>Process Automation & Optimization</li>
        </ul>

        <ul className="solution-feature-list">
          <li>High Availability & Performance</li>
          <li>Ongoing Support & Maintenance</li>
          <li>24/7 Network Monitoring & Support</li>
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
          Our Range of Enterprise Services
        </h2>

        <p className="solution-section-desc">
          We provide comprehensive managed network services that enhance operational efficiency, strengthen security, and ensure uninterrupted connectivity.
        </p>

        <div className="solution-card-grid">

          <div className="solution-service-card">
            <span className="solution-card-number">01</span>
            <h4>Business Process Automation</h4>
            <p>
              We streamline complex workflows through intelligent automation, reducing manual effort, minimizing errors, and improving operational efficiency across departments.
            </p>
          </div>

          <div className="solution-service-card">
            <span className="solution-card-number">02</span>
            <h4>Custom Enterprise Applications</h4>
            <p>
              Our team builds secure, scalable enterprise applications tailored to your organization’s unique requirements, ensuring seamless performance and long-term flexibility.
            </p>
          </div>

          <div className="solution-service-card">
            <span className="solution-card-number">03</span>
            <h4>System Integration & Modernization</h4>
            <p>
             We connect legacy systems with modern platforms to create unified digital environments, improving data visibility, collaboration, and business agility.
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
