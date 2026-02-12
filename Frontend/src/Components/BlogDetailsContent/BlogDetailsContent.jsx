import "./BlogDetailsContent.css";
import { IMAGE_BASE_URL } from "../../Api/Api";

export default function BlogDetailsContent({ blog }) {
  return (
    <section className="blog-wrapper">
      {/* HERO */}
      <div className="blog-hero">
        <img
          src={`${IMAGE_BASE_URL}/${blog.image}`}
          alt={blog.title}
        />

        <div className="blog-hero-overlay">
          <h1>{blog.title}</h1>
        </div>
      </div>

      {/* META */}
      <div className="blog-meta">
        <div className="author">
          <img
            src="https://i.pravatar.cc/100"
            alt="author"
          />
          <div>
            <span>Authored by</span>
            <strong>{blog.author}</strong>
          </div>
        </div>

        <div className="meta-item">
          <span>
            {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="meta-item">
          <span>{blog.category}</span>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </section>
  );
}