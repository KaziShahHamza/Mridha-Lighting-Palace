import { Link } from "react-router-dom";
import "./../styles/components/mlp-featured.css";

function FeaturedProductCard({ product }) {
  const {
    id,
    name,
    category,
    subcategory,
    image,
    description,
  } = product;

  return (
    <article className="mlp-featured-card">

      {/* Product Image */}
      <Link
        to={`/products/${id}`}
        className="mlp-featured-image-wrap"
      >
        {image ? (
          <img
            src={image}
            alt={name}
            className="mlp-featured-image"
          />
        ) : (
          <div className="mlp-featured-image-placeholder">
            <span>MLP</span>
          </div>
        )}

        <div className="mlp-featured-overlay">
          <span>View Product ↗</span>
        </div>
      </Link>

      {/* Product Information */}
      <div className="mlp-featured-content">

        {/* Category + Name in same row */}
        <div className="mlp-featured-title-block">

          <div className="mlp-featured-meta">
            <span>{category}</span>
            {/* <span>{subcategory}</span> */}
          </div>

          <h3 className="mlp-featured-name">
            <Link to={`/products/${id}`}>
              {name}
            </Link>
          </h3>

        </div>

        {/* Description */}
        {/* <p className="mlp-featured-description">
          {description}
        </p> */}

        {/* Actions */}
        <div className="mlp-featured-actions">

          <Link
            to={`/products/${id}`}
            className="mlp-featured-product-link"
          >
            View Product
            <span>↗</span>
          </Link>

          <Link
            to="/contact"
            className="mlp-featured-price-link"
          >
            Request Price
          </Link>

        </div>

      </div>
    </article>
  );
}


function FeaturedProducts({ featuredProducts }) {
  return (
    <section className="mlp-featured-section">

      <div className="mlp-featured-container">

        {/* Header */}
        <div className="mlp-featured-header">

          <div className="mlp-featured-heading">

            <span className="mlp-featured-eyebrow">
              Featured Collection
            </span>

            <h2 className="mlp-featured-title">
              Selected for your space.
            </h2>

            <p className="mlp-featured-subtitle">
              Explore a selection from the MLP lighting collection.
            </p>

          </div>

          <Link
            to="/products"
            className="mlp-featured-view-all"
          >
            View All Products
            <span>↗</span>
          </Link>

        </div>


        {/* Products */}
        <div className="mlp-featured-grid">

          {featuredProducts.map((product) => (
            <FeaturedProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;