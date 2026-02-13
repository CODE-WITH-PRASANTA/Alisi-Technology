import React, { useState, useEffect } from "react";
import "./PricingSection.css";
import { FaCheck } from "react-icons/fa";
import API_URL from "../../Api/Api"; // ✅ your axios instance

const PricingSection = () => {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);

  /* ================= FETCH FROM BACKEND ================= */

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await API_URL.get("/ai-prices");
        setPlans(res.data || []);
      } catch (error) {
        console.error("Error fetching pricing plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const getPrice = (price) =>
    yearly ? Math.round(price * 12 * 0.85) : price;

  return (
    <section className="ai-section">
      {/* Header */}
      <div className="ai-header">
        <span className="ai-tag">[ BEST PRICING ]</span>
        <h2>
          Pricing Plans to Find the <br /> Right IT Support
        </h2>

        {/* Toggle */}
        <div className="ai-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>

          <div
            className={`ai-switch ${yearly ? "yearly" : ""}`}
            onClick={() => setYearly(!yearly)}
          >
            <span />
          </div>

          <span className={yearly ? "active" : ""}>
            Yearly <em>(Save 15%)</em>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="ai-grid">
        {plans.map((plan, i) => (
          <div
            key={plan._id || i}
            className={`ai-card ${plan.featured ? "featured" : ""}`}
          >
            {/* 🔥 KEEPING SAME UI STRUCTURE */}
            <h3>{plan.name || plan.title}</h3>
            <p className="ai-sub">{plan.desc || plan.category}</p>

            <h1>
              ₹{getPrice(plan.monthly || plan.price)}
              <span>{yearly ? "/per year" : "/per month"}</span>
            </h1>

            <button
              className={`ai-btn ${
                plan.featured ? "solid" : "outline"
              }`}
            >
              Choose package →
            </button>

            <ul>
              {(plan.features || []).map((f, idx) => (
                <li key={idx}>
                  <FaCheck /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;