import React from "react";
import "./BlogContent.css";

import blog1 from "../../Assets/blog-post-1.webp";
import blog2 from "../../Assets/blog-post-2.webp";
import blog3 from "../../Assets/blog-post-3.webp";

const posts = [
  {
    img: blog1,
    category: "Cloud Computing",
    title: "A Practical Guide to Moving Your Business Infrastructure to the Cloud",
    desc: `As businesses continue to embrace digital transformation, cloud computing has become a key driver of efficiency and growth. From improved scalability to reduced operational costs, migrating to the cloud allows organizations to modernize their IT infrastructure while ensuring security and performance.`
  },
  {
    img: blog2,
    category: "Cybersecurity",
    title: "Strengthening Business Security in a Digitally Connected World",
    desc: `With the rise of connected systems and cloud platforms, cybersecurity has never been more critical. Businesses must adopt proactive security strategies to protect sensitive data, prevent cyber threats, and ensure compliance with industry standards in today’s digital environment.`
  },
  {
    img: blog3,
    category: "Digital Engineering",
    title: "Smart Technology Solutions to Improve Operational Efficiency",
    desc: `Digital engineering and automation technologies are transforming the way businesses operate. By integrating smart systems and real-time data analytics, organizations can streamline workflows, enhance productivity, and make informed decisions that drive long-term success.`
  },
];

const BlogContent = () => {
  return (
    <div className="blogContent">

      {posts.map((post, i) => (
        <div className="blogItem" key={i}>

          {/* IMAGE */}
          <div className="blogImage">
            <img src={post.img} alt={post.title} />

            <div className="dateBadge">
              <strong>08</strong>
              <span>NOV</span>
            </div>
          </div>

          {/* META */}
          <div className="blogMeta">
            <span className="category">{post.category}</span>
            <span className="author">By Alisil Technology Team</span>
          </div>

          {/* CONTENT */}
          <h2>{post.title}</h2>

          <p>
            {post.desc}
          </p>

          <button className="readBtn">
            Read More <span>↗</span>
          </button>

        </div>
      ))}

    </div>
  );
};

export default BlogContent;
