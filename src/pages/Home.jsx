import { Link } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">MRIDHA LIGHTING PALACE</p>

          <h1>
            Lighting That
            <br />
            Defines Your Space
          </h1>

          <p>
            Modern lighting solutions for homes,
            offices and commercial spaces.
          </p>

          <Link to="/products" className="button">
            Explore Products
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">OUR COLLECTION</p>
          <h2>Featured Products</h2>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        <div className="center">
          <Link to="/products" className="button">
            View All Products
          </Link>
        </div>
      </section>

      <section className="about" id="about">
        <p className="eyebrow">ABOUT US</p>
        <h2>Lighting Solutions for Every Space</h2>
        <p>
          Mridha Lighting Palace provides modern and
          reliable lighting solutions for residential,
          commercial and decorative applications.
        </p>
      </section>

      <section className="contact" id="contact">
        <h2>Looking for the right lighting?</h2>
        <p>Contact us for product information and pricing.</p>
        <a href="tel:+8800000000000" className="button">
          Contact Us
        </a>
      </section>
    </>
  );
}