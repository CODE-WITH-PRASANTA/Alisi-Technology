import React from "react";
import "./HomeInsights.css";

import blog1 from "../../Assets/blog-post-1.webp";
import blog2 from "../../Assets/blog-post-2.webp";
import blog3 from "../../Assets/blog-post-3.webp";

const blogs = [
  {
    id: 1,
    img: blog1,
    date: "08",
    month: "NOV",
    category: "Development",
    title: "How to Successfully Migrate Your Business to the Cloud",
    author: "By Eade Marren",
  },
  {
    id: 2,
    img: blog2,
    date: "08",
    month: "NOV",
    category: "Cybersecurity",
    title: "Building a Stronger Workforce with IT Training",
    author: "By Eade Marren",
  },
  {
    id: 3,
    img: blog3,
    date: "08",
    month: "NOV",
    category: "Automation",
    title: "Optimizing Your IT Budget: Tips and Strategies",
    author: "By Eade Marren",
  },
];

export default function Insights() {
  return (
    <section className="insights">
      <div className="insights-header">
        <span>[ INSIGHTS & INNOVATION ]</span>
        <h2>
          Explore Latest Insights, <br /> & Innovations.
        </h2>
      </div>

      <div className="insights-grid">
        {blogs.map((item) => (
          <div className="insight-card" key={item.id}>
            <div className="img-wrap">
              <img src={item.img} alt="" />

              <div className="date-box">
                <strong>{item.date}</strong>
                <small>{item.month}</small>
              </div>
            </div>

            <div className="card-content">
              <div className="meta">
                <span className="cat">{item.category}</span>
                <span className="author">{item.author}</span>
              </div>

              <h3>{item.title}</h3>

              <button className="read-more">Read More →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
