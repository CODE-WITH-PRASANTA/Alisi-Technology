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
import logo from "../../Assets/Logo 003.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setServiceOpen(false);
  };

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="tm-topbar">
        <div className="tm-top-left">
          <FaBolt />
          <span className="call-strip">
  Fast, reliable cloud solutions.
  <a href="tel:+911169313553"> Call Now ↗</a>
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
          {/* LOGO */}
          <NavLink to="/" className="tm-logo" onClick={closeAll}>
            <img src={logo} alt="Alisi Technology Logo" />
          </NavLink>

          {/* DESKTOP MENU */}
          <nav className="tm-menu">
            <NavLink to="/" end onClick={closeAll}>Home</NavLink>
            <NavLink to="/about" onClick={closeAll}>About</NavLink>

            {/* 🔽 CLICKABLE SERVICES */}
            <div className="tm-dropdown">
              <button
                className="tm-dropdown-btn"
                onClick={() => setServiceOpen(!serviceOpen)}
              >
                Services <FaChevronDown />
              </button>

              <div className={`tm-dropdown-menu ${serviceOpen ? "show" : ""}`}>
                <NavLink to="/services/all-services" onClick={closeAll}>All Services</NavLink>
                <NavLink to="/services/Data-Analytics" onClick={closeAll}>
                  Artificial Intelligence & Data Analytics
                </NavLink>
                <NavLink to="/services/bpo" onClick={closeAll}>BPO Services</NavLink>
                <NavLink to="/services/kpo" onClick={closeAll}>KPO Services</NavLink>
                <NavLink to="/services/Cloud" onClick={closeAll}>Cloud Computing</NavLink>
                <NavLink to="/services/Cognitive" onClick={closeAll}>
                  Cognitive Business Operations
                </NavLink>
                <NavLink to="/services/Consulting" onClick={closeAll}>Consulting</NavLink>
                <NavLink to="/services/Cybersecurity" onClick={closeAll}>Cybersecurity</NavLink>
                <NavLink to="/services/Enterprise-Solutions" onClick={closeAll}>
                  Enterprise Solutions
                </NavLink>
                <NavLink to="/services/IoT-Digital-Eng." onClick={closeAll}>
                  IoT & Digital Engineering
                </NavLink>
                <NavLink to="/services/Network" onClick={closeAll}>
                  Network Solutions & Services
                </NavLink>
                <NavLink to="/services/Sustainability" onClick={closeAll}>
                  Sustainability Services
                </NavLink>
              </div>
            </div>

            <NavLink to="/projects" onClick={closeAll}>Projects</NavLink>
            <NavLink to="/blog" onClick={closeAll}>Blog</NavLink>
            <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>
          </nav>

          {/* ACTIONS */}
          <div className="tm-actions">
           <a href="tel:01169313553" className="cta-btn">
            Call Now (011-6931-3553) <FaArrowRight />
          </a>


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
          <NavLink to="/" onClick={closeAll}>Home</NavLink>
          <NavLink to="/about" onClick={closeAll}>About</NavLink>

          <button
            className="tm-mobile-dropdown-btn"
            onClick={() => setServiceOpen(!serviceOpen)}
          >
            Services <FaChevronDown />
          </button>

          {serviceOpen && (
            <div className="tm-mobile-submenu">
              <NavLink to="/services/all-services" onClick={closeAll}>All Services</NavLink>
              <NavLink to="/services/Data-Analytics" onClick={closeAll}>AI & Data</NavLink>
              <NavLink to="/services/Cloud" onClick={closeAll}>Cloud</NavLink>
              <NavLink to="/services/Cybersecurity" onClick={closeAll}>Cybersecurity</NavLink>
            </div>
          )}

          <NavLink to="/projects" onClick={closeAll}>Projects</NavLink>
          <NavLink to="/blog" onClick={closeAll}>Blog</NavLink>
          <NavLink to="/contact" onClick={closeAll}>Contact</NavLink>
        </div>
      </header>
    </>
  );
};

export default Navbar;
