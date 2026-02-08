import React from "react";
import { Helmet } from "react-helmet-async";

import AllServicesBreadcrum from "../../Components/AllServicesBreadcrum/AllServicesBreadcrum";
import AllServicesFeatures from "../../Components/AllServicesFeatures.jsx/AllServicesFeatures";
import AllServicesCTA from "../../Components/AllServicesCTA/AllServicesCTA";
import AllServicesPlanPriceing from "../../Components/AllServicesPlanPriceing/AllServicesPlanPriceing";
import AllServicesBrand from "../../Components/AllServicesBrand/AllServicesBrand";

const AllServices = () => {
  return (
    <>
      {/* 🔹 SEO META TAGS */}
      <Helmet>
        <title>All IT Services | AI, Cloud, BPO & Cybersecurity – Alisil Technology</title>
        <meta
          name="description"
          content="Explore all IT services offered by Alisil Technology including AI & Data Analytics, Cloud Computing, Cybersecurity, BPO, KPO, IoT, Enterprise Solutions and Digital Engineering."
        />
        <link
          rel="canonical"
          href="https://www.alisiltechnology.in/services/all-services"
        />
      </Helmet>

      {/* 🔹 PAGE CONTENT */}
      <div>
        <AllServicesBreadcrum />
        <AllServicesFeatures />
        <AllServicesCTA />
        <AllServicesPlanPriceing />
        <AllServicesBrand />
      </div>
    </>
  );
};

export default AllServices;
