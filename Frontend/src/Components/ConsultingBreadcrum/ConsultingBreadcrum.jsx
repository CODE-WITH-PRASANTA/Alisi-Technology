import React from "react";
import "./ConsultingBreadcrum.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesBreadcrum = () => {
  return (
    <section className="consultinghero">
      <div className="consultinghero-overlay">
        <h1>Consulting</h1>

        <div className="consultingbreadcrumb">
          <FaHome />
          <Link to="/">Home</Link>
          <span>›</span>
          <span className="active">Consulting</span>
        </div>
      </div>
    </section>
  );
};

export default AllServicesBreadcrum;
