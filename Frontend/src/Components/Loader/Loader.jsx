import React from "react";
import { FadeLoader } from "react-spinners";
import "./Loader.css";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-card">
        <FadeLoader
          color="#9ef802"
          height={14}
          width={4}
          radius={3}
          margin={2}
        />

        <h4 className="loader-title">Please wait</h4>
        <p className="loader-text">
          We’re preparing the experience for you…
        </p>
      </div>
    </div>
  );
};

export default Loader;
