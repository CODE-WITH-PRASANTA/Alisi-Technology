import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import "./BlogContent.css";

const BlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchBlogs = async () => {
    try {
      const res = await API_URL.get("/blogs");
      
      // Only show published blogs on frontend
      const publishedBlogs = res.data.filter(
        (blog) => blog.status === "Published"
      );

      setBlogs(publishedBlogs);
    } catch (err) {
      console.error("FETCH BLOG ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="blogContent">
      {blogs.map((blog) => (
        <div className="blogItem" key={blog._id}>
          {/* IMAGE */}
          <div className="blogImage">
            <img
              src={`${IMAGE_BASE_URL}/${blog.image}`}
              alt={blog.title}
            />

            <div className="dateBadge">
              <strong>
                {new Date(blog.createdAt).getDate()}
              </strong>
              <span>
                {new Date(blog.createdAt)
                  .toLocaleString("default", { month: "short" })
                  .toUpperCase()}
              </span>
            </div>
          </div>

          {/* META */}
          <div className="blogMeta">
            <span className="category">{blog.category}</span>
            <span className="author">
              By {blog.author}
            </span>
          </div>

          {/* CONTENT */}
          <h2>{blog.title}</h2>

          <p>{blog.description}</p>

          <button
            className="readBtn"
            onClick={() => navigate(`/blog/${blog._id}`)}
          >
            Read More <span>↗</span>
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogContent;