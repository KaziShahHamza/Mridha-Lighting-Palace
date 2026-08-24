import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    // { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-logo-main">MLP</span>
          <span className="brand-logo-sub">MRIDHA LIGHTING PALACE</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/contact" className="quote-button">
            Request a Quote
            <span className="quote-arrow">↗</span>
          </Link>
        </nav>

        <button
          className={`mobile-menu-button ${menuOpen ? "active" : ""}`}
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`mobile-navigation ${menuOpen ? "open" : ""}`}
      >
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${isActive ? "active" : ""}`
              }
            >
              <span>{link.name}</span>
              <span className="mobile-nav-arrow">↗</span>
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="mobile-quote-button"
            onClick={closeMenu}
          >
            Request a Quote
            <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;