import React, { useState, useEffect } from "react";
import "./NSPricing.css";
import { FaCheck } from "react-icons/fa";
import API_URL from "../../Api/Api"; // ✅ axios instance

const NSPricing = () => {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);

  /* ================= FETCH NETWORK PRICES ================= */

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await API_URL.get("/network-prices");
        setPlans(res.data || []);
      } catch (error) {
        console.error("Error fetching Network pricing:", error);
      }
    };

    fetchPlans();
  }, []);

  const getPrice = (price) =>
    yearly ? Math.round(price * 12 * 0.85) : price;

  return (
    <section className="nsp-section">
      {/* Header */}
      <div className="nsp-header">
        <span className="nsp-tag">[ BEST PRICING ]</span>
        <h2>
          Pricing Plans to Find the <br /> Right IT Support
        </h2>

        {/* Toggle */}
        <div className="nsp-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>

          <div
            className={`nsp-switch ${yearly ? "yearly" : ""}`}
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
      <div className="nsp-grid">
        {plans.map((plan, i) => (
          <div
            key={plan._id || i}
            className={`nsp-card ${plan.featured ? "featured" : ""}`}
          >
            <h3>{plan.name || plan.title}</h3>
            <p className="nsp-sub">
              {plan.desc || plan.category}
            </p>

            <h1>
              ₹{getPrice(plan.monthly || plan.price)}
              <span>{yearly ? "/per year" : "/per month"}</span>
            </h1>

            <button
              className={`nsp-btn ${
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

export default NSPricing;