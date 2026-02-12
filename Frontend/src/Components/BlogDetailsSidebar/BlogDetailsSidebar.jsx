import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./BlogDetailsSidebar.css";

const BlogDetailsSidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await API_URL.get("/blogs");

      const published = res.data.filter(
        (blog) => blog.status === "Published"
      );

      setBlogs(published);
    };

    fetchBlogs();
  }, []);

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

        {blogs.slice(0, 3).map((blog) => (
          <div
            className="bd-recentPost"
            key={blog._id}
            onClick={() => navigate(`/blog/${blog._id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={`${IMAGE_BASE_URL}/${blog.image}`}
              alt={blog.title}
            />
            <div>
              <p>{blog.title}</p>
              <span>
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
<<<<<<< HEAD

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

=======
>>>>>>> 782b506e50cfc10244849d2e0babdb9d1f7c8385
    </div>
  );
};

export default BlogDetailsSidebar;