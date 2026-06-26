import { createContext, useState, useEffect, useContext } from "react";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
  clearFavorites,
} from "../services/favoriteService";

import { AuthContext } from "./authContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const [favorites, setFavorites] = useState([]);

  const loadFavorites = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const data = await getFavorites();

      const clean = (data.products || []).filter(
        (item) => item.product !== null,
      );

      setFavorites(clean);
    } catch (error) {
      console.error("Error loading favorites:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    setTimeout(() => {
      loadFavorites();
    }, 0);
  }, []);

  useEffect(() => {
    if (user) {
      loadFavorites();
    } else {
      setFavorites([]);
    }
  }, [user]);

  const add = async (productId) => {
    await addFavorite(productId);
    loadFavorites();
  };

  const remove = async (productId) => {
    await removeFavorite(productId);
    loadFavorites();
  };

  const clear = async () => {
    await clearFavorites();
    loadFavorites();
  };

  return (
    <FavoritesContext.Provider value={{ favorites, add, remove, clear }}>
      {children}
    </FavoritesContext.Provider>
  );
};
