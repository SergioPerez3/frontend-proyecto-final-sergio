import {useNavigate } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({ product }) => {
  const navigate = useNavigate()
  return (
    <div className="product-card" onClick={() => navigate(`/products/${product._id}`)}>
  <img src={`/images/product/${product.image}`} alt={product.name} />

  <h3>{product.name}</h3>
  <span className="price">{product.price} €</span>

  <div className="card-buttons">
    <FavoriteButton 
      productId={product._id}
      onClick={(e) => e.stopPropagation()} 
    />
    <button className="add-btn" onClick={(e) => e.stopPropagation()}>
      ADD TO CART
    </button>
  </div>
</div>

  );
};

export default ProductCard;