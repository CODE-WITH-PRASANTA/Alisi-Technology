import React from "react";
import "./HomeTechnologies.css";

import Pandas from "../../Assets/Pandas_logo.svg.webp";
import R from "../../Assets/R.webp";
import MongoDB from "../../Assets/MongoDB.webp";
import Tableau from "../../Assets/Tableau-logo.webp";
import TensorFlow from "../../Assets/TensorFlow_logo.svg.webp";
import PowerBI from "../../Assets/Power-BI-Symbol.webp";
import pytorch from "../../Assets/pytorch.webp";
import Scikit from "../../Assets/Scikit_learn_logo_small.svg.webp";
import NoSQL from "../../Assets/NoSQL.webp";
import Hadoop from "../../Assets/Hadoop.webp";
import SQL from "../../Assets/SQL.webp";
import Python from "../../Assets/Python.svg.webp";

const techs = [
  {
    img: Python,
    title: "Python",
    desc: "Powerful programming language for web development, automation, and AI solutions.",
  },
  {
    img:R ,
    title: "R",
    desc: "Advanced language for statistical analysis and predictive modeling.",
  },
  {
    img: MongoDB ,
    title: " MongoDB",
    desc: "Ensures scalable, high-speed, and secure data management.",
  },
  {
    img: PowerBI,
    title: "PowerBI",
    desc: "Create real-time dashboards to drive smarter decisions.",
  },
  {
    img: pytorch,
    title: "Pytorch",
    desc: "Build intelligent neural networks and machine learning models.",
  },
  {
    img: TensorFlow,
    title: "TensorFlow",
    desc: "Robust framework for machine learning and AI applications.",
  },
  {
    img: Pandas,
    title: "Pandas",
    desc: "Powerful Python library for data manipulation and analysis.",
  },
  
  {
    img: Tableau,
    title: "Tableau",
    desc: "Leading data visualization and analytics platform.",
  },
  {
    img: Scikit,
    title: "Scikit",
    desc: "Machine learning library for predictive analytics.",
  },
  {
    img: NoSQL,
    title: "NoSQL",
    desc: "Modern database solution for unstructured and real-time data.",
  },
  {
    img: Hadoop,
    title: "Hadoop",
    desc: "Big data framework for distributed storage and processing.",
  },
  {
    img: SQL,
    title: "SQL",
    desc: "Structured Query Language for relational databases.",
  },
];

export default function Technologies() {
  return (
    <section className="tech-section">
      <p className="tech-tag">[ OUR TECHNOLOGIES ]</p>
      <h2>
        Effortless IT Integration <br /> for Business.
      </h2>

      {/* TOP ROW */}
      <div className="marquee left">
        <div className="track">
          {[...techs, ...techs].map((t, i) => (
            <Card key={`top-${i}`} {...t} />
          ))}
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="marquee right">
        <div className="track">
          {[...techs, ...techs].map((t, i) => (
            <Card key={`bottom-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ img, title, desc }) {
  return (
    <div className="tech-card">
      <img src={img} alt={title} />
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}
