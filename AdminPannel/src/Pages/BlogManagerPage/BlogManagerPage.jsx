import React, { useEffect, useRef, useState } from "react";
import BlogForm from "../../Component/BlogForm";
import BlogTable from "../../Component/BlogTable";
import API_URL from "../../Api/Api";
import "./BlogManagerPage.css";

const BlogManagerPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [editBlog, setEditBlog] = useState(null);
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null);

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

  /* ================= DELETE BLOG ================= */
  const deleteBlog = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await API_URL.delete(`/blogs/${id}`);
      fetchBlogs();
    } catch (err) {
      console.error("DELETE BLOG ERROR:", err);
    }
  };

  /* ================= ADD NEW ================= */
  const handleAddNew = () => {
    setEditBlog(null);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="adm-blog-manager-container">
      {/* LEFT */}
      <div className="adm-blog-left-panel" ref={formRef}>
        <BlogForm
          editBlog={editBlog}
          setEditBlog={setEditBlog}
          refreshBlogs={fetchBlogs}
        />
      </div>

      {/* RIGHT */}
      <div className="adm-blog-right-panel">
        {/* TOP BAR */}
        <div className="adm-table-topbar">
          <h2 className="adm-table-heading">Manage Blog Posts</h2>
          <button className="adm-add-btn" onClick={handleAddNew}>
            + Add New Blog
          </button>
        </div>

        <BlogTable
          blogs={blogs}
          loading={loading}
          onEdit={setEditBlog}
          onDelete={deleteBlog}
        />
      </div>
    </div>
  );
};

export default BlogManagerPage;