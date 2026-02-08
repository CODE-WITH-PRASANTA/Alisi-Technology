import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./AboutTeam.css";

const AboutTeam = () => {
  const [teamData, setTeamData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const scrollRef = useRef(null);

  const isMobile = window.innerWidth <= 768;

  /* ================= FETCH TEAM ================= */
  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const res = await API_URL.get("/team"); // /api/team
        setTeamData(res.data);
      } catch (err) {
        console.error("Team fetch error:", err);
      }
    };
    fetchTeam();
  }, []);

  /* ================= DESKTOP SCROLL ================= */
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  /* ================= MOBILE SCROLL → DOT SYNC ================= */
  const handleScroll = () => {
    if (!isMobile) return;

    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;
    const index = Math.round(container.scrollLeft / cardWidth);

    setCurrentPage(index);
  };

  /* ================= DOT CLICK ================= */
  const handleDotClick = (index) => {
    const container = scrollRef.current;
    const cardWidth = container.offsetWidth;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setCurrentPage(index);
  };

  return (
    <section className="tek-team-section">
      {/* ================= HEADER ================= */}
      <div className="tek-team-header">
        <div className="tek-team-left">
          <span className="tek-team-tag">[ MEET OUR TEAM ]</span>
          <h3 className="tek-team-title">
            Creative Minds Behind <br /> our Team.
          </h3>
        </div>

        <div className="tek-team-middle">
          <p>Our teams are customized to meet your unique ideas.</p>
        </div>

        <div className="tek-team-right">
          <button className="tek-team-more-btn">
            <span className="tek-team-btn-text">More Member</span>
            <span className="tek-team-arrow-circle">
              <FaArrowRight className="tek-team-arrow-icon" />
            </span>
          </button>
        </div>
      </div>

      {/* ================= TEAM SECTION ================= */}
      <div className="tek-team-scroll-container">
        {!isMobile && (
          <button className="tek-scroll-btn left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>
        )}

        <div
          className="tek-team-cards"
          ref={scrollRef}
          onScroll={handleScroll}
        >
          {teamData.map((item) => (
            <div className="tek-team-card" key={item._id}>
              <div className="tek-team-img-box">
                <img
                  src={`${IMAGE_BASE_URL}/${item.photo}`}
                  alt={item.name}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/300x300")
                  }
                />

                <div className="tek-team-social-wrap">
                  <div className="tek-team-share-btn">
                    <FaShareAlt />
                  </div>

                  <div className="tek-team-social-icons">
                    {item.facebook && (
                      <a href={item.facebook} target="_blank" rel="noreferrer">
                        <FaFacebookF />
                      </a>
                    )}
                    {item.instagram && (
                      <a href={item.instagram} target="_blank" rel="noreferrer">
                        <FaInstagram />
                      </a>
                    )}
                    {item.linkedin && (
                      <a href={item.linkedin} target="_blank" rel="noreferrer">
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="tek-team-info">
                <h3>{item.name}</h3>
                <span>{item.designation}</span>
              </div>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="tek-scroll-btn right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        )}
      </div>

      {/* ================= MOBILE PAGINATION ================= */}
      {isMobile && (
        <div className="tek-team-pagination">
          {teamData.map((_, index) => (
            <span
              key={index}
              className={`tek-dot ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AboutTeam;
