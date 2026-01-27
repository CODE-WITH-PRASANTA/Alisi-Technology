import React, { useState } from "react";
import "./AboutTestimonial.css";

import img1 from "../../Assets/testimonial-client-1.webp";
import img2 from "../../Assets/teastmonial-client-2.webp";
import img3 from "../../Assets/testimonial-client-3.webp";

const data = [
  {
    name: "Ralph Edwards",
    role: "Co. Founder",
    img: img2,
    text:
      "Working with Tkmino has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we've seen after to be our company partnering."
  },
  {
    name: "Guy Hawkins",
    role: "Co. Founder",
    img: img1,
    text:
      "Working with Tkmino has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we've seen after to be our company partnering."
  },
  {
    name: "Mevon Lane",
    role: "Co. Founder",
    img: img3,
    text:
      "Working with Tkmino has been a game-changer for our business. Their team's professionalism, attention to detail, and innovative solutions have helped us streamline operations and achieve our goals faster than we imagined. We truly feel like a valued partner. The results we've seen after to be our company partnering."
  }
];

export default function Testimonial() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right"); // ✅ added

  const prev = () => {
    setDirection("left"); // ✅ added
    setActive(active === 0 ? data.length - 1 : active - 1);
  };

  const next = () => {
    setDirection("right"); // ✅ added
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
              setDirection(i > active ? "right" : "left"); // ✅ added
              setActive(i);
            }}
          >
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>

      <h3>{data[active].name}</h3>
      <span>{data[active].role}</span>

      <div className="slider-area">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        {/* ✅ added direction class */}
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
              setDirection(i > active ? "right" : "left"); // ✅ added
              setActive(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}
