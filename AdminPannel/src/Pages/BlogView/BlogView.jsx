import React, { useEffect, useState } from "react";
import "./BlogView.css";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import { useNavigate } from "react-router-dom";

const BlogView = () => {
  const [blogs, setBlogs] = useState([]);
  const [view, setView] = useState("grid");
  const [openMenu, setOpenMenu] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* ================= STATUS NORMALIZER ================= */
  const getStatus = (blog) => blog.status || "Draft";

  /* ================= FETCH BLOGS ================= */
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await API_URL.get("/blogs");
      setBlogs(res.data);
    } catch (err) {
      console.error("FETCH BLOGS ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* ================= ACTION HANDLER ================= */
  const handleAction = async (action, blog) => {
    setOpenMenu(null);

    switch (action) {
      case "view":
        navigate(`/blogs/${blog._id}`);
        break;

      case "edit":
        navigate(`/admin/blogs/edit/${blog._id}`);
        break;

      case "toggle":
        await API_URL.put(`/blogs/${blog._id}`, {
          status: getStatus(blog) === "Published" ? "Draft" : "Published",
        });
        fetchBlogs();
        break;

      case "delete":
        if (!window.confirm("Delete this blog?")) return;
        await API_URL.delete(`/blogs/${blog._id}`);
        fetchBlogs();
        break;

      default:
        break;
    }
  };

  return (
    <section className="blog-preview">
      <div className="blog-container">
        <h2 className="blog-preview-title">Blog Preview</h2>

        {/* VIEW TOGGLE */}
        <div className="blog-toggle-wrap">
          <button
            className={view === "grid" ? "active" : ""}
            onClick={() => setView("grid")}
          >
            ⬛ Grid View
          </button>
          <button
            className={view === "list" ? "active" : ""}
            onClick={() => setView("list")}
          >
            ☰ List View
          </button>
        </div>

        {loading && <p className="loading">Loading blogs...</p>}

        {/* ================= GRID VIEW ================= */}
        {view === "grid" && !loading && (
          <div className="blog-grid">
            {blogs.map((blog) => {
              const status = getStatus(blog);

              return (
                <div className="blog-card" key={blog._id}>
                  <div className="blog-card-media">
                    <img
                      src={`${IMAGE_BASE_URL}/${blog.image}`}
                      alt={blog.title}
                    />

                    <button
                      className="dot-btn"
                      onClick={() =>
                        setOpenMenu(openMenu === blog._id ? null : blog._id)
                      }
                    >
                      ⋮
                    </button>

                    {openMenu === blog._id && (
                      <div className="action-menu">
                        <button onClick={() => handleAction("view", blog)}>
                          👁 View
                        </button>
                        <button onClick={() => handleAction("edit", blog)}>
                          ✏ Edit
                        </button>
                        <button onClick={() => handleAction("toggle", blog)}>
                          {status === "Published"
                            ? "🚫 Unpublish"
                            : "✅ Publish"}
                        </button>
                        <button
                          className="danger"
                          onClick={() => handleAction("delete", blog)}
                        >
                          🗑 Delete
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="blog-card-body">
                    <span className="category">{blog.category}</span>
                    <h3>{blog.title}</h3>
                    <p className="author">
                      {blog.author} • {blog.designation}
                    </p>

                    <div className="meta-row">
                      <span className="date">
                        {new Date(blog.createdAt).toLocaleDateString()}
                      </span>
                      <span
                        className={`status ${
                          status === "Published" ? "published" : "draft"
                        }`}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ================= LIST VIEW ================= */}
        {view === "list" && !loading && (
          <div className="blog-list">
            <div className="blog-list-head">
              <div>SL</div>
              <div>Title</div>
              <div>Author</div>
              <div>Date</div>
              <div>Status</div>
              <div>Actions</div>
            </div>

            {blogs.map((blog, i) => {
              const status = getStatus(blog);

              return (
                <div className="blog-list-row" key={blog._id}>
                  <div>{i + 1}</div>
                  <div className="title">{blog.title}</div>
                  <div>
                    {blog.author}
                    <br />
                    <small>{blog.designation}</small>
                  </div>
                  <div>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <div>
                    <span
                      className={`status ${
                        status === "Published" ? "published" : "draft"
                      }`}
                    >
                      {status}
                    </span>
                  </div>
                  <div className="list-actions">
                    <button onClick={() => handleAction("view", blog)}>
                      View
                    </button>
                    <button onClick={() => handleAction("edit", blog)}>
                      Edit
                    </button>
                    <button
                      className="danger"
                      onClick={() => handleAction("delete", blog)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogView;