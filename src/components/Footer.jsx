import { Link } from "react-router-dom";
import "./../styles/components/footer.css";


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-container">

          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-main">MLP</span>
              <span className="footer-logo-sub">
                MRIDHA LIGHTING PALACE
              </span>
            </Link>

            <p className="footer-description">
              Premium lighting solutions for residential, commercial,
              decorative, outdoor and industrial spaces.
            </p>

            <Link to="/contact" className="footer-cta">
              Get in Touch
              <span>↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <h3>Navigation</h3>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {/* <li>
                <Link to="/projects">Projects</Link>
              </li> */}
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Products</h3>

            <ul>
              <li>
                <Link to="/products">Indoor Lighting</Link>
              </li>
              <li>
                <Link to="/products">Decorative Lighting</Link>
              </li>
              <li>
                <Link to="/products">Outdoor Lighting</Link>
              </li>
              <li>
                <Link to="/products">Commercial Lighting</Link>
              </li>
              <li>
                <Link to="/products">Industrial Lighting</Link>
              </li>
              <li>
                <Link to="/products">Electrical</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <ul>
              <li>
                <span>Phone</span>
                <span>01674-332510</span>
                <span>01865-332881</span>
              </li>

              <li>
                <span>Email</span>
                <span>mlpnimo@gmail.com</span>
              </li>

              <li>
                <span>Address</span>
                <span>19/1, Naya Paltan, Paltan PS, Dhaka-1000, Bangladesh.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            © {year} Mridha Lighting Palace. All rights reserved.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              Facebook
            </a>

            {/* <a href="#" aria-label="Instagram">
              Instagram
            </a> */}

            <a href="#" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;