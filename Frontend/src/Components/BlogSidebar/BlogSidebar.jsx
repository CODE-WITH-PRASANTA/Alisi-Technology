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
<<<<<<< HEAD
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
=======
        ))}
>>>>>>> 782b506e50cfc10244849d2e0babdb9d1f7c8385
      </div>

    </div>
  );
};

export default BlogSidebar;