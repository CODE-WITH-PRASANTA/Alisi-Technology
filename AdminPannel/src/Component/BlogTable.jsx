import React from "react";
import { IMAGE_BASE_URL } from "../Api/Api";

const BlogTable = ({ blogs = [], loading, onEdit, onDelete }) => {
  return (
    <div className="adm-blog-table-box">
      <div className="adm-table-scroll-area">
        <table className="adm-blog-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Service</th> {/* ✅ Added */}
              <th>Author</th>
              <th>Designation</th>
              <th>Tags</th> {/* ✅ Added */}
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="9" className="adm-empty-row">
                  Loading blogs...
                </td>
              </tr>
            )}

            {!loading && blogs.length === 0 && (
              <tr>
                <td colSpan="9" className="adm-empty-row">
                  No blog posts found
                </td>
              </tr>
            )}

            {!loading &&
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <img
                      src={`${IMAGE_BASE_URL}/${blog.image}`}
                      alt="blog"
                      className="adm-table-img"
                    />
                  </td>

                  <td>{blog.title}</td>

                  <td>{blog.category}</td>

                  <td>{blog.service || "-"}</td>

                  <td>{blog.author}</td>

                  <td>{blog.designation}</td>

                  {/* ✅ TAGS COLUMN */}
                  <td>
                    <div className="adm-tags-wrap">
                      {blog.tags?.length > 0 ? (
                        blog.tags.map((tag, index) => (
                          <span key={index} className="adm-tag-chip">
                            {tag}
                          </span>
                        ))
                      ) : (
                        "-"
                      )}
                    </div>
                  </td>

                  <td className="adm-desc-cell">
                    {blog.description}
                  </td>

                  <td>
                    <div className="adm-action-wrap">
                      <button
                        className="adm-edit-btn"
                        onClick={() => onEdit(blog)}
                      >
                        Edit
                      </button>

                      <button
                        className="adm-delete-btn"
                        onClick={() => onDelete(blog._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BlogTable;