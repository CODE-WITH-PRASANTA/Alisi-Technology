import React, { useState } from "react";
import './NSLeftComponent.css'
import NSPricing from "../NSPricing/NSPricing";
import img1 from "../../Assets/Nss-img1.webp";
import img2 from "../../Assets/Nss2-img.webp";
import img3 from "../../Assets/Nss-img3.webp";

const faqData = [
  {
    question: "What network solutions does Alisil Technology provide?",
    answer:
      "Alisil Technology offers complete network solutions including network design, implementation, monitoring, security management, cloud connectivity, and ongoing IT infrastructure support to ensure stable and secure business operations."
  },
  {
    question: "How do network services improve business performance?",
    answer:
      "Reliable network systems improve communication, data flow, and system availability. Alisil Technology helps businesses reduce downtime, enhance security, and improve productivity through optimized network infrastructure."
  },
  {
    question: "Are your network solutions secure?",
    answer:
      "Yes. We implement advanced security measures such as firewalls, encryption, intrusion detection systems, access control, and continuous monitoring to protect business networks from threats."
  },
  {
    question: "Can network services be customized for business needs?",
    answer:
      "Absolutely. Our network solutions are tailored based on business size, industry requirements, security needs, and future scalability goals."
  },
  {
    question: "Which industries benefit from your network services?",
    answer:
      "We support industries including healthcare, finance, education, manufacturing, retail, logistics, and IT services with reliable and secure network infrastructure solutions."
  },
  {
    question: "How does Alisil Technology ensure network reliability?",
    answer: 
      "We ensure reliability through proactive monitoring, regular maintenance, performance optimization, and quick response support to minimize downtime."
  }
];

const NSLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="nsl-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="nsl-banner-box">
        <img src={img1} alt="Network Solutions and Services by Alisil Technology" />
      </div>

      {/* TITLE */}
      <h1 className="nsl-main-heading">
        Network Solutions & Services by Alisil Technology
      </h1>

      {/* DESCRIPTION */}
      <p className="nsl-text">
        Alisil Technology delivers robust and secure network solutions designed to support modern business operations. Our network services ensure seamless connectivity, high performance, and reliable infrastructure that enable organizations to operate efficiently in a digital environment.
      </p>

      <p className="nsl-text">
        From network design and deployment to security management and ongoing monitoring, our experienced engineers provide end-to-end network services tailored to business needs. We focus on building scalable, secure, and high-performing networks that support long-term growth.
      </p>

      {/* FEATURE LIST */}
      <div className="nsl-feature-container">

        <ul className="nsl-feature-list">
          <li>Network Design & Implementation</li>
          <li>Secure Infrastructure Management</li>
          <li>High-Speed Connectivity Solutions</li>
          <li>Scalable Network Architecture</li>
        </ul>

        <ul className="nsl-feature-list">
          <li>24/7 Network Monitoring</li>
          <li>Advanced Cybersecurity Protection</li>
          <li>Performance Optimization</li>
        </ul>

      </div>

      {/* IMAGE GRID */}
      <div className="nsl-image-layout">
        <img src={img2} alt="Network engineers managing infrastructure" />
        <img src={img3} alt="IT network operations center" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="nsl-services-section">

        <h2 className="nsl-section-title">
          Benefits of Our Network Solutions & Services
        </h2>

        <p className="nsl-section-desc">
          Alisil Technology provides reliable network services that strengthen business operations and improve system performance.
        </p>

        <div className="nsl-card-grid">

          <div className="nsl-service-card">
            <span className="nsl-card-number">01</span>
            <h4>Reliable Connectivity</h4>
            <p>
              Our network solutions ensure stable and fast connections that support smooth communication and data transfer.
            </p>
          </div>

          <div className="nsl-service-card">
            <span className="nsl-card-number">02</span>
            <h4>Enhanced Security</h4>
            <p>
              We protect business networks with advanced security technologies that prevent cyber threats and unauthorized access.
            </p>
          </div>

          <div className="nsl-service-card">
            <span className="nsl-card-number">03</span>
            <h4>Scalable Infrastructure</h4>
            <p>
              Our solutions grow with your business, supporting expansion without compromising performance or reliability.
            </p>
          </div>

        </div>
      </div>

      <NSPricing />

      {/* FAQ */}
      <div className="nsl-faq-area">

        <h2 className="nsl-section-title">
          Frequently Asked Questions About Network Solutions & Services
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            className={`nsl-faq-box ${
              activeIndex === index ? "nsl-faq-active" : ""
            }`}
            onClick={() => toggleFAQ(index)}
          >

            <div className="nsl-faq-header">
              <h4>{item.question}</h4>
              <span className="nsl-faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>

            {activeIndex === index && (
              <p className="nsl-faq-content">
                {item.answer}
              </p>
            )}

          </div>
        ))}

      </div>

    </div>
  );
};

export default NSLeftComponent;
