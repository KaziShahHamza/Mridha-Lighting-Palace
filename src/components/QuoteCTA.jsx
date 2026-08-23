import { Link } from "react-router-dom";
import "./../styles/components/quote-cta.css";


function QuoteCTA() {
  return (
    <section className="quote-section">
      <div className="quote-background">
        <div className="quote-overlay"></div>
      </div>

      <div className="quote-content">
        <div className="section-eyebrow quote-eyebrow">
          <span></span>
          Start Your Project
        </div>

        <h2>
          Let's create
          <br />
          <em>something brilliant.</em>
        </h2>

        <p>
          Looking for the right lighting for your home, business or
          next project? Talk to MLP and find the right solution for
          your space.
        </p>

        <Link to="/contact" className="quote-large-button">
          Request a Quote
          <span>↗</span>
        </Link>
      </div>
    </section>
  );
}

export default QuoteCTA;