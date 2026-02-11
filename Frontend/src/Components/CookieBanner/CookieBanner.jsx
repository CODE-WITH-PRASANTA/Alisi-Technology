import React, { useState, useEffect } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookieAccepted) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-overlay">
      <div className="cookie-container">
        <h2>We use cookies to give you the best possible experience on our website.</h2>

        <p>
          When you visit any website, it may store or retrieve information on your
          browser, mostly in the form of cookies. This information might be about
          you, your preferences or your device and is mostly used to make the site
          work as you expect it to.
        </p>

        <button className="accept-btn" onClick={handleAccept}>
          Accept All Cookies
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
