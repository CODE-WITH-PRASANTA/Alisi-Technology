import React, { useEffect, useRef, useState } from "react";
import "./HomeRecentProjects.css";

import p1 from "../../Assets/project-1.webp";
import p2 from "../../Assets/project-2.webp";
import p3 from "../../Assets/project-3.webp";
import p4 from "../../Assets/project-4.webp";

const projects = [
  { img: p1, tag: "Solution", title: "Mobile App Development" },
  { img: p2, tag: "Solution", title: "Business Transformation" },
  { img: p3, tag: "Solution", title: "Cloud Migration System" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
  { img: p4, tag: "Solution", title: "Digital Growth Strategy" },
];

export default function RecentProjects() {
  const isMobile = window.innerWidth < 640;
  const cardsPerPage = isMobile ? 1 : 3;

  const pages = Math.ceil(projects.length / cardsPerPage);

  /* GROUP PROJECTS */
  const grouped = [];
  for (let i = 0; i < projects.length; i += cardsPerPage) {
    grouped.push(projects.slice(i, i + cardsPerPage));
  }

  /* CLONE FIRST + LAST */
  const slides = [
    grouped[grouped.length - 1],
    ...grouped,
    grouped[0],
  ];

  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);

  /* AUTO SLIDE */
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  /* INFINITE RESET */
  useEffect(() => {
    if (!trackRef.current) return;

    if (index === slides.length - 1) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(1);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        trackRef.current.style.transition = "none";
        setIndex(slides.length - 2);
      }, 600);
    }
  }, [index, slides.length]);

  /* RESTORE TRANSITION */
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transition = "0.6s ease";
    }
  }, [index]);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  const realPage =
    index === 0
      ? pages - 1
      : index === slides.length - 1
      ? 0
      : index - 1;

  return (
    <section className="projects">
      {/* HEADER */}
      <div className="projects-header">
        <div>
          <span>[ RECENT PROJECTS ]</span>
          <h2>
            Breaking Boundaries, <br /> Building Dreams.
          </h2>
        </div>

        <div className="nav-btns">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="slider-wrapper">
        <div
          ref={trackRef}
          className="slider-track"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {slides.map((group, i) => (
            <div className="slide-group" key={i}>
              {group.map((item, j) => (
                <div className="project-slide" key={j}>
                  <div className="project-card">
                    <img src={item.img} alt="" />

                    <div className="overlay">
                      <span>{item.tag}</span>
                      <h3>{item.title}</h3>
                      <div className="arrow">↗</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {Array.from({ length: pages }).map((_, i) => (
          <span
            key={i}
            className={i === realPage ? "dot active" : "dot"}
            onClick={() => setIndex(i + 1)}
          />
        ))}
      </div>
    </section>
  );
}
