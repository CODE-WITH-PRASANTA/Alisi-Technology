import React, { useState, useEffect } from "react";
import "./BPOPricing.css";
import { FaCheck } from "react-icons/fa";
import API_URL from "../../Api/Api"; // ✅ axios instance

const BPOPricing = () => {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);

  /* ================= FETCH BPO PRICES ================= */

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await API_URL.get("/bpo-prices");
        setPlans(res.data || []);
      } catch (error) {
        console.error("Error fetching BPO pricing:", error);
      }
    };

    fetchPlans();
  }, []);

  const getPrice = (price) =>
    yearly ? Math.round(price * 12 * 0.85) : price;

  return (
    <section className="bpo-section">
      {/* Header */}
      <div className="bpo-header">
        <span className="bpo-tag">[ BEST PRICING ]</span>
        <h2>
          Pricing Plans to Find the <br /> Right IT Support
        </h2>

        {/* Toggle */}
        <div className="bpo-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>

          <div
            className={`bpo-switch ${yearly ? "yearly" : ""}`}
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
      <div className="bpo-grid">
        {plans.map((plan, i) => (
          <div
            key={plan._id || i}
            className={`bpo-card ${plan.featured ? "featured" : ""}`}
          >
            {/* 🔥 UI EXACT SAME */}
            <h3>{plan.name || plan.title}</h3>
            <p className="bpo-sub">{plan.desc || plan.category}</p>

            <h1>
              ₹{getPrice(plan.monthly || plan.price)}
              <span>{yearly ? "/per year" : "/per month"}</span>
            </h1>

            <button
              className={`bpo-btn ${
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

export default BPOPricing;