import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount = 0 }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <header className="sb-navbar">
      <div className="sb-container">
        {}
        <NavLink to="/" className="sb-logo">
          <img src="/seoul-bites-name.png" alt="Seoul Bites Logo" />
        </NavLink>

        {}
        <nav className={`sb-links ${isMobileMenuOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/menu"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Menu
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </NavLink>
        </nav>

        {}
        <div className="sb-actions">
          {}
          <button
            className="icon-btn"
            aria-label="Go to Footer"
            onClick={() =>
              document
                .getElementById("footer")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 20l-3.5-3.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {}
          <NavLink to="/cart" className="icon-btn cart" aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M6 8h12l-1 11H7L6 8z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M9 8a3 3 0 0 1 6 0"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </NavLink>

          {}
          <Link to="/blog">
            <button className="icon-btn" aria-label="Account">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <circle
                  cx="12"
                  cy="8"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M4 20a8 8 0 0 1 16 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </button>
          </Link>
        </div>

        {}
        <button
          className="icon-btn sb-burger"
          aria-label="Open menu"
          onClick={toggleMobileMenu}
        >
          <svg width="22" height="22" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
