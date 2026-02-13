import React from "react";
import "./Footer.css";
import footerBg from "../../Assets/footer-bg.webp";
import logo from "../../Assets/Logo 003.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaArrowUp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="tk-footer"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(11, 13, 11, 0.6),
            rgba(11, 13, 11, 0.6)
          ),
          url(${footerBg})
        `,
      }}
    >
      {/* ================= SUBSCRIBE ================= */}
      <div className="tk-subscribe">
        <h2>
          Don’t Miss Out <br /> the Future!
        </h2>

        <div className="tk-subscribe-right">
          <div className="tk-input-box">
            <input type="email" placeholder="Enter email here..." />
            <button>
              Subscribe Now <span>🔔</span>
            </button>
          </div>

          <div className="tk-social">
            <span>Follow us:</span>
            <FaFacebookF />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </div>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="tk-footer-main">
        {/* Brand */}
        <div className="tk-col">
          <div className="tk-logo">
            <img src={logo} alt="Tekmino Logo" className="tk-logo-icon" />
          </div>

          <p>
            Every great solution start understand the time into learn about.
          </p>
        </div>

        <div className="tk-col">
          <h4>Services</h4>
          <ul>
            <li>Manage IT Service</li>
            <li>Cloud Computing</li>
            <li>Cyber Security</li>
            <li>Software Develop</li>
            <li>Change Manage</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        <div className="tk-col">
          <h4>Resources</h4>
          <ul>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Recognitions</li>
            <li>
              Careers <span className="new">NEW</span>
            </li>
            <li>News</li>
            <li>Feedback</li>
          </ul>
        </div>

        {/* ===== UPDATED CONTACT INFO ===== */}
        <div className="tk-col">
          <h4>Contact Info</h4>

          <p>
            <strong>Corporate Address:</strong>
            <br />
            VILL & PO-RASAPUNJA, PS BISHNUPUR,
            <br />
            Near Rasapunja Panchayat,
            <br />
            South 24 Parganas, West Bengal – 700104
          </p>

          <p>
            <strong>Company No:</strong> + 011-6931-3553
          </p>

          <p>
            <strong>E:</strong>  Alisiltechnology@gmail.com
          </p>

          <p>Mon–Fri 11 AM TO 10 PM</p>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="tk-footer-bottom">
        <span>© 2025 Alisil Technology. All Rights Reserved. | Powered by Alisil Technology | <br />Developed by PR WEBSTOCK</span>
        <div>
          <a href="#">Privacy & Policy</a>
          <a href="#">Terms & Condition</a>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        className="scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
