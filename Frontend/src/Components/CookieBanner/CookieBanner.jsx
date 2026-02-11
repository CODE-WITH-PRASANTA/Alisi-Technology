import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const accepted = localStorage.getItem("cookiesAccepted");
      if (accepted === "true") {
        setShowBanner(false);
      } else {
        setShowBanner(true);
      }
    };

    checkCookie();
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
  <div className="cookie-overlay">
    <div className="cookie-container">
      <div className="cookie-text">
        <h2>
          We use cookies to give you the best possible experience on our website.
        </h2>
        <p>
          When you visit any website, it may store or retrieve information on
          your browser, mostly in the form of cookies. This information helps
          improve your experience.
        </p>
      </div>

      <button className="accept-btn" onClick={handleAccept}>
        Accept All Cookies
      </button>
    </div>
  </div>
);

};

export default CookieBanner;
