import Hero from "../components/Hero";
import CategoryCard from "../components/CategoryCard";
import FeaturedProducts from "../components/FeaturedProducts";
import SectionHeading from "../components/SectionHeading";
import ImageSection from "../components/ImageSection";
import WhyChooseMLP from "../components/WhyChooseMLP";
import QuoteCTA from "../components/QuoteCTA";

import products from "../data/products.json";

import "../styles/pages/home.css";


function Home() {

  /* =====================================
     MANUALLY SELECTED FEATURED PRODUCTS
     ===================================== */

  const featuredProductIds = [
  "surface-panel-24-48w",
  "sport-1014-10-20w",
  "modern-chandelier",
  "gg030g1-ww-blue",
  "h802-track-spot",
  "magnetic-linear-light",
  "ufo-high-bay",
  "h309-led-track-spot",
  "mg-115",
  "d01-street-light",
  "td0-02-7-12w",
  "mz-13-7-12w"
  ];

  const featuredProducts = featuredProductIds
    .map((id) =>
      products.find((product) => product.id === id)
    )
    .filter(Boolean);


  const categories = [
    {
      title: "Indoor Lighting",
      category: "Indoor Lighting",
      description:
        "Clean, functional lighting designed for contemporary interiors.",
      image:
        "https://www.illawarramercury.com.au/images/transform/v1/crop/frm/rosie.ryan%40fairfaxmedia.com.au/39592f73-64b2-44fb-9b1c-58e77ccb5c67.png/r0_21_1163_716_w1200_h678_fmax.jpg",
    },
    {
      title: "Decorative Lighting",
      category: "Decorative Lighting",
      description:
        "Statement pieces that bring atmosphere, character and warmth.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFTz5rG89CqGppK8x9A0Uxu8_JyfKuP5DBjtbGGiCelQ9II2FHgajnGuU&s=10",
    },
    {
      title: "Outdoor Lighting",
      category: "Outdoor Lighting",
      description:
        "Lighting solutions for streets, gardens, landscapes and exterior spaces.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD-epoNGs2z_KP0VFEzIGci1SW8T9wzDG2GGaEbsafdtQz8i21LljbAeA&s=10",
    },
    {
      title: "Commercial & Industrial",
      category: "Commercial Lighting",
      description:
        "Reliable illumination for demanding commercial and industrial environments.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJW34EW-8xJC-tB44Vppyqv5UZoCrmD_QUATWVRr6ISoF11YyOWz4GuUQ&s=10",
    },
  ];


  return (
    <div className="home-page">

      {/* =====================================
          HERO
          ===================================== */}

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

      <FeaturedProducts
        featuredProducts={featuredProducts}
      />


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