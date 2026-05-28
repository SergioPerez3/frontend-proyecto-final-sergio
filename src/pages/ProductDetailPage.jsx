import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetailPage() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  if (!product) {
    return (
      <main>
        <section className="catalog-section">
          <div className="container">
            <h1 className="detail-price" >Producto no encontrado</h1>
            <Link to="/" className="detail-title">Pulse para volver a la página principal</Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <section className="product-detail-section">
      <div className="product-detail-card">
        <div className="detail-images">
          {product.images && product.images.length > 0 ? (
            product.images.map((img, index) => (
              <img key={index} src={img} alt={product.name} />
            ))
          ) : (
            <img src={product.image} alt={product.name} />
          )}
        </div>

        <div className="detail-info">
          <h2 className="detail-title">{product.name}</h2>

          <p className="detail-price">{product.price} €</p>

          <p className="detail-description">Descripción: {product.description}</p>
          
          <p className="detail-notes">Observaciones: {product.notes}</p>

          <p className="detail-description">Vendedor: {product.seller}</p>
          
          <div className="detail-buttons">
            <button className="fav-btn">❤ Favorito</button>
            <button className="add-btn">ADD TO CART</button>
          </div>
          <div className="detail-buttons">
            <Link to="/" className="back-btn">↩</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
