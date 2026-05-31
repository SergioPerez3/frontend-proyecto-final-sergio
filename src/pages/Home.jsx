import { products } from "../data/products";
import ProductList from "../components/ProductList.jsx";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  const modaProducts = products.filter((product) =>
    product.category.startsWith("Moda"),
  );
  const sportProducts = products.filter((product) =>
    product.category.startsWith("Deporte"),
  );

  const featuredProducts = products.filter((product) => product.featured);

  const newProducts = products.slice(0, 3); // 3 primeros

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img
            src="/images/logo3.png"
            alt="Logo WebeW"
            className="hero-logo"
          />

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
          <h2> Los mas destacados esta semana : </h2>

          <ProductList products={featuredProducts} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2> Los mas nuevos :</h2>

          <ProductList products={newProducts} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2> Únete a la moda :</h2>

          <ProductList products={modaProducts} />
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2> Haz deporte este verano :</h2>

          <ProductList products={sportProducts} />
        </div>
      </section>
    </main>
  );
}

export default Home;
