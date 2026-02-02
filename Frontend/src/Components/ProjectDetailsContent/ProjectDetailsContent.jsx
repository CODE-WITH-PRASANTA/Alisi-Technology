import React from "react";
import "./ProjectDetailsContent.css";
import { FaSearch, FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import mainImg from "../../Assets/project-details.webp";
import g1 from "../../Assets/project-gallery-1.webp";
import g2 from "../../Assets/project-gallery-2.webp";
import g3 from "../../Assets/project-gallery-3.webp";

const ProjectDetailsContent = () => {
  return (
    <div className="projectContent">
      {/* Hero Image */}
      <div className="projectContent__image">
        <img src={mainImg} alt="project" />
      </div>

      {/* Title */}
      <h1 className="projectContent__title">
        Cloud Migration System: Transforming IT Infrastructure for Scalability.
      </h1>

      {/* Description */}
      <p className="projectContent__desc">
        Cloud migration has become a crucial strategy for businesses looking to
        enhance scalability, reduce operational costs, and improve performance.
        This case study explores how XYZ Retail successfully transitioned from
        on-premise infrastructure to a cloud-based system.
      </p>

      <p className="projectContent__desc">
        Maintaining physical servers and IT personnel was becoming expensive.
        Their infrastructure lacked the ability to scale quickly during seasonal
        peaks, resulting in missed opportunities.
      </p>

      {/* Strategy */}
      <h2 className="projectContent__subtitle">Cloud Migration Strategies</h2>

      <p className="projectContent__desc">
        The migration started with a full assessment of data, applications, and
        network dependencies to determine what could be migrated directly and
        what required re-architecture.
      </p>

      {/* Features */}
      <div className="projectContent__features">
        <ul>
          <li>
            <FaCheck /> Scalable IT Infrastructure
          </li>
          <li>
            <FaCheck /> High Data Security
          </li>
          <li>
            <FaCheck /> Disaster Recovery Solutions
          </li>
          <li>
            <FaCheck /> Flexible Storage Options
          </li>
        </ul>

        <ul>
          <li>
            <FaCheck /> Compliance and Support
          </li>
          <li>
            <FaCheck /> Reduced Hardware
          </li>
          <li>
            <FaCheck /> 24/7 Cloud Monitoring
          </li>
        </ul>
      </div>

      {/* Showcase */}
      <h2 className="projectContent__subtitle">
        Showcasing Excellence in IT Solutions
      </h2>

      <p className="projectContent__desc">
        Explore our diverse range of successful IT projects demonstrating
        innovation and top-notch results.
      </p>

      {/* Gallery */}
      <div className="projectContent__gallery">
        {[g1, g2, g3].map((img, i) => (
          <div className="projectContent__galleryItem" key={i}>
            <img src={img} alt="gallery" />
            <div className="projectContent__galleryOverlay">
              <FaSearch />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="projectContent__pagination">
        <button className="projectContent__navBtn">
          <FaArrowLeft /> Previous
        </button>

        <div className="projectContent__gridIcon">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <button className="projectContent__navBtn">
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsContent;
