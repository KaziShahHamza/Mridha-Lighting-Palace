import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import products from "../data/products.json";
import "../styles/pages/products.css";

function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  /*
   * Create category list automatically from products.json.
   * This means you don't need to manually maintain categories here.
   */
  const categories = useMemo(() => {
    const categoryList = products
      .map((product) => product.category)
      .filter(Boolean);

    return ["All", ...new Set(categoryList)];
  }, []);

  /*
   * Filter products based on:
   * 1. Selected category
   * 2. Search term
   */
  const filteredProducts = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory ===  "All" ||
        product.category === activeCategory;

      const searchableText = [
        product.name,
        product.category,
        product.subcategory,
        product.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        search === "" || searchableText.includes(search);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <main className="products-page">

      {/* =====================================================
          PAGE HERO
          ===================================================== */}

      <section className="products-hero">

        <div className="products-hero-image"></div>

        <div className="products-hero-overlay"></div>

        <div className="products-hero-content">

          <div className="products-eyebrow">
            <span></span>
            MLP Collection
          </div>

          <h1>
            Light for
            <br />
            <em>every space.</em>
          </h1>

          <p>
            Explore our collection of residential, decorative,
            commercial, outdoor and industrial lighting solutions.
          </p>

        </div>

        <div className="products-hero-bottom">
          <span>Explore Products</span>

          <div className="products-scroll-line">
            <span></span>
          </div>
        </div>

      </section>


      {/* =====================================================
          PRODUCT CATALOG
          ===================================================== */}

      <section className="products-catalog">

        <div className="products-container">

          {/* =================================================
              CATALOG HEADER
              ================================================= */}

          <div className="products-catalog-header">

            <div className="products-heading">

              <div className="products-eyebrow dark">
                <span></span>
                Our Products
              </div>

              <h2>
                Find the right
                <br />
                <em>light.</em>
              </h2>

            </div>


            <p className="products-catalog-description">
              Browse our lighting collection and discover
              products suited to different spaces, applications
              and environments.
            </p>

          </div>


          {/* =================================================
              SEARCH
              ================================================= */}

          <div className="products-toolbar">

            <div className="products-search">

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                />

                <path d="M16 16L21 21" />
              </svg>

              <input
                type="search"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(event) =>
                  setSearchTerm(event.target.value)
                }
                aria-label="Search products"
              />

              {searchTerm && (
                <button
                  type="button"
                  className="products-search-clear"
                  onClick={() => setSearchTerm("")}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}

            </div>


            <div className="products-count">

              <span>
                {filteredProducts.length}
              </span>

              {filteredProducts.length === 1
                ? " Product"
                : " Products"}

            </div>

          </div>


          {/* =================================================
              CATEGORY FILTERS
              ================================================= */}

          <div
            className="products-filters"
            aria-label="Product categories"
          >

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                className={`products-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>

            ))}

          </div>


          {/* =================================================
              PRODUCT GRID
              ================================================= */}

          {filteredProducts.length > 0 ? (

            <div className="products-grid">

              {filteredProducts.map((product, index) => (

                <ProductCard
                  key={product.id || product.name}
                  product={product}
                  index={index}
                />

              ))}

            </div>

          ) : (

            /* =================================================
               NO RESULTS
               ================================================= */

            <div className="products-empty">

              <div className="products-empty-number">
                00
              </div>

              <h3>
                No products found.
              </h3>

              <p>
                Try another search term or select a
                different category.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setActiveCategory("All");
                }}
              >
                Reset Filters
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
          ===================================================== */}

      <section className="products-cta">

        <div className="products-cta-image"></div>

        <div className="products-cta-overlay"></div>

        <div className="products-cta-content">

          <div className="products-eyebrow">
            <span></span>
            Need Something Specific?
          </div>

          <h2>
            Let's find the
            <br />
            right <em>light.</em>
          </h2>

          <p>
            Can't find what you're looking for?
            Contact MLP for product availability,
            pricing and lighting requirements.
          </p>

          <Link
            to="/contact"
            className="products-cta-button"
          >
            Request a Quote
            <span>↗</span>
          </Link>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function ProductCard({ product, index }) {
  return (
    <article
      className="product-card"
      style={{
        "--product-delay": `${Math.min(index, 7) * 60}ms`,
      }}
    >

      {/* Product image */}

      <div className="product-card-image">

        <img
          src={
            product.image ||
            "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=1000&q=80"
          }
          alt={product.name}
          loading={index < 6 ? "eager" : "lazy"}
        />

        <div className="product-card-image-overlay"></div>

        <span className="product-card-category">
          {product.subcategory || product.category}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="product-card-view"
        >
          View Product
          <span>↗</span>
        </Link>

      </div>


      {/* Product information */}

      <div className="product-card-content">

        <div>

          <span className="product-card-main-category">
            {product.category}
          </span>

          <h3>
            {product.name}
          </h3>

        </div>

        <Link
          to={`/products/${product.id}`}
          className="product-card-arrow"
          aria-label={`View ${product.name}`}
        >
          ↗
        </Link>

      </div>

    </article>
  );
}

export default Products;