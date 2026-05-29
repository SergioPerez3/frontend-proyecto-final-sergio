import { products } from "../data/products";
import ProductList from "../components/ProductList.jsx";
import { useState } from "react";
import "../index.css" ;

function ProductsPage() {
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
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy == "az") {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    }

    if (sortBy === "newest") {
      return b.createdAt - a.createdAt;
    }

    if (sortBy === "oldest") {
      return a.createdAt - b.createdAt;
    }

    if (sortBy === "low") {
      return a.price - b.price;
    }

    if (sortBy === "high") {
      return b.price - a.price;
    }
  });

  const hasResults = filteredProducts.length > 0;

  const categories = [
    "Todos",
    ...new Set(products.map((product) => product.category)),
  ];

  const allProducts = products;

  return (
    <main>
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
          <select
            className="filter-price"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Precio</option>
            <option value="low">Menor a mayor</option>
            <option value="high">Mayor a menor</option>
          </select>
          <select
            className="filter-price"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="default">Orden por defecto</option>
            <option value="az">A-Z</option>
            <option value="newest">Más nuevo</option>
            <option value="oldest">Más viejo</option>
          </select>

          {search && !hasResults && (
            <p className="empty-message">
              No encontramos resultados para "{search}"
            </p>
          )}
          {hasResults && <ProductList products={sortedProducts} />}
        </div>
      </section>

      
      <section className="featured-section">
        <div className="container">
          <h2>Todos los productos :</h2>

          <ProductList products={allProducts} />
        </div>
      </section>


    </main>
  );
}

export default ProductsPage;