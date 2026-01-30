import React from "react";
import "./Cloud.css";



import CloudBreadcrum from "../../Components/CloudBreadcrum/CloudBreadcrum"
import CloudLeftComponent from "../../Components/CloudLeftComponent/CloudLeftComponent";
import CloudSidebar from "../../Components/CloudSidebar/CloudSidebar";

const Cloud = () => {
  return (
    <section className="cloud-page-wrapper">
     <CloudBreadcrum />
      <div className="cloud-page-container">
      

        {/* LEFT CONTENT */}
        <div className="cloud-left-section">
          <CloudLeftComponent />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="cloud-right-section">
          <CloudSidebar />
        </div>

      </div>
    </section>
  );
};

export default Cloud;