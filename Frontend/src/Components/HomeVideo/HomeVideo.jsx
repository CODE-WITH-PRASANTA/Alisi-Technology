import React from "react";
import "./HomeVideo.css";
import heroImg from "../../Assets/video-bg.webp"; // adjust path

export default function VideoHero() {
  return (
    <div className="video-hero">
      <img src={heroImg} alt="hero" className="hero-img" />

      <div className="hero-overlay">
        <div className="video-center">
          {/* Waves */}
          <span className="wave wave1"></span>
          <span className="wave wave2"></span>
          <span className="wave wave3"></span>

          {/* Play Button */}
          <button className="play-btn">▶</button>
        </div>
      </div>
    </div>
  );
}
