import React from "react";
import "./AboutSlider.css";

import b1 from "../../Assets/brand-1.webp";
import b2 from "../../Assets/brand-2.webp";
import b3 from "../../Assets/brand-3.webp";
import b4 from "../../Assets/brand-4.webp";
import b5 from "../../Assets/brand-5.webp";
import b6 from "../../Assets/brand-6.webp";

const brands = [b1, b2, b3, b4, b5, b6];

export default function BrandSlider() {
  return (
    <section className="abrand-wrapper">
      <div className="abrand-title">
        Join Over <span>1000+</span> Companies with Tekmino Here
      </div>

      <div className="abrand-slider">
        <div className="track">
          {[...brands, ...brands].map((logo, i) => (
            <div className="brand-card" key={i}>
              <img src={logo} alt="brand" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
