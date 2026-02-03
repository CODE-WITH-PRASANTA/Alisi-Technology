import React, { useState } from "react";
import "./HomeTestimonial.css";

import img1 from "../../Assets/testimonial-client-1.webp";
import img2 from "../../Assets/teastmonial-client-2.webp";
import img3 from "../../Assets/testimonial-client-3.webp";

const data = [
  {
    name: "Ralph Edwards",
    role: "Operations Manager",
    img: img2,
    text:
      "Alisil Technology provided outstanding IT and digital engineering solutions that helped streamline our operations. Their expertise in cloud systems and automation made a real difference in improving efficiency and reliability across our business."
  },
  {
    name: "Guy Hawkins",
    role: "Business Director",
    img: img1,
    text:
      "Working with Alisil Technology was a smooth and professional experience. Their team delivered secure cloud solutions and custom software that supported our digital transformation goals. We highly value their commitment and technical knowledge."
  },
  {
    name: "Mevon Lane",
    role: "Chief Technology Officer",
    img: img3,
    text:
      "The IoT and cybersecurity solutions from Alisil Technology significantly improved our system performance and data security. Their innovative approach and continuous support have made them a trusted technology partner."
  }
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");

  const prev = () => {
    setDirection("left");
    setActive(active === 0 ? data.length - 1 : active - 1);
  };

  const next = () => {
    setDirection("right");
    setActive(active === data.length - 1 ? 0 : active + 1);
  };

  return (
    <section className="testimonial-wrapper">
      <div className="avatar-tabs">
        {data.map((item, i) => (
          <div
            key={i}
            className={`avatar ${active === i ? "active" : ""}`}
            onClick={() => {
              setDirection(i > active ? "right" : "left");
              setActive(i);
            }}
          >
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>

      <h3>{data[active].name}</h3>
      <span>{data[active].role}</span>

      <div className="slider-area">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        <div key={active} className={`card slide-${direction}`}>
          <div className="stars">★★★★★</div>
          <p>{data[active].text}</p>
        </div>

        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>

      <div className="dots">
        {data.map((_, i) => (
          <span
            key={i}
            className={`dot ${active === i ? "active" : ""}`}
            onClick={() => {
              setDirection(i > active ? "right" : "left");
              setActive(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}
