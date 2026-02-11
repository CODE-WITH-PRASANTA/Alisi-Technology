import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API_URL from "../../Api/Api";

import BlogDetailsBreadcrum from "../../Components/BolgDetailsBreadcrum/BolgDetailsBreadcrum";
import BlogDetailsContent from "../../Components/BlogDetailsContent/BlogDetailsContent";
import MigrationSection from "../../Components/MigrationSection/MigrationSection";
import ConclusionSection from "../../Components/ConclusionSection/ConclusionSection";
import CommentForm from "../../Components/CommentForm/CommentForm";
import BlogDetailsSidebar from "../../Components/BlogDetailsSidebar/BlogDetailsSidebar";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API_URL.get(`/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <section className="blogDetails">
      <BlogDetailsBreadcrum title={blog.title} />

      <div className="blogDetails__container">
        <div className="blogDetails__left">
          <BlogDetailsContent blog={blog} />
          <MigrationSection />
          <ConclusionSection />
          <CommentForm />
        </div>

        <div className="blogDetails__right">
          <BlogDetailsSidebar />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;