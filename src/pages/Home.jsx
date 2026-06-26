import {
  getProducts,
  getProductsFeatured,
} from "../services/productService.js";
import { useState, useEffect } from "react";
import ProductCarousel from "../components/ProductCarousel.jsx";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [productsModa, setProductsModa] = useState([]);
  const [productsSport, setProductsSport] = useState([]);
  const [productsFeatured, setProductsFeatured] = useState([]);
  const [newProducts, setNewProducts] = useState([])

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(
          1,
          5,
          "",
          "title",
          "asc",
          "Moda y accesorios",
        );
        setProductsModa(data.products);

        const dataSport = await getProducts(
          1,
          5,
          "",
          "title",
          "asc",
          "Deporte y ocio",
        )
        setProductsSport(dataSport.products);

        const dataFeatured = await getProductsFeatured();
        setProductsFeatured(dataFeatured.products);

        const dataNewProducts = await getProducts(1, 5, "", "createdAt", "desc")
        setNewProducts(dataNewProducts.products)

        
      } catch {
        setError("No se pueden cargar los productos");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);


  if (loading) {
    return <p className="empty-message">Cargando productos...</p>;
  }
  if (error) {
    <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img src="/images/logo3.png" alt="Logo WebeW" className="hero-logo" />

          <span className="hero-label">
            ...El lugar donde tus productos encuentran un nuevo dueño...
          </span>

          <h1 className="hero-title">
            Compra y vende de forma rápida, segura y sin complicaciones.
          </h1>

          <p className="hero-description">
            Encuentra de todo y da una segunda vida a tus productos.
          </p>

          <div className="hero-buttons">
            <div className="hero-button-container">
              <Link to="/products">
                <img
                  src="/images/iconoTodoslosproductos.png"
                  alt="Todos los productos"
                  className="hero-icon"
                />
              </Link>
              <Link to="/products" className="button">
                Ver todos los productos
              </Link>
            </div>

            <div className="hero-button-container">
              <Link to="/admin">
                <img
                  src="/images/iconoSubirproducto.png"
                  alt="Subir productos"
                  className="hero-icon"
                />
              </Link>
              <Link to="/admin" className="button">
                Vende ahora +
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2> ▼ Los más destacados esta semana ▼ </h2>

          <ProductCarousel products={productsFeatured} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>▼ Los más nuevos ▼</h2>

          <ProductCarousel products={newProducts} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>▼ Únete a la moda ▼</h2>

          <ProductCarousel products={productsModa} visible={3} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>▼ Haz deporte este verano ▼</h2>

          <ProductCarousel products={productsSport} visible={3} />
        </div>
      </section>
    </main>
  );
}

export default Home;
