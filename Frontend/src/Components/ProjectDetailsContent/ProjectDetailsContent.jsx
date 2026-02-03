import React, { useState, useEffect } from "react";
import "./ProjectDetailsContent.css";
import { FaSearch, FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BASE_URL = "http://localhost:5000";
const IMAGES_PER_PAGE = 3;

const ProjectDetailsContent = ({ project }) => {
  if (!project) return null;

  const gallery = project.galleryImg || [];
  const totalPages = Math.ceil(gallery.length / IMAGES_PER_PAGE);

  const [page, setPage] = useState(1);
  const [animate, setAnimate] = useState(true);

  const startIndex = (page - 1) * IMAGES_PER_PAGE;
  const currentImages = gallery.slice(
    startIndex,
    startIndex + IMAGES_PER_PAGE
  );

  const changePage = (newPage) => {
    setAnimate(false);
    setTimeout(() => {
      setPage(newPage);
      setAnimate(true);
    }, 200);
  };

  return (
    <div className="projectContent">

      {/* HERO IMAGE */}
      <div className="projectContent__image">
        <img src={`${BASE_URL}/${project.projectImg}`} alt={project.title} />
      </div>

      {/* TITLE */}
      <h1 className="projectContent__title">{project.title}</h1>

      {/* DESCRIPTION */}
      <p className="projectContent__desc">{project.content}</p>

      {/* QUOTES */}
      {project.quotes && (
        <blockquote className="projectContent__quote">
          {project.quotes}
        </blockquote>
      )}

      {/* HIGHLIGHTS */}
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

      {/* GALLERY */}
      {gallery.length > 0 && (
        <>
          <h2 className="projectContent__subtitle">Project Gallery</h2>

          <div className={`projectContent__gallery ${animate ? "show" : "hide"}`}>
            {currentImages.map((img, i) => (
              <div className="projectContent__galleryItem" key={i}>
                <img src={`${BASE_URL}/${img}`} alt="gallery" />
                <div className="projectContent__galleryOverlay">
                  <FaSearch />
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="projectContent__pagination">
              <button
                className="projectContent__navBtn"
                disabled={page === 1}
                onClick={() => changePage(page - 1)}
              >
                <FaArrowLeft /> Previous
              </button>

              <span className="projectContent__pageInfo">
                Page {page} of {totalPages}
              </span>

              <button
                className="projectContent__navBtn"
                disabled={page === totalPages}
                onClick={() => changePage(page + 1)}
              >
                Next <FaArrowRight />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectDetailsContent;
