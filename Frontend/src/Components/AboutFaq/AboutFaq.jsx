import React, { useState } from "react";
import "./AboutFaq.css";
import { FaPlus, FaMinus, FaPhoneAlt,  } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import personImg from "../../assets/testimonial-client-3.webp"; 

const faqData = [
  "What services does your company offer?",
  "How can your IT solutions help my business?",
  "Do you provide support after project completion?",
  "How long does it take to implement an IT solution?",
  "Is my data secure with your solutions?"
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(4);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="tek-faq-section">
      <div className="tek-faq-container">

        {/* LEFT CONTENT */}
        <div className="tek-faq-left">

          <span className="tek-faq-tag">[ READ FAQS ]</span>

          <h2 className="tek-faq-title">
            Quick Answers For Your <br />
            Important Questions
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
              Getting started is easy! Simply reach out us through our contact
              form or give us a call & we’ll schedule.
            </p>

            <div className="tek-faq-call-box">
              <img
                src={personImg}
                alt="person"
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

          {faqData.map((question, index) => (
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
                <h4>{question}</h4>

                <div className="tek-faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>

              {activeIndex === index && (
                <div className="tek-faq-answer">
                  <p>
                    Our solutions are tailored to meet your unique business
                    needs, improving efficiency, reducing costs, and enabling
                    seamless digital transformation to boost growth and
                    productivity with modern technologies.
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>

      {/* SCROLL TOP */}
      
    </section>
  );
};

export default FaqSection;
