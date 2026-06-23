import ProductList from "../components/ProductList.jsx";
import { useState, useEffect } from "react";
import { getProducts, getProductsCategories } from "../services/productService.js";
import ProductFilters from "../components/ProductFilters.jsx";
import "../index.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const [categories, SetCategories] = useState([])


  useEffect(() => {
    const loadCategories = async () => {
      try {
      const data = await getProductsCategories();

      SetCategories(data)
      } catch {
        setError("No se pueden cargar las categorias")
      }
    }
    loadCategories();
  },[]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const field =
          sortBy === "newest" || sortBy === "oldest" ? "year" : "title";
        const order = sortBy === "az" || sortBy === "newest" ? "asc" : "desc";

        const data = await getProducts(
          page,
          6,
          search,
          field,
          order,
          selectedCategory,
        );
        setProducts(data.products);
        setTotalPages(data.totalPages);
      } catch {
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [search, selectedCategory, sortBy, page]);

  const hasResults = products.length > 0;

  // const categories = [
  //   "",
  //   ...new Set(products.map((product) => product.category)),
  // ];

  if (loading) {
    return <p className="empty-message">Cargando productos...</p>;
  }

  if (error) {
    return <p className="empty-message">{error}</p>;
  }

  return (
    <main>
      <ProductFilters
        search={search}
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortBy}
      />
      {hasResults ? (
        <>
          <ProductList products={products} />

          <div className="pagination">
            <button onClick={() => setPage(page - 1)} 
            disabled={page === 1}
            >
              {"<<"}</button>

            <span>
              {page} de {totalPages}
            </span>

            <button
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              {">>"}
            </button>
          </div>
        </>
      ) : (
        <p className="empty-message">
          No encontramos resultados para "{search}"
        </p>
      )}

      {/* <section className="featured-section">
        <div className="container">
          <ProductList products={products} />
        </div>
      </section> */}
    </main>
  );
}

export default ProductsPage;
