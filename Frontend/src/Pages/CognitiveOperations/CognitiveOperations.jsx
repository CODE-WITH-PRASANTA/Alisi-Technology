import React from "react";
import "./CognitiveOperations.css";

import COBreadcrum from "../../Components/COBreadcrum/COBreadcrum";
import COLeftComponent from "../../Components/COLeftComponent/COLeftComponent";
import COSidebar from "../../Components/COSidebar/COSidebar";


const CognitiveOperations = () => {
  return (
    <section className="co-page-wrapper">
     <COBreadcrum />
      <div className="co-page-container">
      

        {/* LEFT CONTENT */}
        <div className="co-left-section">
          <COLeftComponent />
          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="co-right-section">
          <COSidebar/>
        </div>

      </div>
     
    </section>
  );
};

export default CognitiveOperations;