import React, { useEffect, useState } from "react";
import {
  FaHandshake,
  FaTrophy,
  FaUsers,
  FaChartLine
} from "react-icons/fa";
import "./Aboutbox.css";

const statsData = [
  {
    icon: <FaHandshake />,
    value: 1000,
    suffix: "+",
    label: "Engaged Customers"
  },
  {
    icon: <FaTrophy />,
    value: 99,
    suffix: "%",
    label: "Customer Success Stories"
  },
  {
    icon: <FaUsers />,
    value: 80,
    suffix: "+",
    label: "Team of Professionals"
  },
  {
    icon: <FaChartLine />,
    value: 100,
    suffix: "x",
    label: "More Faster Growth"
  }
];

const AnimatedNumber = ({ target, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const stepTime = 20;
    const increment = target / (duration / stepTime);

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  // 🔥 FORMAT NUMBER TO K STYLE (10000 → 10K)
  const formatNumber = (num) => {
    if (num >= 1000) {
      return Math.floor(num / 1000) + "K";
    }
    return num;
  };

  return (
    <span>
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const TechStatsBar = () => {
  return (
    <section className="techstats-wrapper">
      <div className="techstats-container">

        {statsData.map((item, index) => (
          <div className="techstats-box" key={index}>

            <div className="techstats-icon">
              {item.icon}
            </div>

            <h2 className="techstats-number">
              <AnimatedNumber
                target={item.value}
                suffix={item.suffix}
              />
            </h2>

            <p className="techstats-label">
              {item.label}
            </p>

            {index !== statsData.length - 1 && (
              <div className="techstats-divider">
                <span className="techstats-moving-dot"></span>
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
};

export default TechStatsBar;
