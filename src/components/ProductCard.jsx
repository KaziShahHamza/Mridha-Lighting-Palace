import { Link } from "react-router-dom";
import "./../styles/components/product.css";


function ProductCard({ product }) {
  const {
    id,
    name,
    category,
    subcategory,
    image,
    description,
  } = product;

  return (
    <article className="product-card">
      <Link to={`/products/${id}`} className="product-card-image-wrap">
        {image ? (
          <img
            src={image}
            alt={name}
            className="product-card-image"
          />
        ) : (
          <div className="product-card-image-placeholder">
            <span>MLP</span>
          </div>
        )}

        <div className="product-card-overlay">
          <span>View Product ↗</span>
        </div>
      </Link>

      <div className="product-card-content">
        <div className="product-card-meta">
          <span>{category}</span>
          <span>{subcategory}</span>
        </div>

        <h3>
          <Link to={`/products/${id}`}>
            {name}
          </Link>
        </h3>

        <p>
          {description}
        </p>

        <div className="product-card-actions">
          <Link
            to={`/products/${id}`}
            className="product-link"
          >
            View Product
            <span>↗</span>
          </Link>

          <Link
            to="/contact"
            className="product-price-link"
          >
            Request Price
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;