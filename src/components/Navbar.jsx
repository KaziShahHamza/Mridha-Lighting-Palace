import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./../styles/components/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },

    {
      name: "Products",
      path: "/products",
      dropdown: [
        {
          name: "Indoor Lighting",
          path: "/products?category=Indoor%20Lighting",
        },
        {
          name: "Decorative Lighting",
          path: "/products?category=Decorative%20Lighting",
        },
        {
          name: "Outdoor Lighting",
          path: "/products?category=Outdoor%20Lighting",
        },
        {
          name: "Commercial Lighting",
          path: "/products?category=Commercial%20Lighting",
        },
        {
          name: "Industrial Lighting",
          path: "/products?category=Industrial%20Lighting",
        },
        {
          name: "Switch & Socket",
          path: "/products?category=Switch%20%26%20Socket",
        },
      ],
    },

    { name: "About", path: "/about" },

    // { name: "Projects", path: "/projects" },

    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <span className="brand-logo-main">MLP</span>
          <span className="brand-logo-sub">MRIDHA LIGHT PALACE</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">

          {navLinks.map((link) => {

            if (link.dropdown) {
              return (
                <div
                  key={link.path}
                  className="nav-dropdown"
                >

                  <NavLink
                    to={link.path}
                    end
                    className={({ isActive }) =>
                      `nav-link nav-products-link ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    {link.name}

                    <span className="nav-dropdown-icon">
                      ↓
                    </span>
                  </NavLink>


                  <div className="nav-dropdown-menu">

                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="nav-dropdown-item"
                      >
                        <span>{item.name}</span>
                        <span className="nav-dropdown-arrow">
                          ↗
                        </span>
                      </Link>
                    ))}

                  </div>

                </div>
              );
            }

            return (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.name}
              </NavLink>
            );

          })}


          <Link
            to="/contact"
            className="quote-button"
          >
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

        {navLinks.map((link) => {

          if (link.dropdown) {
            return (
              <div
                key={link.path}
                className={`mobile-products ${
                  productsOpen ? "open" : ""
                }`}
              >

                <button
                  type="button"
                  className="mobile-products-toggle"
                  onClick={() =>
                    setProductsOpen((prev) => !prev)
                  }
                  aria-expanded={productsOpen}
                >
                  <span>Products</span>

                  <span className="mobile-products-toggle-icon">
                    +
                  </span>
                </button>


                <div className="mobile-products-submenu">

                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="mobile-product-category all-products"
                  >
                    <span>All Products</span>
                    <span>↗</span>
                  </Link>

                  {link.dropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={closeMenu}
                      className="mobile-product-category"
                    >
                      <span>{item.name}</span>
                      <span>↗</span>
                    </Link>
                  ))}

                </div>

              </div>
            );
          }

          return (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `mobile-nav-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span>{link.name}</span>
              <span className="mobile-nav-arrow">
                ↗
              </span>
            </NavLink>
          );

        })}


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