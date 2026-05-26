import { products } from "../data/products";
import ProductList from "../components/ProductList.jsx";
import { useState } from "react";
import "../index.css";

function Home() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = [];

  if (search || selectedCategory !== "Todos") {
    filteredProducts = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        selectedCategory == "Todos" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
  const sortProducts = [...filteredProducts];

  const hasResults = filteredProducts.length > 0;

  const featuredProducts = products.filter((product) => product.featured);

  const newProducts = products.slice(0, 3); // 3 primeros

  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <img
            src="/images/logoEncabezado.png"
            alt="Imagen de encabezado WebeW"
          />

          <span className="hero-label">El lugar donde tus productos encuentran nuevo dueño</span>
          <h1> Compra y vende de forma rápida, segura y sin complicaciones.Encuentra de todo y da una segunda vida a tus productos.</h1>
          <p>
           
          </p>
          <a className="button" href="#">
            Ver productos
          </a>
        </div>
      </section>

      <section className="catalog-section">
        <div className="container">
          <input
            className="search-input"
            type="text"
            placeholder="Buscar productos..."
            name="search"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="category-select"
            name="category"
            id="category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select className="filter-price">
            <option value="">Precio</option>
            <option value="low">Menor a mayor</option>
            <option value="high">Mayor a menor</option>
          </select>

          {search && !hasResults && (
            <p className="empty-message">
              No encontramos resultados para "{search}"
            </p>
          )}
          {hasResults && <ProductList products={filteredProducts} />}
          <select
            className="filter-select"
            value={sortBy}
            onchange={(event) => setSortBy(event.target.value)}
          >
            <option value="default">Orden por defecto</option>
            <option value="az">A-Z</option>
            <option value="newest">Más nuevo</option>
            <option value="oldest">Más viejo</option>
          </select>
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
