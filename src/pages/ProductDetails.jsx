import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import products from "../data/products.json";
import "../styles/pages/product-details.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  /* ---------------------------------------------------------
     Product not found
     --------------------------------------------------------- */

  if (!product) {
    return (
      <main className="product-details-page">
        <section className="product-not-found">
          <span>404</span>

          <h1>Product not found.</h1>

          <p>
            The product you are looking for may have been
            removed or is currently unavailable.
          </p>

          <Link to="/products" className="product-back-button">
            Back to Products
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="product-details-page">
      <ProductDetailsContent product={product} />
    </main>
  );
}


/* =========================================================
   PRODUCT DETAILS CONTENT
   ========================================================= */

function ProductDetailsContent({ product }) {
    const images = [
      product.image,
      ...(Array.isArray(product.gallery)
        ? product.gallery
        : []),
    ].filter(Boolean);

    const uniqueImages = [...new Set(images)];

    const [activeImage, setActiveImage] = useState(
      uniqueImages[0] || null
    );

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    useEffect(() => {
      setActiveImage(uniqueImages[0] || null);
    }, [product.id]);


    const activeImageIndex = uniqueImages.indexOf(
      activeImage
    );

    const showPreviousImage = () => {
      if (uniqueImages.length <= 1) return;

      const previousIndex =
        activeImageIndex <= 0
          ? uniqueImages.length - 1
          : activeImageIndex - 1;

      setActiveImage(uniqueImages[previousIndex]);
    };

    const showNextImage = () => {
      if (uniqueImages.length <= 1) return;

      const nextIndex =
        activeImageIndex >= uniqueImages.length - 1
          ? 0
          : activeImageIndex + 1;

      setActiveImage(uniqueImages[nextIndex]);
    };

  /* ---------------------------------------------------------
     Related products
     --------------------------------------------------------- */

  const relatedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        (
          item.category === product.category ||
          item.subcategory === product.subcategory
        )
    )
    .slice(0, 4);

  /* ---------------------------------------------------------
     Specifications
     --------------------------------------------------------- */

  const specifications = [
    {
      label: "Wattage",
      value: product.wattage,
    },
    {
      label: "Voltage",
      value: product.voltage,
    },
    {
      label: "Color Temperature",
      value: product.colorTemperature,
    },
    {
      label: "Lumens",
      value: product.lumens,
    },
    {
      label: "CRI",
      value: product.cri,
    },
    {
      label: "Dimensions",
      value: product.dimensions,
    },
    {
      label: "Material",
      value: product.material,
    },
    {
      label: "Warranty",
      value: product.warranty,
    },
  ].filter(
    (spec) =>
      spec.value !== undefined &&
      spec.value !== null &&
      String(spec.value).trim() !== ""
  );

  /* ---------------------------------------------------------
     Applications
     --------------------------------------------------------- */

  const applications = Array.isArray(product.applications)
    ? product.applications.filter(
        (application) =>
          application !== undefined &&
          application !== null &&
          String(application).trim() !== ""
      )
    : [];

  return (
    <>
      {/* =====================================================
          BREADCRUMB
          ===================================================== */}

      <div className="product-details-breadcrumb">
        <div className="product-details-container">

          <Link to="/">Home</Link>

          <span>/</span>

          <Link to="/products">Products</Link>

          <span>/</span>

          <strong>{product.name}</strong>

        </div>
      </div>


      {/* =====================================================
          MAIN PRODUCT SECTION
          ===================================================== */}

      <section className="product-main">

        <div className="product-details-container">

          <div className="product-main-grid">

            {/* =================================================
                IMAGE GALLERY
                ================================================= */}

            <div className="product-gallery">

              <div 
                className="product-gallery-main"
                onClick={() => {
                  if (activeImage) {
                    setIsLightboxOpen(true);
                  }
                }}
                role="button"
                tabIndex={activeImage ? 0 : -1}
                aria-label="Open product image gallery"
                onKeyDown={(event) => {
                  if (
                    activeImage &&
                    (event.key === "Enter" || event.key === " ")
                  ) {
                    setIsLightboxOpen(true);
                  }
                }}
              >

                {activeImage ? (
                  <img
                    key={activeImage}
                    src={activeImage}
                    alt={product.name}
                  />
                ) : (
                  <div className="product-image-placeholder">
                    MLP
                  </div>
                )}

                <span className="product-gallery-label">
                  MLP
                </span>

              </div>


              {uniqueImages.length > 1 && (

                <div className="product-gallery-thumbnails">

                  {uniqueImages.map((image, index) => (

                    <button
                      key={`${image}-${index}`}
                      type="button"
                      className={
                        activeImage === image
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setActiveImage(image)
                      }
                      aria-label={`View product image ${
                        index + 1
                      }`}
                    >
                      <img
                        src={image}
                        alt=""
                      />
                    </button>

                  ))}

                </div>

              )}

            </div>


            {/* =================================================
                PRODUCT INFORMATION
                ================================================= */}

            <div className="product-information">

              <div className="product-details-eyebrow">
                <span></span>

                {product.category}

              </div>

              <h1>
                {product.name}
              </h1>

              {product.subcategory && (
                <div className="product-subcategory">
                  {product.subcategory}
                </div>
              )}

              {product.description && (
                <p className="product-description">
                  {product.description}
                </p>
              )}


              {/* Specifications */}

              {specifications.length > 0 && (

                <div className="product-specifications">

                  <div className="product-section-label">
                    Specifications
                  </div>

                  <div className="product-spec-grid">

                    {specifications.map((spec) => (

                      <div
                        className="product-spec"
                        key={spec.label}
                      >

                        <span>
                          {spec.label}
                        </span>

                        <strong>
                          {spec.value}
                        </strong>

                      </div>

                    ))}

                  </div>

                </div>

              )}


              {/* Applications */}

              {applications.length > 0 && (

                <div className="product-applications">

                  <div className="product-section-label">
                    Applications
                  </div>

                  <div className="product-application-list">

                    {applications.map(
                      (application, index) => (

                        <span
                          key={`${application}-${index}`}
                        >
                          {application}
                        </span>

                      )
                    )}

                  </div>

                </div>

              )}


              {/* CTA */}

              <div className="product-details-actions">

                <Link
                  to="/contact"
                  className="product-request-button"
                >
                  Request Price
                  <span>↗</span>
                </Link>

                <Link
                  to="/contact"
                  className="product-inquiry-link"
                >
                  Have a question about this product?
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RELATED PRODUCTS
          ===================================================== */}

      {relatedProducts.length > 0 && (

        <section className="related-products">

          <div className="product-details-container">

            <div className="related-products-header">

              <div>

                <div className="product-details-eyebrow dark">
                  <span></span>
                  You May Also Like
                </div>

                <h2>
                  Related <em>products.</em>
                </h2>

              </div>

              <Link
                to="/products"
                className="related-view-all"
              >
                View All Products
                <span>↗</span>
              </Link>

            </div>


            <div className="related-products-grid">

              {relatedProducts.map((related) => (

                <Link
                  to={`/products/${related.id}`}
                  className="related-product-card"
                  key={related.id}
                >

                  <div className="related-product-image">

                    {related.image ? (
                      <img
                        src={related.image}
                        alt={related.name}
                        loading="lazy"
                      />
                    ) : (
                      <div className="product-image-placeholder">
                        MLP
                      </div>
                    )}

                    <span>
                      View Product ↗
                    </span>

                  </div>

                  <div className="related-product-content">

                    <small>
                      {related.category}
                    </small>

                    <h3>
                      {related.name}
                    </h3>

                  </div>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {isLightboxOpen && activeImage && (
        <div
          className="product-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Product image viewer"
          onClick={() => setIsLightboxOpen(false)}
        >

          <button
            type="button"
            className="product-lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close image viewer"
          >
            ×
          </button>


          {uniqueImages.length > 1 && (
            <button
              type="button"
              className="product-lightbox-prev"
              onClick={(event) => {
                event.stopPropagation();
                showPreviousImage();
              }}
              aria-label="Previous image"
            >
              ←
            </button>
          )}


          <div
            className="product-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <img
              src={activeImage}
              alt={product.name}
            />

            <div className="product-lightbox-counter">
              {activeImageIndex + 1} / {uniqueImages.length}
            </div>

          </div>


          {uniqueImages.length > 1 && (
            <button
              type="button"
              className="product-lightbox-next"
              onClick={(event) => {
                event.stopPropagation();
                showNextImage();
              }}
              aria-label="Next image"
            >
              →
            </button>
          )}

        </div>
      )}

    </>
  );
}

export default ProductDetails;