import React from "react";
import "./Blog.css";

import BlogBreadcrum from "../../Components/BlogBreadcrum/BlogBreadcrum";
import BlogContent from "../../Components/BlogContent/BlogContent";
import BlogSidebar from "../../Components/BlogSidebar/BlogSidebar";

const Blog = () => {
  return (
    <section className="blog">

      {/* Breadcrumb */}
      <BlogBreadcrum />

      <div className="blog__container">

        {/* Left Content */}
        <div className="blog__left">
          <BlogContent />
        </div>

        {/* Right Sidebar */}
        <div className="blog__right">
          <BlogSidebar />
        </div>

      </div>
    </section>
  );
};

export default Blog;
