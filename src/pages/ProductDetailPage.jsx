import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";
import { useEffect, useState } from "react";

function ProductDetailPage() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await getProductById(id)
        setProduct(data)
      } catch {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    };
    loadProduct();
  }, [id]);

  if (loading) {
    return <p className="empty-message">Cargando productos...</p>
  }
  if(error) {
    <p className="empty-message">{error}</p>
  }

  if (error || !product) {
    return (
      <main>
        <section className="catalog-section">
          <div className="container">
            <h1 className="detail-price">{error || "Producto no encontrado"}</h1>
            <Link to="/" className="detail-title">
              Pulse para volver a la página principal
            </Link>
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
              <img key={index} src={`/images/product/${img}`} alt={product.name} />
            ))
          ) : (
            <img src={`/images/product/${product.image}`} alt={product.name} />
          )}
        </div>

        <div className="detail-info">
          <h2 className="detail-title">{product.name}</h2>

          <p className="detail-price">{product.price} €</p>

          <p className="detail-description">
            <strong>Descripción: </strong>
            {product.description}
          </p>

          {/* <p className="detail-notes">
            <strong>Observaciones: </strong>
            {product.notes}
          </p>

          <p className="detail-description">
            <strong>Vendedor: </strong>
            {product.seller}
          </p> */}

          <div className="detail-buttons">
            <button className="fav-btn">❤ Favorito</button>
            <button className="add-btn">ADD TO CART</button>
          </div>
          <div className="detail-buttons">
            <Link to="/products" className="back-btn">
              ↩
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
