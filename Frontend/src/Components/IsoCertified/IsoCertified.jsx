import React from "react";
import "./IsoCertified.css";

import Iso27017 from '../../Assets/ISO-27017.webp'
import Iso18295 from '../../Assets/ISO-18295.webp'
import Iso27001 from '../../Assets/ISO-27001.webp'
import Iso9001 from '../../Assets/ISO-9001.webp'

const IsoCertified = () => {
  const isoData = [
    {
      img: Iso27017,
      name: "ISO/IEC 27017:2015",
    },
    {
      img: Iso18295,
      name: "ISO 18295-1:2017",
    },
    {
      img: Iso27001,
      name: "ISO/IEC 27001",
    },
    {
      img: Iso9001,
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
