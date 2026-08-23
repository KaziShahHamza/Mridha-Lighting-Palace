import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <div className="product-info">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.wattage}</p>

        <Link to={`/products/${product.id}`}>
          View Product
        </Link>
      </div>
    </div>
  );
}