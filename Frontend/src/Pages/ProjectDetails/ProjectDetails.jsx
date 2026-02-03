import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectDetails.css";

import ProjectDetailsBreadcrum from "../../Components/ProjectDetailsBreadcrum/ProjectDetailsBreadcrum";
import ProjectDetailsContent from "../../Components/ProjectDetailsContent/ProjectDetailsContent";
import ProjectDetailsSidebar from "../../Components/ProjectDetailsSidebar/ProjectDetailsSidebar";

const API_BASE = "http://localhost:5000";

const ProjectDetails = () => {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    const controller = new AbortController();

    const fetchProject = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await fetch(
          `${API_BASE}/api/projects/${id}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Project not found");
        }

        const data = await res.json();
        setProject(data.project || null);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError("Failed to load project");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProject();

    return () => controller.abort();
  }, [id]);

  /* ---------- STATES ---------- */

  if (loading) {
    return (
      <section className="projectDetails">
        <p className="projectDetails__loading">Loading project...</p>
      </section>
    );
  }

  if (error || !project) {
    return (
      <section className="projectDetails">
        <p className="projectDetails__error">
          {error || "Project not found"}
        </p>
      </section>
    );
  }

  /* ---------- UI ---------- */

  return (
    <section className="projectDetails">
      {/* Breadcrumb */}
      <ProjectDetailsBreadcrum title={project.title} />

      <div className="projectDetails__container">
        {/* Left */}
        <div className="projectDetails__left">
          <ProjectDetailsContent project={project} />
        </div>

        {/* Right */}
        <div className="projectDetails__right">
          <ProjectDetailsSidebar project={project} />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
