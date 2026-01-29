import React, { useEffect } from "react";
import "./HomeFeedback.css";

const feedbackItems = [
  "Clients Feedback /",
  "Clients Feedback /",
  "Clients Feedback /",
  "Clients Feedback /",
  "Clients Feedback /",
  "Clients Feedback /",
];

const ClientFeedback = () => {

  // Load Poppins font (same as reference)
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <section className="home-feedback-section">
      <div className="home-feedback-wrapper">
        <div className="home-feedback-track">
          {feedbackItems.map((item, index) => (
            <span
              key={index}
              className="home-feedback-text"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item}
            </span>
          ))}

          {/* duplicate for smooth infinite */}
          {feedbackItems.map((item, index) => (
            <span
              key={`dup-${index}`}
              className="home-feedback-text"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;
