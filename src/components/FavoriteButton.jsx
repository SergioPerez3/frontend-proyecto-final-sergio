import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

export default function FavoriteButton({ productId }) {
  const { favorites, add, remove } = useContext(FavoritesContext);

  const isFavorite = favorites.some((item) => item?.product?._id === productId);

  const toggleFavorite = () => {
    if (isFavorite) remove(productId);
    else add(productId);
  };

  return (
    <button
      className={`fav-btn ${isFavorite ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        toggleFavorite();
      }}
    >
      ❤
    </button>
  );
}
