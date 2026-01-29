import React from "react";
import "./HomeWorkingProcess.css";

const steps = [
  {
    no: "01",
    title: "Deep Discovery & Planning",
    desc: "Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.",
  },
  {
    no: "02",
    title: "Development & Implement",
    desc: "Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.",
  },
  {
    no: "03",
    title: "Optimization & Support",
    desc: "Every great solution starts understanding. We take the time to learn about your business, challenges, and goals.",
  },
];

export default function WorkingProcess() {
  return (
    <section className="process">
      <div className="process-header">
        <span>[ OUR WORKING PROCESS ]</span>
        <h2>
          Transform Your Business <br /> in 3 Simple Steps.
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
