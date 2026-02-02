import React from "react";
import "./EnterpriceSolution.css";



import SolutionBreadcrum from "../../Components/SolutionBreadcrum/SolutionBreadcrum";
import SolutionLeftComponent from "../../Components/SolutionLeftComponent/SolutionLeftComponent";
import SolutionSidebar from "../../Components/SolutionSidebar/SolutionSidebar";

const  EnterpriceSolution = () => {
  return (
    <section className="solution-page-wrapper">
    <SolutionBreadcrum />
      <div className="solution-page-container">
      

        {/* LEFT CONTENT */}
        <div className="solution-left-section">
          <SolutionLeftComponent/>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="solution-right-section">
          <SolutionSidebar />
        </div>

      </div>
    </section>
  );
};

export default  EnterpriceSolution;