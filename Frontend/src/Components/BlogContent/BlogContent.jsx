import React from "react";
import "./BlogContent.css";

import blog1 from "../../Assets/blog-post-1.webp";
import blog2 from "../../Assets/blog-post-2.webp";
import blog3 from "../../Assets/blog-post-3.webp";

const posts = [
  {
    img: blog1,
    category: "Development",
    title: "How to Successfully Migrate Your Business to the Cloud",
  },
  {
    img: blog2,
    category: "Cybersecurity",
    title: "Building a Stronger Workforce with IT Training",
  },
  {
    img: blog3,
    category: "Automation",
    title: "Optimizing Your IT Budget: Tips and Strategies",
  },
];

const BlogContent = () => {
  return (
    <div className="blogContent">

      {posts.map((post, i) => (
        <div className="blogItem" key={i}>

          {/* IMAGE */}
          <div className="blogImage">
            <img src={post.img} alt="" />

            <div className="dateBadge">
              <strong>08</strong>
              <span>NOV</span>
            </div>
          </div>

          {/* META */}
          <div className="blogMeta">
            <span className="category">{post.category}</span>
            <span className="author">By Eade Marren</span>
          </div>

          {/* CONTENT */}
          <h2>{post.title}</h2>

          <p>
            In today's fast-paced business environment, migrating to the cloud
            has become more of a necessity than a choice. The cloud offers
            businesses unmatched flexibility, scalability, and cost efficiency.
            However, making the shift to the cloud can be a complex process if
            not approached strategically....
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
