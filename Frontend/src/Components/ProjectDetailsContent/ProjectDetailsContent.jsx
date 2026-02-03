import React from "react";
import "./ProjectDetailsContent.css";
import { FaSearch, FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BASE_URL = "http://localhost:5000"; // backend url

const ProjectDetailsContent = ({ project }) => {
  if (!project) return null;

  return (
    <div className="projectContent">
      {/* Hero Image */}
      <div className="projectContent__image">
        <img
          src={`${BASE_URL}/${project.projectImg}`}
          alt={project.title}
        />
      </div>

      {/* Title */}
      <h1 className="projectContent__title">
        {project.title}
      </h1>

      {/* Description */}
      <p className="projectContent__desc">
        {project.content}
      </p>

      {/* Quotes */}
      {project.quotes && (
        <p className="projectContent__desc">
          {project.quotes}
        </p>
      )}

      {/* Strategy (optional static section) */}
      <h2 className="projectContent__subtitle">Project Highlights</h2>

      <div className="projectContent__features">
        <ul>
          <li><FaCheck /> Scalable Architecture</li>
          <li><FaCheck /> Secure Implementation</li>
          <li><FaCheck /> Optimized Performance</li>
        </ul>

        <ul>
          <li><FaCheck /> Industry Best Practices</li>
          <li><FaCheck /> Client-Centric Approach</li>
          <li><FaCheck /> On-Time Delivery</li>
        </ul>
      </div>

      {/* Gallery */}
      {project.galleryImg?.length > 0 && (
        <>
          <h2 className="projectContent__subtitle">
            Project Gallery
          </h2>

          <div className="projectContent__gallery">
            {project.galleryImg.map((img, i) => (
              <div className="projectContent__galleryItem" key={i}>
                <img src={`${BASE_URL}/${img}`} alt="gallery" />
                <div className="projectContent__galleryOverlay">
                  <FaSearch />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Pagination (static for now) */}
      <div className="projectContent__pagination">
        <button className="projectContent__navBtn">
          <FaArrowLeft /> Previous
        </button>

        <div className="projectContent__gridIcon">
          <span></span><span></span><span></span><span></span>
        </div>

        <button className="projectContent__navBtn">
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
