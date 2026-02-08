import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./AboutTestimonial.css";

export default function Testimonial() {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState("right");

  /* ================= FETCH TESTIMONIALS ================= */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await API_URL.get("/testimonials");
        setData(res.data);
      } catch (err) {
        console.error("Failed to load testimonials", err);
      }
    };

    fetchTestimonials();
  }, []);

  if (!data.length) return null;

  /* ================= SLIDER CONTROLS ================= */
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
      {/* ================= AVATAR TABS ================= */}
      <div className="avatar-tabs">
        {data.map((item, i) => (
          <div
            key={item._id}
            className={`avatar ${active === i ? "active" : ""}`}
            onClick={() => {
              setDirection(i > active ? "right" : "left");
              setActive(i);
            }}
          >
            <img
              src={
                item.image
                  ? `${IMAGE_BASE_URL}/${item.image}`
                  : "https://via.placeholder.com/80"
              }
              alt={item.name}
              onError={(e) =>
                (e.target.src = "https://via.placeholder.com/80")
              }
            />
          </div>
        ))}
      </div>

      {/* ================= NAME & ROLE ================= */}
      <h3>{data[active].name}</h3>
      <span>{data[active].designation}</span>

      {/* ================= SLIDER ================= */}
      <div className="slider-area">
        <button className="arrow left" onClick={prev}>
          ‹
        </button>

        <div key={active} className={`card slide-${direction}`}>
          <div className="stars">
            {"★".repeat(data[active].rating || 5)}
          </div>
          <p>{data[active].message}</p>
        </div>

        <button className="arrow right" onClick={next}>
          ›
        </button>
      </div>

      {/* ================= DOTS ================= */}
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
