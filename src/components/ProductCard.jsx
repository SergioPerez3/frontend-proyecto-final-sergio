

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <span className="price">{product.price} €</span>

      <div className="card-buttons">
        <button className="fav-btn">❤</button>
        <button className="add-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;