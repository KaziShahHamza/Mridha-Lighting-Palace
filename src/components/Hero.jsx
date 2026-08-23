import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-image"></div>
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-inner">

          <div className="hero-label">
            <span className="hero-label-line"></span>
            <span>MRIDHA LIGHTING PALACE</span>
          </div>

          <h1 className="hero-title">
            Lighting That
            <br />
            <span>Shapes Spaces.</span>
          </h1>

          <p className="hero-description">
            Premium lighting solutions designed to transform residential,
            commercial and architectural spaces with light, character and
            distinction.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="hero-button hero-button-primary">
              Explore Products
              <span>↗</span>
            </Link>

            <Link to="/contact" className="hero-button hero-button-secondary">
              Request a Quote
              <span>↗</span>
            </Link>
          </div>

        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-line"></span>

        <span className="hero-scroll-text">
          Scroll to explore
        </span>
      </div>
    </section>
  );
}

export default Hero;