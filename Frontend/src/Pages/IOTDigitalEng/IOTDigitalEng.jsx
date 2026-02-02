import React from "react";
import "./IOTDigitalEng.css";


import IOTBreadcrum from "../../Components/IOTBreadcrum/IOTBreadcrum";
import IotLeftComponent from "../../Components/IotLeftComponent/IotLeftComponent";
import IotSidebar from "../../Components/IotSidebar/IotSidebar";

const IOTDigitalEng = () => {
  return (
    <section className="iot-page-wrapper">
     <IOTBreadcrum />
      <div className="iot-page-container">
      

        {/* LEFT CONTENT */}
        <div className="iot-left-section">
          <IotLeftComponent />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="iot-right-section">
          <IotSidebar />
        </div>

      </div>
    </section>
  );
};

export default IOTDigitalEng;