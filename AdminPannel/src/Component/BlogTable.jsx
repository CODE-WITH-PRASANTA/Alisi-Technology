import React from "react";

const BlogTable = ({ blogs, loading, onEdit, onDelete }) => {
  return (
    <div className="adm-blog-table-box">
      <div className="adm-table-scroll-area">
        <table className="adm-blog-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Author</th>
              <th>Designation</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {loading && (
              <tr>
                <td colSpan="7" className="adm-empty-row">
                  Loading blogs...
                </td>
              </tr>
            )}

            {!loading && blogs.length === 0 && (
              <tr>
                <td colSpan="7" className="adm-empty-row">
                  No blog posts found
                </td>
              </tr>
            )}

            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <img
                    src={`http://localhost:5000/${blog.image}`}
                    className="adm-table-img"
                  />
                </td>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.author}</td>
                <td>{blog.designation}</td>
                <td className="adm-desc-cell">{blog.description}</td>
                <td>
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