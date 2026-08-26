import { useState } from "react";
import "../styles/pages/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      Frontend-only for now.

      Later this can be connected to:
      - Form backend
      - Email service
      - WhatsApp
      - PHP/API endpoint
    */

    console.log("MLP inquiry:", formData);
  };

  return (
    <main className="contact-page">

      {/* =====================================================
          CONTACT HERO
          ===================================================== */}

      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <div className="contact-eyebrow">
            <span></span>
            Get In Touch
          </div>

          <h1>
            Let's talk about
            <br />
            <em>your space.</em>
          </h1>

          <p>
            Have a product requirement, project inquiry or simply
            need help finding the right lighting solution?
            Get in touch with Mridha Lighting Palace.
          </p>

        </div>

        <div className="contact-hero-bottom">
          <span>Contact MLP</span>

          <div className="contact-scroll-line">
            <span></span>
          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT INFORMATION + FORM
          ===================================================== */}

      <section className="contact-main">

        <div className="contact-container contact-main-grid">

          {/* -----------------------------------------------
              LEFT — INFORMATION
              ----------------------------------------------- */}

          <div className="contact-info">

            <div className="contact-eyebrow dark">
              <span></span>
              Contact Information
            </div>

            <h2>
              We're here to
              <br />
              <em>help.</em>
            </h2>

            <p className="contact-intro">
              Whether you're looking for a specific lighting
              product or planning a larger project, reach out
              to our team and tell us what you need.
            </p>


            {/* Phone */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                TEL
              </div>

              <div>
                <span>Phone</span>

                <a href="tel:+8801674332510">
                  01674-332510
                </a>

                <a href="tel:+8801865332881">
                  01865-332881
                </a>
              </div>

            </div>


            {/* WhatsApp */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                WA
              </div>

              <div>
                <span>WhatsApp</span>

                <a
                  href="https://wa.me/8801674332510"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat with us
                </a>
              </div>

            </div>


            {/* Email */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                @
              </div>

              <div>
                <span>Email</span>

                <a href="mailto:mlpnimo@gmail.com">
                  mlpnimo@gmail.com
                </a>
              </div>

            </div>


            {/* Business Hours */}

            <div className="contact-hours">

              <span className="contact-hours-label">
                Business Hours
              </span>

              <div className="contact-hours-row">
                <span>Saturday — Thursday</span>
                <span>10:00 AM — 8:00 PM</span>
              </div>

              <div className="contact-hours-row">
                <span>Friday</span>
                <span>Closed</span>
              </div>

            </div>

          </div>


          {/* -----------------------------------------------
              RIGHT — FORM
              ----------------------------------------------- */}

          <div className="contact-form-wrapper">

            <div className="contact-form-header">

              <span>Send an Inquiry</span>

              <p>
                Tell us a little about what you're looking for.
              </p>

            </div>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="contact-form-row">

                <div className="contact-field">
                  <label htmlFor="name">
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>


              <div className="contact-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>


              <div className="contact-field">

                <label htmlFor="subject">
                  Inquiry Type
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select an option
                  </option>

                  <option value="product">
                    Product Inquiry
                  </option>

                  <option value="price">
                    Request Product Price
                  </option>

                  <option value="project">
                    Project / Bulk Requirement
                  </option>

                  <option value="general">
                    General Inquiry
                  </option>
                </select>

              </div>


              <div className="contact-field">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell us what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="contact-submit"
              >
                Send Inquiry
                <span>↗</span>
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOCATIONS
          ===================================================== */}

      <section className="contact-locations">

        <div className="contact-container">

          <div className="contact-location-header">

            <div className="contact-eyebrow dark">
              <span></span>
              Our Locations
            </div>

            <h2>
              Find
              <br />
              <em>MLP.</em>
            </h2>

          </div>


          <div className="contact-location-grid">

            {/* Warehouse */}

            <article className="contact-location-card">

              <div className="location-card-top">

                <span className="location-number">
                  01
                </span>

                <span className="location-type">
                  Warehouse
                </span>

              </div>

              <h3>
                Mridha House
              </h3>

              <p>
                Suvadda Purbopara,
                <br />
                Suvadda, South Keraniganj,
                <br />
                Dhaka-1310, Bangladesh.
              </p>

              <a
                href="https://maps.app.goo.gl/Wi28612LSp6gfXb19"
                target="_blank"
                rel="noreferrer"
                className="location-map-link"
              >
                View on Google Maps
                <span>↗</span>
              </a>

            </article>


            {/* Office */}

            <article className="contact-location-card">

              <div className="location-card-top">

                <span className="location-number">
                  02
                </span>

                <span className="location-type">
                  Office
                </span>

              </div>

              <h3>
                Mridha Lighting Palace
              </h3>

              <p>
                19/1, Naya Paltan,
                <br />
                Paltan PS,
                <br />
                Dhaka-1000, Bangladesh.
              </p>

              <a
                href="https://maps.app.goo.gl/Wi28612LSp6gfXb19"
                target="_blank"
                rel="noreferrer"
                className="location-map-link"
              >
                View on Google Maps
                <span>↗</span>
              </a>

            </article>

          </div>

        </div>

      </section>


      {/* =====================================================
          GOOGLE MAPS
          ===================================================== */}

      <section className="contact-map-section">
{/* 
        <div className="contact-map-header">

          <div className="contact-eyebrow">
            <span></span>
            Find Us
          </div>

          <h2>
            Visit
            <br />
            <em>MLP.</em>
          </h2>

        </div> */}


        {/* 
          GOOGLE MAPS EMBED PLACEHOLDER

          The actual Google Maps embed/pin will be added
          when the required embed information is provided.

          Do NOT replace this with guessed coordinates.
        */}

        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7293020240786!2d90.4094007745012!3d23.72135898989224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9002a981971%3A0x97bd703b624ffafd!2sMridha%20Light%20Palace!5e0!3m2!1sen!2sbd!4v1787529133603!5m2!1sen!2sbd"
            title="Mridha Lighting Palace Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>

      </section>


      {/* =====================================================
          FINAL CTA
          ===================================================== */}

      <section className="contact-final-cta">

        <div className="contact-final-cta-content">

          <div className="contact-eyebrow dark">
            <span></span>
            Start a Conversation
          </div>

          <h2>
            Have a lighting
            <br />
            <em>requirement?</em>
          </h2>

          <p>
            Tell us what you're looking for and we'll be happy
            to hear about your requirement.
          </p>

          <div className="contact-final-actions">

            <a
              href="tel:+8801674332510"
              className="contact-dark-button"
            >
              Call MLP
              <span>↗</span>
            </a>

            <a
              href="https://wa.me/8801674332510"
              target="_blank"
              rel="noreferrer"
              className="contact-gold-button"
            >
              WhatsApp
              <span>↗</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;