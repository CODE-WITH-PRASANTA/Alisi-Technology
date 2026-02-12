import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css";

import HomeHeroSection from "../../Components/HomeHeroSection/HomeHeroSection";
import HomeSliderBrand from "../../Components/HomeSliderBrand/HomeSliderBrand";
import HomeWhyChoose from "../../Components/HomeWhyChoose/HomeWhyChoose";
import HomeAbout from "../../Components/HomeAbout/HomeAbout";
import HomeInsights from "../../Components/HomeInsights/HomeInsights";
import HomeWorkingProcess from "../../Components/HomeWorkingProcess/HomeWorkingProcess";
import HomeContactSection from "../../Components/HomeContactSection/HomeContactSection";
import HomeRecentProjects from "../../Components/HomeRecentProjects/HomeRecentProjects";
import HomeTechnologies from "../../Components/HomeTechnologies/HomeTechnologies";
import HomeVideo from "../../Components/HomeVideo/HomeVideo";
import HomeServices from "../../Components/HomeServices/HomeServices";
import HomeFeedback from "../../Components/HomeFeedback/HomeFeedback";
import AboutTestmonial from "../../Components/AboutTestimonial/AboutTestimonial";
import AboutTeam from "../../Components/AboutTeam/AboutTeam";
import CookieBanner from "../../Components/CookieBanner/CookieBanner";
import IsoCertified from "../../Components/IsoCertified/IsoCertified";

const Home = () => {
  return (
    <>
      {/* 🔹 SEO META TAGS */}
  
      <Helmet>
        <title>Alisil Technology | AI, Cloud & Digital Services</title>
        <meta
          name="description"
          content="Alisil Technology offers AI, Data Analytics, Cloud Computing, Cybersecurity, BPO & Digital Engineering services."
        />
        <link rel="canonical" href="https://www.alisiltechnology.in/" />
      </Helmet>

      {/* 🔹 PAGE CONTENT */}
      <div className="home">
        <CookieBanner/>
        <HomeHeroSection />
        <HomeSliderBrand />
        <HomeWhyChoose />
        <HomeAbout />
        <HomeServices />
        <HomeVideo />
        <HomeFeedback />
        <AboutTestmonial />
        <HomeWorkingProcess />
        <AboutTeam />
        <HomeTechnologies />
        <HomeRecentProjects />
        <IsoCertified/>
        <HomeContactSection />
        <HomeInsights />
      </div>
    </>
  );
};

export default Home;
