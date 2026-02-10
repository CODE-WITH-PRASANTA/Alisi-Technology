import React, { useEffect, useRef, useState } from "react";
import "./HomeRecentProjects.css";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";

export default function RecentProjects() {
  const [projects, setProjects] = useState([]);
  const [index, setIndex] = useState(1);
  const trackRef = useRef(null);

  const isMobile = window.innerWidth < 640;
  const cardsPerPage = isMobile ? 1 : 3;

  /* ================= FETCH PROJECTS ================= */
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await API_URL.get("/projects");
        setProjects(res.data.projects || []);
      } catch (err) {
        console.error("FETCH PROJECTS ERROR:", err);
      }
    };

    fetchProjects();
  }, []);

  const pages = Math.ceil(projects.length / cardsPerPage);

  /* GROUP PROJECTS */
  const grouped = [];
  for (let i = 0; i < projects.length; i += cardsPerPage) {
    grouped.push(projects.slice(i, i + cardsPerPage));
  }

  /* CLONE FIRST + LAST */
  const slides =
    grouped.length > 1
      ? [grouped[grouped.length - 1], ...grouped, grouped[0]]
      : grouped;

  /* AUTO SLIDE */
  useEffect(() => {
    if (slides.length <= 1) return;

    const timer = setInterval(() => {
      setIndex((i) => i + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  /* INFINITE RESET */
  useEffect(() => {
    if (!trackRef.current || slides.length <= 1) return;

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
      {/* ✅ SAFE CONDITIONAL RENDER */}
      {!projects.length ? null : (
        <>
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
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((group, i) => (
                <div className="slide-group" key={i}>
                  {group.map((item) => (
                    <div className="project-slide" key={item._id}>
                      <div className="project-card">
                        <img
                          src={`${IMAGE_BASE_URL}/${item.projectImg}`}
                          alt={item.title}
                        />

                        <div className="overlay">
                          <span>{item.tag || "Solution"}</span>
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
        </>
      )}
    </section>
  );
}