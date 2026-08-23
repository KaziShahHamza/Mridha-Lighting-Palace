import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import ProductCard from "../components/ProductCard";
import SectionHeading from "../components/SectionHeading";
import ImageSection from "../components/ImageSection";
import WhyChooseMLP from "../components/WhyChooseMLP";
import QuoteCTA from "../components/QuoteCTA";

import products from "../data/products.json";

function Home() {
  const featuredProducts = products.slice(0, 6);

  const categories = [
    {
      title: "Indoor Lighting",
      category: "Indoor Lighting",
      description:
        "Clean, functional lighting designed for contemporary interiors.",
      image:
        "https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Decorative Lighting",
      category: "Decorative Lighting",
      description:
        "Statement pieces that bring atmosphere, character and warmth.",
      image:
        "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Outdoor Lighting",
      category: "Outdoor Lighting",
      description:
        "Lighting solutions for streets, gardens, landscapes and exterior spaces.",
      image:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=85",
    },
    {
      title: "Commercial & Industrial",
      category: "Commercial Lighting",
      description:
        "Reliable illumination for demanding commercial and industrial environments.",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  return (
    <div className="home-page">

      <Hero />

      {/* =====================================
          PRODUCT CATEGORIES
          ===================================== */}

      <section className="categories-section">
        <div className="categories-container">

          <SectionHeading
            eyebrow="Explore MLP"
            title="Lighting for every vision."
            description="Discover lighting collections created for different spaces, moods and architectural requirements."
          />

          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.title}
                {...category}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =====================================
          FEATURED PRODUCTS
          ===================================== */}

      <section className="featured-section">
        <div className="featured-container">

          <div className="featured-header">
            <SectionHeading
              eyebrow="Featured Collection"
              title="Selected for your space."
              description="Explore a selection from the MLP lighting collection."
            />

            <Link
              to="/products"
              className="section-view-all"
            >
              View All Products
              <span>↗</span>
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =====================================
          LIGHTING FOR EVERY SPACE
          ===================================== */}

      <ImageSection />


      {/* =====================================
          WHY CHOOSE MLP
          ===================================== */}

      <WhyChooseMLP />


      {/* =====================================
          FINAL CTA
          ===================================== */}

      <QuoteCTA />

    </div>
  );
}

export default Home;