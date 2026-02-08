import React, { useState, useEffect } from "react";
import "./SusLeftComponent.css";
import SusPricing from "../../Components/SusPricing/SusPricing";
import img1 from "../../Assets/Sus-main-img.webp";
import img2 from "../../Assets/Sus-img2.webp";
import img3 from "../../Assets/Sus-img3.webp";

const faqData = [
  {
    question: "What are sustainability services?",
    answer:
      "Sustainability services help organizations reduce environmental impact, improve energy efficiency, meet compliance standards, and adopt responsible business practices while maintaining profitability."
  },
  {
    question: "How does Alisil Technology support sustainable transformation?",
    answer:
      "Alisil Technology provides data-driven sustainability strategies, cloud-enabled optimization, carbon footprint analysis, and digital solutions that help businesses operate responsibly and efficiently."
  },
  {
    question: "Can sustainability initiatives reduce operational costs?",
    answer:
      "Yes. Sustainable practices such as energy optimization, cloud migration, and process automation significantly reduce operational expenses while improving productivity."
  },
  {
    question: "Do you help with ESG compliance and reporting?",
    answer:
      "Absolutely. We assist organizations with ESG frameworks, compliance reporting, performance tracking, and analytics to meet regulatory and stakeholder expectations."
  },
  {
    question: "Which industries benefit from sustainability services?",
    answer:
      "Manufacturing, IT, healthcare, retail, logistics, and enterprise organizations benefit by improving efficiency, lowering emissions, and strengthening brand reputation."
  },
  {
    question: "How long does a sustainability transformation take?",
    answer:
      "Timelines vary based on business size and goals, but most organizations begin seeing measurable improvements within a few months of implementation."
  }
];

const SusLeftComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* ===============================
     SEO (NO HELMET, NO UI CHANGE)
     =============================== */
  useEffect(() => {
    document.title =
      "Sustainability Services | Digital Sustainability Solutions – Alisil Technology";

    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Alisil Technology delivers sustainability services that help businesses reduce carbon footprint, optimize operations, achieve ESG goals, and drive long-term growth through smart digital solutions."
      );
    }

    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      document.head.appendChild(metaKeywords);
    }

    metaKeywords.setAttribute(
      "content",
      "sustainability services, ESG solutions, digital sustainability, carbon footprint reduction, green IT, enterprise sustainability, Alisil Technology, sustainable business solutions"
    );
  }, []);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="sus-left-wrapper">

      {/* BANNER IMAGE */}
      <div className="sus-banner-box">
        <img src={img1} alt="Sustainability Services by Alisil Technology" />
      </div>

      {/* TITLE */}
      <h1 className="sus-main-heading">
        Sustainability Services: Driving Responsible Digital Transformation
      </h1>

      {/* DESCRIPTION */}
      <p className="sus-text">
        At Alisil Technology, our sustainability services empower organizations to build environmentally responsible, efficient, and future-ready operations. We combine digital innovation with sustainability strategies to help businesses minimize environmental impact while maximizing performance.
      </p>

      <p className="sus-text">
        From carbon footprint reduction and ESG compliance to cloud optimization and smart analytics, we enable enterprises to embrace sustainable practices that deliver measurable business value. Our approach focuses on long-term growth, operational resilience, and responsible innovation.
      </p>

      {/* FEATURE LIST */}
      <div className="sus-feature-container">
        <ul className="sus-feature-list">
          <li>Carbon Footprint Assessment</li>
          <li>Energy Optimization Solutions</li>
          <li>Sustainable IT Infrastructure</li>
          <li>ESG Strategy & Reporting</li>
        </ul>

        <ul className="sus-feature-list">
          <li>Cloud-Based Optimization</li>
          <li>Regulatory Compliance Support</li>
          <li>Continuous Performance Monitoring</li>
        </ul>
      </div>

      {/* IMAGE GRID */}
      <div className="sus-image-layout">
        <img src={img2} alt="Sustainability team collaboration" />
        <img src={img3} alt="Enterprise sustainability planning" />
      </div>

      {/* CUSTOMER SERVICES */}
      <div className="sus-services-section">
        <h2 className="sus-section-title">
          Our Sustainability Service Approach
        </h2>

        <p className="sus-section-desc">
          We partner with organizations to design practical sustainability roadmaps backed by data, automation, and digital intelligence. Our solutions help businesses reduce costs, improve transparency, and create positive environmental impact.
        </p>

        <div className="sus-card-grid">
          <div className="sus-service-card">
            <span className="sus-card-number">01</span>
            <h4>Responsible Business Growth</h4>
            <p>
              We align sustainability goals with business objectives to drive ethical, scalable growth.
            </p>
          </div>

          <div className="sus-service-card">
            <span className="sus-card-number">02</span>
            <h4>Operational Excellence</h4>
            <p>
              Digital tools and automation improve efficiency while reducing energy usage and waste.
            </p>
          </div>

          <div className="sus-service-card">
            <span className="sus-card-number">03</span>
            <h4>Actionable Insights</h4>
            <p>
              Advanced analytics provide visibility into sustainability performance for smarter decisions.
            </p>
          </div>
        </div>
      </div>

      <SusPricing />

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
