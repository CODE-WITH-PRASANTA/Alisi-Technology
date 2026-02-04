import React, { useState } from "react";
import "./AboutFaq.css";
import { FaPlus, FaMinus, FaPhoneAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";


const faqData = [
  {
    question: "Who is Alisil Technology and what does the company specialize in?",
    answer:
      "Alisil Technology Pvt Ltd is a digital engineering and IoT solutions company focused on delivering smart technology, custom software, cloud platforms, and automation systems that help businesses grow and modernize their operations."
  },
  {
    question: "What makes Alisil Technology different from other IT companies?",
    answer:
      "We combine technical expertise with a business-focused approach. Our solutions are customized, scalable, and built with long-term performance in mind, ensuring real value rather than one-size-fits-all technology services."
  },
  {
    question: "What industries does Alisil Technology work with?",
    answer:
      "We support clients across manufacturing, logistics, healthcare, education, retail, and technology sectors, delivering tailored digital engineering and IoT solutions based on specific industry needs."
  },
  {
    question: "How experienced is your technical team?",
    answer:
      "Our team consists of skilled engineers, developers, and digital specialists with years of hands-on experience in IoT systems, cloud computing, automation, and modern software technologies."
  },
  {
    question: "How does Alisil Technology ensure project quality and reliability?",
    answer:
      "We follow structured development processes, perform rigorous testing, maintain strong security standards, and provide continuous support to ensure every solution meets high-quality and performance expectations."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="tek-faq-section">
      <div className="tek-faq-container">

        {/* LEFT CONTENT */}
        <div className="tek-faq-left">

          <span className="tek-faq-tag">[ ABOUT ALISIL TECHNOLOGY ]</span>

          <h2 className="tek-faq-title">
            Learn More About Our <br />
            Company & Expertise
          </h2>

          <button className="tek-faq-contact-btn">
            <span>Contact Us</span>
            <div className="tek-faq-arrow-circle">
              <FiArrowUpRight className="tek-faq-arrow-icon" />
            </div>
          </button>

          {/* CALL CARD */}
          <div className="tek-faq-call-card">
            <p>
              Have questions about our company or services? Our team is always
              ready to guide you and provide the information you need.
            </p>

            <div className="tek-faq-call-box">
              <img
                src="../../assets/testimonial-client-1.webp"
                alt="Alisil Technology consultant"
                className="tek-faq-person-img"
              />

              <div>
                <span>Call us now</span>
                <h4>+1 (888) 333-8181</h4>
              </div>

              <div className="tek-faq-phone-icon">
                <FaPhoneAlt />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FAQ */}
        <div className="tek-faq-right">

          {faqData.map((item, index) => (
            <div
              key={index}
              className={`tek-faq-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="tek-faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{item.question}</h4>

                <div className="tek-faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              {activeIndex === index && (
                <div className="tek-faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FaqSection;
