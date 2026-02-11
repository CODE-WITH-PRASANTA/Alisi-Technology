import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./BlogSidebar.css";

const BlogSidebar = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await API_URL.get("/blogs");
        const published = res.data.filter(
          (blog) => blog.status === "Published"
        );
        setBlogs(published);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="blogSidebar">

      {/* SEARCH */}
      <div className="sidebarCard">
        <h3>Search Articles</h3>

        <div className="searchBox">
          <input
            placeholder="Search blog posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch />
        </div>
      </div>

      {/* RECENT POSTS */}
      <div className="sidebarCard">
        <h3>Recent Insights</h3>

        {filteredBlogs.slice(0, 3).map((blog) => (
          <div
            className="recentPost"
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

    </div>
  );
};

export default BlogSidebar;