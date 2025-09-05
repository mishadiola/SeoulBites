import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer" className="sb-footer">
      <div className="footer-container">
        {}
        <div className="footer-logo">
          <img src="/seoul-bites-name.png" alt="Seoul Bites Logo" />
          <p>Authentic Korean flavors, one bite at a time.</p>
        </div>

        {}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Dasmariñas, Cavite, Philippines</p>
          <p>+63 912 345 6789</p>
          <p>seoulbites@gmail.com</p>
        </div>

        {}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>
          </div>
        </div>
      </div>

      {}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Seoul Bites. All rights reserved.</p>
      </div>
    </footer>
  );
}
