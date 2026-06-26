import { useState } from "react";
import ProductCard from "./ProductCard";

function ProductCarousel({ products, visible = 3 }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < products.length - visible) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const visibleProducts = products.slice(index, index + visible);

  return (
    <div className="carousel-container">
      <button className="arrow-btn left" onClick={prev}>
        {"<"}
      </button>
      <div className="product-list">
        {visibleProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <button className="arrow-btn right" onClick={next}>
        {">"}
      </button>
    </div>
  );
}

export default ProductCarousel;
