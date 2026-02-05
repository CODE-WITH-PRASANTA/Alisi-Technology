import React from "react";
import "./Cybersecurity.css";

import CyberBreadcrum from "../../Components/CyberBreadcrum/CyberBreadcrum";
import CyberLeftComponent from "../../Components/CyberLeftComponent/CyberLeftComponent";
import CyberSidebar from "../../Components/CyberSidebar/CyberSidebar";

const  Cybersecurity = () => {
  return (
    <section className="cyber-page-wrapper">
    <CyberBreadcrum />
      <div className="cyber-page-container">
      

        {/* LEFT CONTENT */}
        <div className="cyber-left-section">
          <CyberLeftComponent/>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="cyber-right-section">
          <CyberSidebar />
        </div>

      </div>
      
    </section>
  );
};

export default  Cybersecurity;