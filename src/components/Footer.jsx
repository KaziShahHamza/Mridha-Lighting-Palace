import { Link } from "react-router-dom";

import "./../styles/components/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const productCategories = [
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
  ];

  const googleMapsUrl =
    "https://maps.app.goo.gl/Wi28612LSp6gfXb19";

  const phoneNumbers = [
    "+880 1674-332510",
    "+880 1865-332881",
  ];

  return (
    <footer className="site-footer">

      {/* =====================================================
          FOOTER MAIN
          ===================================================== */}

      <div className="footer-main">

        <div className="footer-container">

          {/* =================================================
              BRAND
              ================================================= */}

          <div className="footer-brand">

            <Link
              to="/"
              className="footer-logo"
            >
              <span className="footer-logo-main">
                MLP
              </span>

              <span className="footer-logo-sub">
                MRIDHA LIGHT PALACE
              </span>
            </Link>

            <p className="footer-description">
              Premium lighting solutions for residential,
              commercial, decorative, outdoor and
              industrial spaces.
            </p>

            <Link
              to="/contact"
              className="footer-cta"
            >
              Get in Touch
              <span>↗</span>
            </Link>

          </div>


          {/* =================================================
              NAVIGATION
              ================================================= */}

          <div className="footer-column">

            <h3>Navigation</h3>

            <ul>

              <li>
                <Link to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/products">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* =================================================
              PRODUCTS
              ================================================= */}

          <div className="footer-column">

            <h3>Products</h3>

            <ul>

              {productCategories.map((category) => (

                <li key={category.name}>

                  <Link to={category.path}>
                    {category.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>


          {/* =================================================
              CONTACT
              ================================================= */}

          <div className="footer-column footer-contact">

            <h3>Contact</h3>

            <ul>

              {/* PHONE */}

              <li>

                <span>Phone</span>

                {phoneNumbers.map((number) => (

                  <a
                    key={number}
                    href={`tel:${number.replace(
                      /[^0-9+]/g,
                      ""
                    )}`}
                  >
                    {number}
                  </a>

                ))}

              </li>


              {/* EMAIL */}

              <li>

                <span>Email</span>

                <a
                  href="mailto:mlpnimo@gmail.com"
                >
                  mlpnimo@gmail.com
                </a>

              </li>


              {/* ADDRESS */}

              <li>

                <span>Office Address</span>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  19/1, Naya Paltan, Paltan PS,
                  Dhaka-1000, Bangladesh.
                </a>

              </li>

            </ul>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
          ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {year} Mridha Light Palace.
            All rights reserved.
          </p>


          {/* <div className="footer-socials">


            <span
              className="footer-social-disabled"
              aria-label="Facebook"
            >
              Facebook
            </span>



            <a
              href="https://wa.me/8801674332510"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>

          </div> */}

        </div>

      </div>

    </footer>
  );
}

export default Footer;