import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../Api/Api";

/* ================= SERVICES LIST ================= */
const SERVICES = [
  
  "BPO Services",
  "KPO Services",
  "Cloud Computing",
  "Cognitive Operations",
  "Consulting",
  "Enterprise Solutions",
  "IoT & Digital Engineering",
  "Network Solutions",
  "Sustainability Services",
];

const BlogForm = ({ editBlog, setEditBlog, refreshBlogs }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [designation, setDesignation] = useState("");
  const [category, setCategory] = useState("");
  const [service, setService] = useState("");
  const [tags, setTags] = useState([]); // ✅ Array based tag system
  const [tagInput, setTagInput] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  /* ================= TAG HANDLERS ================= */
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();

      const newTag = tagInput.trim();

      if (!tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }

      setTagInput("");
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  /* ================= EDIT MODE ================= */
  useEffect(() => {
    if (editBlog) {
      setPreview(`${IMAGE_BASE_URL}/${editBlog.image}`);
      setTitle(editBlog.title || "");
      setDescription(editBlog.description || "");
      setAuthor(editBlog.author || "");
      setDesignation(editBlog.designation || "");
      setCategory(editBlog.category || "");
      setService(editBlog.service || "");
      setTags(editBlog.tags || []); // ✅ Proper array
      setContent(editBlog.content || "");
    }
  }, [editBlog]);

  /* ================= IMAGE HANDLER ================= */
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  /* ================= RESET FORM ================= */
  const resetForm = () => {
    setImage(null);
    setPreview("");
    setTitle("");
    setDescription("");
    setAuthor("");
    setDesignation("");
    setCategory("");
    setService("");
    setTags([]);
    setTagInput("");
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
    formData.append("service", service);
    formData.append("tags", JSON.stringify(tags)); // ✅ Send array properly
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

      {/* IMAGE */}
      <div className="adm-input-group">
        <label>Upload Image</label>
        <input type="file" onChange={handleImage} />
        {preview && <img src={preview} className="adm-image-preview" alt="preview" />}
      </div>

      {/* TITLE */}
      <div className="adm-input-group">
        <label>Blog Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>

      {/* DESCRIPTION */}
      <div className="adm-input-group">
        <label>Blog Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>

      {/* AUTHOR */}
      <div className="adm-input-group">
        <label>Author Name</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>

      {/* DESIGNATION */}
      <div className="adm-input-group">
        <label>Author Designation</label>
        <input value={designation} onChange={(e) => setDesignation(e.target.value)} />
      </div>

      {/* CATEGORY */}
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

      {/* SERVICE */}
      <div className="adm-input-group">
        <label>Related Service</label>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Select Service</option>
          {SERVICES.map((srv, index) => (
            <option key={index} value={srv}>
              {srv}
            </option>
          ))}
        </select>
      </div>

      {/* TAGS */}
      <div className="adm-input-group">
        <label>Tags</label>
        <div className="adm-tags-input-wrapper">
          {tags.map((tag, index) => (
            <div key={index} className="adm-tag-chip">
              {tag}
              <span onClick={() => removeTag(index)}>×</span>
            </div>
          ))}

          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="Type tag and press Enter"
          />
        </div>
      </div>

      {/* CONTENT */}
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