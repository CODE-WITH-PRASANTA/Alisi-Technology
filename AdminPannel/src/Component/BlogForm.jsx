import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../Api/Api";

const BlogForm = ({ editBlog, setEditBlog, refreshBlogs }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [designation, setDesignation] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= EDIT MODE ================= */
  useEffect(() => {
    if (editBlog) {
      setPreview(`${IMAGE_BASE_URL}/${editBlog.image}`);
      setTitle(editBlog.title);
      setDescription(editBlog.description);
      setAuthor(editBlog.author);
      setDesignation(editBlog.designation);
      setCategory(editBlog.category);
      setContent(editBlog.content);
    }
  }, [editBlog]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const resetForm = () => {
    setImage(null);
    setPreview("");
    setTitle("");
    setDescription("");
    setAuthor("");
    setDesignation("");
    setCategory("");
    setContent("");
    setEditBlog(null);
  };

  /* ================= SUBMIT ================= */
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (image) formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("author", author);
    formData.append("designation", designation);
    formData.append("category", category);
    formData.append("content", content);

    try {
      setLoading(true);

      if (editBlog) {
        await API_URL.put(`/blogs/${editBlog._id}`, formData);
      } else {
        await API_URL.post("/blogs", formData);
      }

      refreshBlogs();
      resetForm();
    } catch (err) {
      console.error("BLOG SUBMIT ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="adm-blog-form-box" onSubmit={submitHandler}>
      <h2 className="adm-blog-form-heading">
        {editBlog ? "Edit Blog Post" : "Create Blog Post"}
      </h2>

      <div className="adm-input-group">
        <label>Upload Image</label>
        <input type="file" onChange={handleImage} />
        {preview && <img src={preview} className="adm-image-preview" />}
      </div>

      <div className="adm-input-group">
        <label>Blog Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      <div className="adm-input-group">
        <label>Blog Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      <div className="adm-input-group">
        <label>Author Name</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      <div className="adm-input-group">
        <label>Author Designation</label>
        <input value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>

      <div className="adm-input-group">
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option>Technology</option>
          <option>Cloud Services</option>
          <option>Security</option>
          <option>DevOps & Automation</option>
          <option>Tech News</option>
        </select>
      </div>

      <div className="adm-input-group">
        <label>Blog Content</label>
        <textarea
          className="adm-content-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button className="adm-submit-btn" disabled={loading}>
        {loading ? "Saving..." : editBlog ? "Update Blog" : "Publish Blog"}
      </button>
    </form>
  );
};

export default BlogForm;