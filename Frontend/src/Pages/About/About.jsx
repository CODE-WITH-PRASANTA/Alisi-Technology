import React from "react";
import { Helmet } from "react-helmet-async";

import AboutBreadcrum from "../../Components/AboutBreadcrum/AboutBreadcrum";
import AboutInovation from "../../Components/AboutInovation/AboutInovation";
import Aboutbox from "../../Components/Aboutbox/Aboutbox";
import AboutWhychoose from "../../Components/AboutWhychoose/AboutWhychoose";
import AboutTeam from "../../Components/AboutTeam/AboutTeam";
import AboutTestimonial from "../../Components/AboutTestimonial/AboutTestimonial";
import AboutFaq from "../../Components/AboutFaq/AboutFaq";
import AboutSlider from "../../Components/AboutSlider/AboutSlider";
import AboutFeedback from "../../Components/AboutFeedback/AboutFeedback";

const About = () => {
  return (
    <>
      {/* 🔹 SEO META TAGS */}
      <Helmet>
        <title>About Us | Alisil Technology Pvt. Ltd.</title>
        <meta
          name="description"
          content="Learn about Alisil Technology, our mission, vision, expert team, and why businesses choose us for AI, Cloud, Cybersecurity, BPO and Digital Engineering solutions."
        />
        <link
          rel="canonical"
          href="https://www.alisiltechnology.in/about"
        />
      </Helmet>

      {/* 🔹 PAGE CONTENT */}
      <div>
        <AboutBreadcrum />
        <AboutWhychoose />
        <AboutInovation />
        <Aboutbox />
        <AboutTeam />
        <AboutFeedback />
        <AboutTestimonial />
        <AboutFaq />
        <AboutSlider />
      </div>
    </>
  );
};

export default About;
