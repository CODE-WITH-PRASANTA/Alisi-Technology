import React from "react";
import "./IsoCertified.css";

import iso27017 from "../../Assets/ISO-27017-2015.webp";
import iso18295 from "../../Assets/ISO-9001.webp";
import iso27001 from "../../Assets/ISO_27001_certified_badge.webp";
import iso9001 from "../../assets/iso-2017.webp";

const IsoCertified = () => {
  const isoData = [
    {
      img: iso27017,
      name: "ISO/IEC 27017:2015",
    },
    {
      img: iso18295,
      name: "ISO 18295-1:2017",
    },
    {
      img: iso27001,
      name: "ISO/IEC 27001",
    },
    {
      img: iso9001,
      name: "ISO 9001:2015",
    },
  ];

  return (
    <section className="iso-section">
      <div className="iso-container">
        <h2 className="iso-heading">Our ISO Certifications</h2>

        <div className="iso-grid">
          {isoData.map((item, index) => (
            <div className="iso-card" key={index}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsoCertified;
