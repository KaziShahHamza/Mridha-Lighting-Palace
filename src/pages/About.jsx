import { Link } from "react-router-dom";
import "../styles/pages/about.css";

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          ABOUT HERO
          ========================================= */}

      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <div className="about-eyebrow">
            <span></span>
            Mridha Lighting Palace
          </div>

          <h1>
            Bringing spaces
            <br />
            <em>to life with light.</em>
          </h1>

          <p>
            Lighting solutions for homes, businesses and spaces
            that deserve thoughtful illumination.
          </p>
        </div>

        <div className="about-hero-bottom">
          <span>About MLP</span>

          <div className="about-scroll-line">
            <span></span>
          </div>
        </div>
      </section>


      {/* =========================================
          COMPANY INTRODUCTION
          ========================================= */}

      <section className="about-intro">
        <div className="about-container about-intro-grid">

          <div className="about-intro-label">
            <span>01</span>
            Who We Are
          </div>

          <div className="about-intro-content">
            <div className="about-eyebrow dark">
              <span></span>
              About Mridha Lighting Palace
            </div>

            <h2>
              Lighting that
              <br />
              <em>shapes atmosphere.</em>
            </h2>

            <p className="about-lead">
              Mridha Lighting Palace is a Bangladesh-based lighting
              business offering lighting solutions for residential,
              decorative, commercial, outdoor and industrial spaces.
            </p>

            <p>
              Our collection brings together practical lighting
              solutions and contemporary designs for different
              environments and requirements. From everyday interior
              lighting to larger commercial and outdoor applications,
              we aim to make choosing the right light simpler.
            </p>

            <p>
              We believe lighting should work with a space rather
              than simply occupy it. The right fixture, placement
              and character can influence how an environment feels,
              functions and comes together.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================
          LARGE IMAGE STATEMENT
          ========================================= */}

      <section className="about-image-statement">
        <div className="about-image-statement-bg"></div>

        <div className="about-image-statement-overlay"></div>

        <div className="about-image-statement-content">
          <span>THE MLP APPROACH</span>

          <h2>
            Light is not
            <br />
            just illumination.
          </h2>

          <p>
            It is part of the architecture, the mood and the
            experience of a space.
          </p>
        </div>
      </section>


      {/* =========================================
          LIGHTING PHILOSOPHY
          ========================================= */}

      <section className="about-philosophy">
        <div className="about-container">

          <div className="about-philosophy-header">
            <div className="about-eyebrow dark">
              <span></span>
              Our Philosophy
            </div>

            <h2>
              Designed around
              <br />
              <em>the way spaces feel.</em>
            </h2>
          </div>

          <div className="about-philosophy-grid">

            <article className="philosophy-item">
              <span className="philosophy-number">01</span>

              <div>
                <h3>Function first</h3>

                <p>
                  Good lighting needs to perform. We consider the
                  purpose of a space and the type of illumination
                  it requires before focusing on appearance alone.
                </p>
              </div>
            </article>

            <article className="philosophy-item">
              <span className="philosophy-number">02</span>

              <div>
                <h3>Visual harmony</h3>

                <p>
                  Lighting fixtures become part of an interior or
                  exterior environment. We value designs that work
                  naturally with the character of their surroundings.
                </p>
              </div>
            </article>

            <article className="philosophy-item">
              <span className="philosophy-number">03</span>

              <div>
                <h3>Practical choices</h3>

                <p>
                  Different spaces need different solutions. Our
                  collection covers a broad range of lighting types
                  for residential, commercial, outdoor and industrial
                  applications.
                </p>
              </div>
            </article>

            <article className="philosophy-item">
              <span className="philosophy-number">04</span>

              <div>
                <h3>Considered details</h3>

                <p>
                  From the form of a fixture to the quality of the
                  light it produces, details matter when creating a
                  cohesive lighting environment.
                </p>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* =========================================
          IMAGE + TEXT
          ========================================= */}

      <section className="about-feature">

        <div className="about-feature-image about-feature-image-one">
          <div className="about-feature-image-label">
            MLP / INTERIOR
          </div>
        </div>

        <div className="about-feature-content">
          <div className="about-eyebrow dark">
            <span></span>
            Lighting for Spaces
          </div>

          <h2>
            From intimate
            <br />
            <em>to expansive.</em>
          </h2>

          <p>
            Every environment presents a different lighting
            challenge. A home may call for warmth and subtle
            ambience, while a commercial or industrial environment
            may demand clear, dependable illumination.
          </p>

          <p>
            MLP's product collection is designed around these
            different needs, giving customers a range of options
            to explore for their particular space.
          </p>

          <Link to="/products" className="about-dark-button">
            Explore Our Products
            <span>↗</span>
          </Link>
        </div>

      </section>


      {/* =========================================
          QUALITY + CUSTOMER SERVICE
          ========================================= */}

      <section className="about-service">

        <div className="about-service-image">
          <div className="about-service-image-overlay"></div>
        </div>

        <div className="about-service-content">

          <div className="about-eyebrow">
            <span></span>
            Our Commitment
          </div>

          <h2>
            The right product
            <br />
            <em>starts with understanding.</em>
          </h2>

          <p>
            Choosing lighting is not always about finding the
            brightest fixture or the most decorative design.
            It is about understanding the space, the application
            and the atmosphere you want to create.
          </p>

          <div className="service-points">

            <div className="service-point">
              <span>01</span>

              <div>
                <h3>Understand the space</h3>

                <p>
                  Consider the environment, purpose and lighting
                  requirements before choosing a product.
                </p>
              </div>
            </div>

            <div className="service-point">
              <span>02</span>

              <div>
                <h3>Explore the right solution</h3>

                <p>
                  Browse different lighting types and find an
                  option appropriate for the intended application.
                </p>
              </div>
            </div>

            <div className="service-point">
              <span>03</span>

              <div>
                <h3>Talk to our team</h3>

                <p>
                  For product or project requirements, get in
                  touch with MLP to discuss what you need.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VISUAL STATEMENT
          ========================================= */}

      <section className="about-gallery-statement">

        <div className="about-gallery-main"></div>

        <div className="about-gallery-small"></div>

        <div className="about-gallery-copy">
          <span>LIGHTING / ARCHITECTURE / SPACE</span>

          <h2>
            Create an atmosphere
            <br />
            worth experiencing.
          </h2>
        </div>

      </section>


      {/* =========================================
          CTA
          ========================================= */}

      <section className="about-cta">

        <div className="about-cta-bg"></div>
        <div className="about-cta-overlay"></div>

        <div className="about-cta-content">

          <div className="about-eyebrow">
            <span></span>
            Let's Work Together
          </div>

          <h2>
            Have a space
            <br />
            <em>in mind?</em>
          </h2>

          <p>
            Explore our lighting collection or get in touch with
            MLP about your residential, commercial or project
            requirements.
          </p>

          <div className="about-cta-actions">

            <Link
              to="/products"
              className="about-outline-button"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="about-gold-button"
            >
              Request a Quote
              <span>↗</span>
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;