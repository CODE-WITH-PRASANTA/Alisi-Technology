import React from "react";
import "./AiDataAnalytics.css";

import LeftContent from "../../Components/LeftContent/LeftContent";
import AiDataAnalyticsSidebar from "../../Components/AiDataAnalyticsSidebar/AiDataAnalyticsSidebar";
import Aibreadcrum from "../../Components/Aibreadcrum/Aibreadcrum"
import PricingSection from "../../Components/PricingSection/PricingSection";

const AiDataAnalytics = () => {
  return (
    <section className="ai-page-wrapper">
     <Aibreadcrum />
      <div className="ai-page-container">
      

        {/* LEFT CONTENT */}
        <div className="ai-left-section">
          <LeftContent />
          <PricingSection />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="ai-right-section">
          <AiDataAnalyticsSidebar />

        </div>
         
      </div>
    </section>
  );
};

export default AiDataAnalytics;