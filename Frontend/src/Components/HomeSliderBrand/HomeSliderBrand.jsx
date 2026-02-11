import React, { useEffect, useState } from "react";
import API_URL, { IMAGE_BASE_URL } from "../../Api/Api";
import "./HomeSliderBrand.css";

export default function BrandSlider() {
  const [brands, setBrands] = useState([]);

  /* ================= FETCH CLIENT LOGOS ================= */
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await API_URL.get("/client-logos");
        setBrands(res.data);
      } catch (err) {
        console.error("FAILED TO LOAD BRANDS:", err);
      }
    };

    fetchBrands();
  }, []);

  if (!brands.length) return null;

  return (
    <section className="brand-wrapper">
      <div className="brand-title">
        Join Over <span>{brands.length}+</span> Companies with Alisil Technology
      </div>

      <div className="brand-slider">
        <div className="track">
          {/* Duplicate for infinite scroll */}
          {[...brands, ...brands].map((item, i) => (
            <div className="brand-card" key={i}>
              <img
                src={`${IMAGE_BASE_URL}/${item.logo}`}
                alt="client-logo"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
