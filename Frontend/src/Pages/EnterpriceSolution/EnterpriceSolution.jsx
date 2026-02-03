import React from "react";
import "./EnterpriceSolution.css";



import SolutionBreadcrum from "../../Components/SolutionBreadcrum/SolutionBreadcrum";
import SolutionLeftComponent from "../../Components/SolutionLeftComponent/SolutionLeftComponent";
import SolutionSidebar from "../../Components/SolutionSidebar/SolutionSidebar";
import EnterPricing from "../../Components/EnterPricing/EnterPricing";

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
      <EnterPricing />
    </section>
  );
};

export default  EnterpriceSolution;