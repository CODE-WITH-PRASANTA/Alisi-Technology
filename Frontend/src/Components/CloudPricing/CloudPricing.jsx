import React, { useState, useEffect } from "react";
import "./CloudPricing.css";
import { FaCheck } from "react-icons/fa";
import API_URL from "../../Api/Api"; // ✅ axios instance

const CloudPricing = () => {
  const [yearly, setYearly] = useState(false);
  const [plans, setPlans] = useState([]);

  /* ================= FETCH CLOUD PRICES ================= */

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const res = await API_URL.get("/cloud-prices");
        setPlans(res.data || []);
      } catch (error) {
        console.error("Error fetching Cloud pricing:", error);
      }
    };

    fetchPlans();
  }, []);

  const getPrice = (price) =>
    yearly ? Math.round(price * 12 * 0.85) : price;

  return (
    <section className="cloud-section">
      {/* Header */}
      <div className="cloud-header">
        <span className="cloud-tag">[ BEST PRICING ]</span>
        <h2>
          Pricing Plans to Find the <br /> Right IT Support
        </h2>

        {/* Toggle */}
        <div className="cloud-toggle">
          <span className={!yearly ? "active" : ""}>Monthly</span>

          <div
            className={`cloud-switch ${yearly ? "yearly" : ""}`}
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
      <div className="cloud-grid">
        {plans.map((plan, i) => (
          <div
            key={plan._id || i}
            className={`cloud-card ${plan.featured ? "featured" : ""}`}
          >
            <h3>{plan.name || plan.title}</h3>
            <p className="cloud-sub">{plan.desc || plan.category}</p>

            <h1>
              ₹{getPrice(plan.monthly || plan.price)}
              <span>{yearly ? "/per year" : "/per month"}</span>
            </h1>

            <button
              className={`cloud-btn ${
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

export default CloudPricing;