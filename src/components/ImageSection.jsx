import { Link } from "react-router-dom";

function ImageSection() {
  return (
    <section className="space-section">
      <div className="space-image">
        <div className="space-image-overlay"></div>

        <div className="space-image-label">
          MLP / SPACES
        </div>
      </div>

      <div className="space-content">
        <div className="section-eyebrow">
          <span></span>
          Lighting for Every Space
        </div>

        <h2>
          Light that belongs
          <br />
          <em>where you live.</em>
        </h2>

        <p>
          From intimate residential interiors to large commercial
          environments, MLP lighting solutions are designed to complement
          the architecture and atmosphere of every space.
        </p>

        <div className="space-list">
          <div>
            <span>01</span>
            <strong>Residential</strong>
          </div>

          <div>
            <span>02</span>
            <strong>Commercial</strong>
          </div>

          <div>
            <span>03</span>
            <strong>Outdoor & Landscape</strong>
          </div>

          <div>
            <span>04</span>
            <strong>Industrial</strong>
          </div>
        </div>

        <Link to="/products" className="dark-section-button">
          Explore All Lighting
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default ImageSection;