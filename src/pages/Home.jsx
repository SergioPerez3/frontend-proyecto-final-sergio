import { products } from "../data/products";
import ProductList from "../components/ProductList.jsx";
import "../index.css";

function Home() {
  const featuredProducts = products.filter((product) => product.featured);

  const newProducts = products.slice(0, 3); // 3 primeros

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img src="https://picsum.photos/1100/200" alt="Lorem Picsum" />
          <span className="hero-label">Proyecto final</span>
          <h1>Catálogo de Productos</h1>
          <p>
            Explora productos, consulta sus detalles y administra el
            contenido desde un panel privado.
          </p>
          <a className="button" href="#">
            Ver catálogo
          </a>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <h2>Contenido destacado</h2>

          <ProductList products={featuredProducts} />
        </div>
      </section>

      <section className="new-products-section">
        <div className="container">
          <h2>Nuevos productos</h2>

          <ProductList products={newProducts} />
        </div>
      </section>
    </main>
  );
}

export default Home;