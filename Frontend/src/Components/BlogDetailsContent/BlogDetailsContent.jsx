import "./BlogDetailsContent.css";
import heroImg from "../../Assets/blog-post-5.webp";

export default function BlogPost() {
  return (
    <section className="blog-wrapper">
      {/* HERO */}
      <div className="blog-hero">
        <img src={heroImg} alt="blog hero" />

        <div className="blog-hero-overlay">
          <h1>
            Automating IT Support: The Future of
            <br />
            Helpdesk Solutions
          </h1>
        </div>
      </div>

      {/* META */}
      <div className="blog-meta">
        <div className="author">
          <img src="https://i.pravatar.cc/100?img=12" alt="author" />
          <div>
            <span>Authored by</span>
            <strong>Eade Marren</strong>
          </div>
        </div>

        <div className="meta-item">
          {/* Calendar */}
          <svg viewBox="0 0 24 24">
            <path d="M7 2v3M17 2v3M3 9h18M5 5h14a2 2 0 012 2v13a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
          </svg>
          <span>8 November, 2025</span>
        </div>

        <div className="meta-item">
          {/* Comment */}
          <svg viewBox="0 0 24 24">
            <path d="M21 11.5a8.5 8.5 0 11-4-7.3L21 3v8.5z" />
          </svg>
          <span>No Comments</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-content">
        <p>
          In today’s fast-paced business environment, migrating to the cloud has
          become more of a necessity than a choice. The cloud offers businesses
          unmatched flexibility, scalability, and cost efficiency.
        </p>

        <p>
          Before diving into the technical aspects of migration, it’s important
          to understand the why behind your decision. In this guide, we’ll take
          you through the essential steps to ensure a smooth and successful
          migration to the cloud.
        </p>

        <p>
          Whether you’re looking to streamline operations, enhance customer
          experiences, or explore new market opportunities, our tailored
          solutions are designed to empower your business to achieve unparalleled
          success.
        </p>

        {/* QUOTE */}
        <div className="blog-quote">
          <span className="quote-mark">“</span>

          <p>
            Migrating to the cloud is a journey toward greater flexibility,
            security, and scalability, where businesses unlock new capabilities,
            improve collaboration, and enhance overall performance.
          </p>

          <span className="quote-author">Kevin Hooks</span>
        </div>
      </div>
    </section>
  );
}
