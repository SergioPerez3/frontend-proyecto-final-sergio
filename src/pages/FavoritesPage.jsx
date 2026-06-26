import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";

function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);

  const hasFavorites = favorites.length > 0;

  return (
    <main className="favorites-page">
      <h1 className="favorites-title">-Mis Favoritos-</h1>

      {!hasFavorites ? (
        <div>
          <p className="empty-message">
            Todavía no tienes productos en favoritos.
          </p>
          <p className="empty-message">
            Regístrate o inicia sesion para obtenerlos.
          </p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item) => (
            <div key={item.product._id} className="favorite-card">
              <Link to={`/products/${item.product._id}`}>
                <img
                  src={`/images/product/${item.product.image}`}
                  alt={item.product.name}
                  className="favorite-image"
                />
              </Link>

              <div className="favorite-info">
                <h3>{item.product.name}</h3>
                <p className="price">{item.product.price} €</p>

                <FavoriteButton productId={item.product._id} />
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="back-container">
        <Link to="/products" className="back-btn">
          ↩ Volver al catálogo
        </Link>
      </div>
    </main>
  );
}

export default FavoritesPage;
