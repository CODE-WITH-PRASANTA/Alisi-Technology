import React from "react";
import "./HomeWorkingProcess.css";

const steps = [
  {
    no: "01",
    title: "Business Analysis & Strategy Planning",
    desc: "We begin by understanding your business objectives, technical requirements, and challenges to create a clear digital strategy tailored to your goals.",
  },
  {
    no: "02",
    title: "Solution Development & Implementation",
    desc: "Our experts design and develop custom IT, IoT, and digital engineering solutions, ensuring seamless integration with your existing systems.",
  },
  {
    no: "03",
    title: "Performance Optimization & Ongoing Support",
    desc: "After deployment, we continuously monitor performance, enhance system efficiency, and provide reliable technical support for long-term success.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="process">
      <div className="process-header">
        <span>[ OUR WORKING PROCESS ]</span>
        <h2>
          Transform Your Business <br /> in 3 Simple Steps
        </h2>
      </div>

      <div className="process-grid">
        {steps.map((item, i) => (
          <div className="process-card" key={i}>
            <div className="step-circle">{item.no}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {i !== 2 && <span className="dot-connector"></span>}
          </div>
        ))}
      </div>
    </section>
  );
}
