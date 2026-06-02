import { useState } from "react";
import { products as initialProducts } from "../../data/products";
import ProductForm from "../../components/ProductForm";

function AdminProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState(initialProducts);

  const handleAddProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(),
    };
    setProducts([...products, newProduct]);

    setShowForm(false);
  };
  return (
    <section className="catalog-section">
      <div className="admin-page-header">
        <div>
          <h2>Gestión de productos</h2>
          <p>Próximamente podremos crear, editar y eliminar productos.</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Cerrar el formulario" : "Nuevo producto"}
        </button>
      </div>

      {showForm && <ProductForm onAddProduct={handleAddProduct} />}

      <div className="admin-list">
        {products.map((product) => (
          <article className="admin-list-item" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}€</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminProductPage;
