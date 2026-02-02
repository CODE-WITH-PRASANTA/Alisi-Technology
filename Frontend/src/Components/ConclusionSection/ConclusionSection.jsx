import "./ConclusionSection.css";
import videoThumb from "../../Assets/blog-video.webp";

export default function ConclusionSection() {
  return (
    <section className="conclusion-wrapper">
      <div className="conclusion-container">
        {/* Video */}
        <div className="video-box">
          <img src={videoThumb} alt="video" />

          <div className="play-btn">
            ▶
          </div>
        </div>

        {/* Text */}
        <h2>Conclusions</h2>

        <p>
          Migrating your business to the cloud can be a transformative
          experience, unlocking a world of flexibility, security, and
          cost-efficiency. However, to ensure success, you must approach the
          migration process carefully, from assessment and planning to security
          and post-migration optimization.
        </p>

        <p>
          By following these steps and working with a trusted IT solutions
          provider, you can ensure that your business leverages the full
          potential of the cloud. The future is digital, cloud is the key to
          unlocking that future.
        </p>

        {/* Tags + Share */}
        <div className="tags-share">
          <div className="tags">
            <span>Cloud</span>
            <span>Optimize</span>
            <span>Security</span>
          </div>

          <div className="share">
            <span>Share:</span>

            <a href="#">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" />
            </a>

            <a href="#">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg" />
            </a>

            <a href="#">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" />
            </a>

            <a href="#">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinterest.svg" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="post-nav">
          <button className="nav-btn">← Previous</button>

          <div className="grid-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <button className="nav-btn">Next →</button>
        </div>
      </div>
    </section>
  );
}
