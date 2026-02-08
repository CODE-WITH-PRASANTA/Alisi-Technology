import React from "react";
import { Helmet } from "react-helmet-async";

import ContactBreadcrum from "../../Components/ContactBreadcrum/ContactBreadcrum";
import ContactSection from "../../Components/ContactSection/ContactSection";
import ContactInfo from "../../Components/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <>
      {/* 🔹 SEO META TAGS */}
      <Helmet>
        <title>Contact Us | Alisil Technology Pvt. Ltd.</title>
        <meta
          name="description"
          content="Get in touch with Alisil Technology for AI, Cloud Computing, Cybersecurity, BPO, KPO and Digital Engineering solutions. Contact our expert team today."
        />
        <link
          rel="canonical"
          href="https://www.alisiltechnology.in/contact"
        />
      </Helmet>

      {/* 🔹 PAGE CONTENT */}
      <div>
        <ContactBreadcrum />
        <ContactInfo />
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;
