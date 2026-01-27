import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
  FaShareAlt
} from "react-icons/fa";

import "./HomeTeam.css";

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
    <section className="home-team-section">

      {/* HEADER */}

      <div className="home-team-header">

        <div className="home-team-left">
          <span className="home-team-tag"> [ MEET OUR TEAM ]</span>
          <h3 className="home-team-title">
            Creative Minds Behind <br /> our Team.
          </h3>
        </div>

        <div className="home-team-middle">
          <p>Our teams are customized to meet your unique ideas.</p>
        </div>

        <div className="home-team-right">
         <button className="home-team-more-btn">
  <span className="home-team-btn-text">More Member</span>

  <span className="home-team-arrow-circle">
    <FaArrowRight className="home-team-arrow-icon" />
  </span>
</button>


        </div>

      </div>

      {/* CARDS */}

      <div className="home-team-cards">

        {teamData.map((item, index) => (

          <div className="home-team-card" key={index}>

            <div className="home-team-img-box">

              <img src={item.img} alt={item.name} />

              <div className="home-team-social-wrap">

                <div className="home-team-share-btn">
                  <FaShareAlt />
                </div>

                <div className="home-team-social-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>

              </div>

            </div>

            <div className="home-team-info">
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}
