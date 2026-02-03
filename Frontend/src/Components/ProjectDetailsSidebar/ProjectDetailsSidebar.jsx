import React from "react";
import "./ProjectDetailsSidebar.css";

import {
  FaUser,
  FaDollarSign,
  FaMapMarkerAlt,
  FaLayerGroup,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import adImg from "../../Assets/service-ad.webp";

const ProjectDetailsSidebar = () => {
  return (
    <aside className="projectSidebar">

      {/* Project Info Card */}
      <div className="projectSidebar__card">

        <h3 className="projectSidebar__title">Project Info</h3>

        <ul className="projectSidebar__list">

          <li>
            <span><FaUser /></span>
            <div>
              <h5>Clients</h5>
              <p>Innovate Interiors Group</p>
            </div>
          </li>

          <li>
            <span><FaDollarSign /></span>
            <div>
              <h5>Budget</h5>
              <p>$8,000 USD</p>
            </div>
          </li>

          <li>
            <span><FaMapMarkerAlt /></span>
            <div>
              <h5>Location</h5>
              <p>Maplewood Heights, CA</p>
            </div>
          </li>

          <li>
            <span><FaLayerGroup /></span>
            <div>
              <h5>Sector</h5>
              <p>IT Solutions</p>
            </div>
          </li>

          <li>
            <span><FaCalendarAlt /></span>
            <div>
              <h5>Complete date</h5>
              <p>Oct 20, 2024</p>
            </div>
          </li>

        </ul>

        {/* Share */}
        <div className="projectSidebar__share">
          <span>Share:</span>

          <div className="projectSidebar__socials">
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaTwitter />
          </div>
        </div>

      </div>

      {/* Advertisement Card */}
      <div className="projectSidebar__ad">

        <div className="projectSidebar__adContent">
          <h2>Innovative</h2>
          <p>IT Solutions.</p>

          <div className="projectSidebar__phone">
            <FaPhoneAlt />
            <span>+8 (321) 890-640</span>
          </div>
        </div>

        <div className="projectSidebar__adImg">
          <img src={adImg} alt="service" />
        </div>

      </div>

    </aside>
  );
};

export default ProjectDetailsSidebar;
