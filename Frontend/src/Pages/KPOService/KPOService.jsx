import React from "react";
import "./KPOService.css";


import KPOBreadcrum from "../../Components/KPOBreadcrum/KPOBreadcrum";
import KPOLeftComponent from "../../Components/KPOLeftComponent/KPOLeftComponent";
import KPOSidebar from "../../Components/KPOSidebar/KPOSidebar";


const KPOService = () => {
  return (
    <section className="kpo-page-wrapper">
     <KPOBreadcrum />
      <div className="kpo-page-container">
      

        {/* LEFT CONTENT */}
        <div className="kpo-left-section">
          <KPOLeftComponent />
          
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="kpo-right-section">
          <KPOSidebar />
        </div>

      </div>
     
    </section>
  );
};

export default KPOService;