import React from "react";
import "./NetworkSolution.css";


import NSBreadcrum from "../../Components/NSBreadcrum/NSBreadcrum";
import NSLeftComponent from "../../Components/NSLeftComponent/NSLeftComponent";
import NSSiderbar from "../../Components/NSSidebar/NSSidebar";


const NetworkSolution = () => {
  return (
    <section className="ns-page-wrapper">
     <NSBreadcrum />
      <div className="ns-page-container">
      

        {/* LEFT CONTENT */}
        <div className="ns-left-section">
          <NSLeftComponent />
          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="ns-right-section">
          <NSSiderbar />
        </div>

      </div>
     
    </section>
  );
};

export default NetworkSolution;