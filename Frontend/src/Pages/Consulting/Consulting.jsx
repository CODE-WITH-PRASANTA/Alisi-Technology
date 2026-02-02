import React from "react";
import "./Consulting.css";






import ConsultingBreadcrum from "../../Components/ConsultingBreadcrum/ConsultingBreadcrum";
import ConsultingLeftComponent from "../../Components/ConsultingLeftComponent/ConsultingLeftComponent";
import ConsultingSidebar from "../../Components/ConsultingSidebar/ConsultingSidebar";

const Consulting = () => {
  return (
    <section className="consulting-page-wrapper">
     <ConsultingBreadcrum />
      <div className="consulting-page-container">
      

        {/* LEFT CONTENT */}
        <div className="consulting-left-section">
          <ConsultingLeftComponent />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="consulting-right-section">
          <ConsultingSidebar />
        </div>

      </div>
    </section>
  );
};

export default Consulting;