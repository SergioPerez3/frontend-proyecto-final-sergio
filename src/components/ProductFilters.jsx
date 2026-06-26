function MovieFilters({
  search,
  selectedCategory,
  sortBy,
  categories,
  onSearchChange,
  onCategoryChange,
  onSortChange,
}) {
  return (
    <section className="catalog-section">
      <div className="container">
        <h2 className="product-page-h2">Explora todos los productos</h2>
        <input
          className="search-input"
          type="search"
          placeholder="Buscar productos..."
          name="search"
          id="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">Todos los productos</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className="filter-price"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="">Precio</option>
          <option value="low">Menor a mayor</option>
          <option value="high">Mayor a menor</option>
        </select>
        <select
          className="filter-price"
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="default">Orden por defecto</option>
          <option value="az">A-Z</option>
          <option value="za">Z-A</option>
          <option value="newest">Más nuevo</option>
          <option value="oldest">Más viejo</option>
        </select>
      </div>
    </section>
  );
}

export default MovieFilters;
