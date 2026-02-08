import React from "react";
import "./BPOService.css";


import BPOBreadcrum from "../../Components/BPOBreadcrum/BPOBreadcrum";
import BPOLeftComponent from "../../Components/BPOLeftComponent/BPOLeftComponent";
import BPOSidebar from "../../Components/BPOSidebar/BPOSidebar";


const BPOService = () => {
  return (
    <section className="cloud-page-wrapper">
     <BPOBreadcrum />
      <div className="cloud-page-container">
      

        {/* LEFT CONTENT */}
        <div className="cloud-left-section">
          <BPOLeftComponent />
          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="cloud-right-section">
          <BPOSidebar />
        </div>

      </div>
     
    </section>
  );
};

export default BPOService;