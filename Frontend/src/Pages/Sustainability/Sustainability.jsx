import React from "react";
import "./Sustainability.css";



import SusBreadcrum from "../../Components/SusBreadcrum/SusBreadcrum";
import SusLeftComponent from "../../Components/SusLeftComponent/SusLeftComponent";
import SusSidebar from "../../Components/SusSidebar/SusSidebar";


const Sustainability = () => {
  return (
    <section className="sus-page-wrapper">
     <SusBreadcrum />
      <div className="sus-page-container">
      

        {/* LEFT CONTENT */}
        <div className="sus-left-section">
          <SusLeftComponent />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="sus-right-section">
          <SusSidebar />
        </div>

      </div>
      
    </section>
  );
};

export default Sustainability;