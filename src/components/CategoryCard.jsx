import { Link } from "react-router-dom";

function CategoryCard({ title, description, image, category }) {
  return (
    <Link
      to={`/products?category=${encodeURIComponent(category)}`}
      className="category-card"
    >
      <div
        className="category-card-image"
        style={{ backgroundImage: `url("${image}")` }}
      />

      <div className="category-card-overlay"></div>

      <div className="category-card-content">
        <span className="category-card-number">
          {category}
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        <span className="category-card-link">
          Explore Collection
          <span>↗</span>
        </span>
      </div>
    </Link>
  );
}

export default CategoryCard;