import React from "react";
import "./BlogDetails.css";

import BlogDetailsBreadcrum from "../../Components/BolgDetailsBreadcrum/BolgDetailsBreadcrum";
import BlogDetailsContent from "../../Components/BlogDetailsContent/BlogDetailsContent";
import MigrationSection from "../../Components/MigrationSection/MigrationSection";
import BlogDetailsSidebar from "../../Components/BlogDetailsSidebar/BlogDetailsSidebar";
import ConclusionSection from "../../Components/ConclusionSection/ConclusionSection";
import CommentForm from "../../Components/CommentForm/CommentForm";

const BlogDetails = () => {
  return (
    <section className="blogDetails">

      {/* Breadcrumb */}
      <BlogDetailsBreadcrum />

      <div className="blogDetails__container">

        {/* Left Content */}
        <div className="blogDetails__left">
          <BlogDetailsContent />
          <MigrationSection/>
          <ConclusionSection/>
          <CommentForm/>
        </div>

        {/* Right Sidebar */}
        <div className="blogDetails__right">
          <BlogDetailsSidebar />
        </div>

      </div>
    </section>
  );
};

export default BlogDetails;
