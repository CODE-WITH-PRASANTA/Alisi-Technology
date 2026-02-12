import React from "react";
import "./BlogDetailsSidebar.css";

import blog1 from "../../Assets/blog-post-1.webp";
import blog2 from "../../Assets/blog-post-2.webp";
import blog3 from "../../Assets/blog-post-3.webp";

import { FiSearch } from "react-icons/fi";

const BlogSidebar = () => {
  return (
    <div className="bd-blogSidebar">

      {/* SEARCH */}
      <div className="bd-sidebarCard">
        <h3>Search here</h3>

        <div className="searchBox">
          <input placeholder="Search here" />
          <FiSearch />
        </div>
      </div>

      {/* RECENT POSTS */}
      <div className="bd-sidebarCard">
        <h3>Recent Posts</h3>

        <div className="bd-recentPost">
          <img src={blog1} alt="" />
          <div>
            <p>How to Successfully Migrate Your Business</p>
            <span>08 NOV, 2025</span>
          </div>
        </div>

        <div className="bd-recentPost">
          <img src={blog2} alt="" />
          <div>
            <p>Building a Stronger Workforce with IT Training</p>
            <span>08 NOV, 2025</span>
          </div>
        </div>

        <div className="bd-recentPost">
          <img src={blog3} alt="" />
          <div>
            <p>Optimizing Your IT Budget: Tips and Strategies</p>
            <span>08 NOV, 2025</span>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bd-sidebarCard">
        <h3>Categories</h3>

        <div className="bd-categoryItem">
          <span>Automation</span>
          <span>(02)</span>
        </div>

        

        <div className="bd-categoryItem">
          <span>Data Analytics</span>
          <span>(02)</span>
        </div>

        <div className="bd-categoryItem">
          <span>Development</span>
          <span>(02)</span>
        </div>

        <div className="bd-categoryItem">
          <span>Innovation</span>
          <span>(01)</span>
        </div>

        <div className="bd-categoryItem">
          <span>Technology</span>
          <span>(02)</span>
        </div>
      </div>

      {/* TAGS */}
      <div className="bd-sidebarCard">
        <h3>Tags</h3>

        <div className="tagWrap">
          <span>Cloud</span>
          <span>Data</span>
          <span>Drive</span>
          <span>Focus</span>
          <span>Optimize</span>
          <span>Security</span>
          <span>Software</span>
          <span>Solution</span>
          <span>Tech</span>
        </div>
      </div>

    </div>
  );
};

export default BlogSidebar;
