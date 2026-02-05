import "./MigrationSection.css";

const MigrationSection = () => {
  return (
    <section className="migration-wrapper">
      <div className="migration-container">
        <h2>Understand Why You’re Migrating</h2>

        <p className="migration-intro">
          Before diving into the technical aspects of migration, it’s important
          to understand the why behind your decision. Every business has
          different needs, so it’s critical to identify the key benefits you
          expect from the cloud. Some common reasons for migrating include them
          to not only survive but thrive in an ever-changing marketplace. One of
          the most important lessons is understanding the need for continuous
          innovation.
        </p>

        {/* Images */}
        <div className="migration-images">
          <img src="../../assets/blog-9.webp" alt="meeting" />
          <img src="../../assets/blog-10.webp" alt="working woman" />
        </div>

        <p className="migration-desc">
          Moving from expensive on-premise infrastructure to pay-as-you-go cloud
          services can significantly lower your operating costs. The cloud
          allows your resources to grow or shrink according to demand, ensuring
          you only pay for what you use. Cloud-based applications and data can
          be accessed anywhere.
        </p>

        {/* Checklist */}
        <div className="migration-features">
          <ul>
            <li>Scalable IT Infrastructure</li>
            <li>High Data Security</li>
            <li>Disaster Recovery Solutions</li>
            <li>Flexible Storage Options</li>
          </ul>

          <ul>
            <li>Compliance and Support</li>
            <li>Reduced Hardware</li>
            <li>24/7 Cloud Monitoring</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default MigrationSection


