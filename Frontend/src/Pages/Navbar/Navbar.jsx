import React, { useState } from "react";
import "./Navbar.css";
import {
  FaBolt,
  FaClock,
  FaBars,
  FaTimes,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/logo.png" // ✅ ADD THIS

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

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
        </div>
      </div>

      {/* ================= NAVBAR ================= */}
      <header className="tm-navbar">
        <div className="tm-navbar-container">
          {/* LOGO (IMAGE) */}
          <NavLink to="/" className="tm-logo">
            <img src={logo} alt="Alisi Technology Logo" />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="tm-menu">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>

            <div
              className="tm-dropdown"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button className="tm-dropdown-btn">
                Services <FaChevronDown />
              </button>

              <div className={`tm-dropdown-menu ${serviceOpen ? "show" : ""}`}>
                <NavLink to="/services/all-services">All Services</NavLink>
                <NavLink to="/services/Data-Analytics">AI & Data Analytics</NavLink>
                <NavLink to="/services/Cloud">Cloud</NavLink>
                <NavLink to="/services/Consulting">Consulting</NavLink>
                <NavLink to="/services/Cybersecurity">Cybersecurity</NavLink>
                <NavLink to="/services/Enterprise-Solutions">Enterprise Solutions</NavLink>
                <NavLink to="/services/IoT-Digital-Eng.">IoT & Digital Eng.</NavLink>
                <NavLink to="/services/Sustainability">Sustainability</NavLink>
              </div>
            </div>

            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Actions */}
          <div className="tm-actions">
            <button className="cta-btn">
              Get Started <FaArrowRight />
            </button>

            <button
              className="menu-toggle"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div className={`tm-mobile-menu ${open ? "show" : ""}`}>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>

          <button
            className="tm-mobile-dropdown-btn"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            Services <FaChevronDown />
          </button>

          {serviceOpen && (
            <div className="tm-mobile-submenu">
              <NavLink to="/services" onClick={() => setOpen(false)}>AI & Data</NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)}>Cloud</NavLink>
              <NavLink to="/services" onClick={() => setOpen(false)}>Cybersecurity</NavLink>
            </div>
          )}

          <NavLink to="/projects" onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/blog" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
