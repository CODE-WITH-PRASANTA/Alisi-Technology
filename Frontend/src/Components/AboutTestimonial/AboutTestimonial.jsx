import React, { useState } from "react";
import "./AboutTestimonial.css";

import img1 from "../../Assets/testimonial-client-1.webp";
import img2 from "../../Assets/teastmonial-client-2.webp";
import img3 from "../../Assets/testimonial-client-3.webp";

const data = [
  {
    name: "Ralph Edwards",
    role: "Operations Director",
    img: img2,
    text:
      "Alisil Technology delivered a complete IoT and digital engineering solution that significantly improved our operational efficiency. Their technical expertise, clear communication, and reliable support made the entire project smooth and successful. We now have real-time visibility into our systems and better control over our processes."
  },
  {
    name: "Guy Hawkins",
    role: "Managing Partner",
    img: img1,
    text:
      "Partnering with Alisil Technology was one of the best decisions for our digital transformation journey. Their cloud solutions and custom software development helped us modernize our infrastructure while improving performance and security. The team was professional, responsive, and truly understood our business needs."
  },
  {
    name: "Mevon Lane",
    role: "Chief Technology Officer",
    img: img3,
    text:
      "The team at Alisil Technology provided outstanding digital engineering and automation solutions for our organization. Their innovative approach, strong technical knowledge, and commitment to quality delivered results beyond our expectations. We highly recommend them for IoT and advanced technology services."
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
