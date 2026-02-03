import React from "react";
import "./BlogView.css";

import blogMain from "../../Assets/a5.webp";
import blogSide1 from "../../Assets/a2.webp";
import blogSide2 from "../../Assets/a3.webp";

import grid1 from "../../Assets/a4.webp";
import grid2 from "../../Assets/a1.webp";
import grid3 from "../../Assets/a6.webp";
import grid4 from "../../Assets/a7.webp";

const BlogView = () => {
  return (
    <section className="bv-main-section">

      <h2 className="bv-main-heading">Blog View</h2>

      <div className="bv-top-layout">

        {/* LEFT BIG BLOG */}
        <div className="bv-feature-card">
          <img src={blogMain} alt="blog" />

          <div className="bv-feature-overlay">
            <span className="bv-date">25 July 2024</span>

            <h3>
              Accusamus et iusto odio dignissimos ducimus qui blanditiis.
            </h3>

            <div className="bv-meta">
              <span>Mark Jecno</span>
              <span>02 Hits</span>
              <span>598 Comments</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE BLOGS */}
        <div className="bv-side-wrapper">

          <div className="bv-side-card">
            <img src={blogSide1} alt="blog" />

            <div className="bv-side-content">
              <span className="bv-side-date">02 January 2024</span>
              <h4>Perspiciatis unde omnis iste natus</h4>
              <p>
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

          <div className="bv-side-card">
            <img src={blogSide2} alt="blog" />

            <div className="bv-side-content">
              <span className="bv-side-date">03 January 2024</span>
              <h4>Perspiciatis unde omnis iste natus</h4>
              <p>
                inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* GRID BLOGS */}

      <div className="bv-grid-wrapper">

        <div className="bv-grid-card">
          <img src={grid1} alt="blog" />
          <h5>A huge part of it is the incomparable beauty</h5>
        </div>

        <div className="bv-grid-card">
          <img src={grid2} alt="blog" />
          <h5>A huge part of it is the incomparable beauty</h5>
        </div>

        <div className="bv-grid-card">
          <img src={grid3} alt="blog" />
          <h5>A huge part of it is the incomparable beauty</h5>
        </div>

        <div className="bv-grid-card">
          <img src={grid4} alt="blog" />
          <h5>A huge part of it is the incomparable beauty</h5>
        </div>

      </div>

    </section>
  );
};

export default BlogView;
