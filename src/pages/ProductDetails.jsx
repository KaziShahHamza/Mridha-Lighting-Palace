import { Link, useParams } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <main className="product-details">
      <img src={product.image} alt={product.name} />

      <div>
        <p className="eyebrow">{product.category}</p>

        <h1>{product.name}</h1>

        <p className="product-spec">
          Wattage: {product.wattage}
        </p>

        <p>
          A modern lighting solution designed for
          residential and commercial applications.
        </p>

        <button className="button">
          Request Price
        </button>

        <br /><br />

        <Link to="/products">
          ← Back to Products
        </Link>
      </div>
    </main>
  );
}