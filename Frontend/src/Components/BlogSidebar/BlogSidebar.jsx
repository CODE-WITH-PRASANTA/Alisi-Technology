import React from "react";
import "./BlogSidebar.css";

import blog1 from "../../Assets/blog-post-1.webp";
import blog2 from "../../Assets/blog-post-2.webp";
import blog3 from "../../Assets/blog-post-3.webp";

import { FiSearch } from "react-icons/fi";

const BlogSidebar = () => {
  return (
    <div className="blogSidebar">

      {/* SEARCH */}
      <div className="sidebarCard">
        <h3>Search Articles</h3>

        <div className="searchBox">
          <input placeholder="Search blog posts..." />
          <FiSearch />
        </div>
      </div>

      {/* RECENT POSTS */}
      <div className="sidebarCard">
        <h3>Recent Insights</h3>

        <div className="recentPost">
          <img src={blog1} alt="Cloud migration strategies by Alisil Technology" />
          <div>
            <p>Practical Cloud Migration Strategies for Modern Businesses</p>
            <span>12 JAN, 2026</span>
          </div>
        </div>

        <div className="recentPost">
          <img src={blog2} alt="Cybersecurity best practices for enterprises" />
          <div>
            <p>Essential Cybersecurity Practices for Digital Enterprises</p>
            <span>05 JAN, 2026</span>
          </div>
        </div>

        <div className="recentPost">
          <img src={blog3} alt="Digital engineering automation solutions" />
          <div>
            <p>How Digital Engineering Drives Business Automation</p>
            <span>28 DEC, 2025</span>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="sidebarCard">
        <h3>Topics</h3>

        <div className="categoryItem">
          <span>IoT & Automation</span>
          <span>(03)</span>
        </div>

        <div className="categoryItem">
          <span>Cybersecurity</span>
          <span>(04)</span>
        </div>

        <div className="categoryItem">
          <span>Cloud Computing</span>
          <span>(03)</span>
        </div>

        <div className="categoryItem">
          <span>Digital Engineering</span>
          <span>(02)</span>
        </div>

        <div className="categoryItem">
          <span>Data Analytics</span>
          <span>(02)</span>
        </div>

        <div className="categoryItem">
          <span>IT Solutions</span>
          <span>(03)</span>
        </div>
      </div>

      {/* TAGS */}
      <div className="sidebarCard">
        <h3>Popular Tags</h3>

        <div className="tagWrap">
          <span>IoT</span>
          <span>Cloud</span>
          <span>Automation</span>
          <span>Digital</span>
          <span>Engineering</span>
          <span>Analytics</span>
          <span>Software</span>
          <span>Technology</span>
        </div>
      </div>

    </div>
  );
};

export default BlogSidebar;
