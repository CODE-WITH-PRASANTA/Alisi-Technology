import React from "react";
import "./ProjectDetails.css";

import ProjectDetailsBreadcrum from "../../Components/ProjectDetailsBreadcrum/ProjectDetailsBreadcrum";
import ProjectDetailsContent from "../../Components/ProjectDetailsContent/ProjectDetailsContent";
import ProjectDetailsSidebar from "../../Components/ProjectDetailsSidebar/ProjectDetailsSidebar";

const ProjectDetails = () => {
  return (
    <section className="projectDetails">

      {/* Breadcrumb */}
      <ProjectDetailsBreadcrum />

      <div className="projectDetails__container">

        {/* Left Content */}
        <div className="projectDetails__left">
          <ProjectDetailsContent />
        </div>

        {/* Right Sidebar */}
        <div className="projectDetails__right">
          <ProjectDetailsSidebar />
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;
