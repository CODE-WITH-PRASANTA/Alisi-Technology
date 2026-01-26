import React, { useState } from "react";
import "./Navbar.css";
import {
  FaBolt,
  FaClock,
  FaCog,
  FaBars,
  FaTimes,
  FaArrowRight,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="tm-topbar">
        <div className="tm-top-left">
          <FaBolt />
          <span>
            Fast & Reliable IT Solution Services.
            <a href="#"> Join Now ↗</a>
          </span>
        </div>

        <div className="tm-top-right">
          <span>
            <FaClock /> 9 am to 6 pm [mon-sat]
          </span>
          <span>
            <FaCog /> Support
          </span>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="tm-navbar">
        <div className="tm-navbar-container">
          {/* Logo */}
          <div className="tm-logo">
            <div className="tm-logo-icon">T</div>
            <span>Tekmino</span>
          </div>

          {/* Desktop Menu */}
          <nav className="tm-menu">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="tm-actions">
            <button className="cta-btn">
              Get Started <FaArrowRight />
            </button>

            {/* Mobile Toggle */}
            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`tm-mobile-menu ${open ? "show" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </header>
    </>
  );
};

export default Navbar;
