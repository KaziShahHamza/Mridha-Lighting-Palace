import products from "../data/products.json";
import ProductCard from "../components/ProductCard";

export default function Products() {
  return (
    <main className="section products-page">
      <div className="section-heading">
        <p className="eyebrow">OUR PRODUCTS</p>
        <h1>Lighting Collection</h1>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}