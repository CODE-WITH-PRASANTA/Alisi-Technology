import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaShareAlt
} from "react-icons/fa";

import "./AboutTeam.css";

import team1 from "../../Assets/team-1.webp";
import team2 from "../../Assets/team-2.webp";
import team3 from "../../Assets/team-3.webp";
import team4 from "../../Assets/team-4.webp";

export default function TekminoTeamSection() {

  const teamData = [
    { name: "Eade Marren", role: "Chief Executive", img: team1 },
    { name: "Savannah Nqueen", role: "Operations Head", img: team2 },
    { name: "Cameron William", role: "Marketing Lead", img: team3 },
    { name: "Olivia Fox", role: "Business Director", img: team4 },
  ];

  return (
    <section className="tek-team-section">

      {/* HEADER */}

      <div className="tek-team-header">

        <div className="tek-team-left">
          <span className="tek-team-tag"> [ MEET OUR TEAM ]</span>
          <h3 className="tek-team-title">
            Creative Minds Behind <br /> our Team.
          </h3>
        </div>

        <div className="tek-team-middle">
          <p>Our teams are customized to meet your unique ideas.</p>
        </div>

        <div className="tek-team-right">
         <button className="tek-team-more-btn">
  <span className="tek-team-btn-text">More Member</span>

  <span className="tek-team-arrow-circle">
    <FaArrowRight className="tek-team-arrow-icon" />
  </span>
</button>


        </div>

      </div>

      {/* CARDS */}

      <div className="tek-team-cards">

        {teamData.map((item, index) => (

          <div className="tek-team-card" key={index}>

            <div className="tek-team-img-box">

              <img src={item.img} alt={item.name} />

              <div className="tek-team-social-wrap">

                <div className="tek-team-share-btn">
                  <FaShareAlt />
                </div>

                <div className="tek-team-social-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>

              </div>

            </div>

            <div className="tek-team-info">
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
