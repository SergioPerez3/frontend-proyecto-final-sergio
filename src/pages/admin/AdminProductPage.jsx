import { useState, useEffect, useRef } from "react";
import ProductForm from "../../components/ProductForm";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../services/productService";

function AdminProductPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [message, setMessage] = useState("");
  const [productToDelete, setProductToDelete] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch {
        setError("No se puede cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const messageRef = useRef(null);

  const handleAddProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);

      setProducts([...products, newProduct]);

      setShowForm(false);

      setMessage("Producto agregado correctamente");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct(id);
      const filteredProducts = products.filter((product) => product._id != id);
      setProducts(filteredProducts);

      setMessage("Producto eliminado correctamente");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleUpdateProduct = async (productId, productData) => {
    try {
      const updatedProduct = await updateProduct(productId, productData);

      const updatedProducts = products.map((product) => {
        if (product._id == productId) {
          return updatedProduct;
        }
        return product;
      });
      setProducts(updatedProducts);
      setSelectedProduct(null);
      setMessage("Producto actualizado correctamente");
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    if (!message) {
      return;
    }

    messageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  useEffect(() => {
    if (!productToDelete) {
      return;
    }

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setProductToDelete(null);
      }
    });
  }, [productToDelete]);

  if (loading) {
    return <p className="empty-message">Cargando productos...</p>;
  }
  if (error) {
    <p className="empty-message">{error}</p>;
  }

  return (
    <section className="catalog-section">
      {message && <div className="admin-message">{message}</div>}

      <div className="admin-page-header">
        <div>
          <h2>Gestión de productos</h2>
          <p>Agrega, edita o elimina tus productos fácilmente.</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => {
            setShowForm(!showForm);
            setSelectedProduct(null);
          }}
        >
          {showForm ? "Cerrar el formulario" : "Nuevo producto"}
        </button>
      </div>

      {showForm && (
        <ProductForm
          product={selectedProduct}
          onAddProduct={handleAddProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}

      <div className="admin-list">
        {products.map((product) => (
          <article className="admin-list-item" key={product._id}>
            <img src={product.image} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}€</p>
              <div className="admin-actions">
                <button
                  className="admin-action-button edit"
                  type="button"
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowForm(true);
                  }}
                >
                  Editar
                </button>
                <button
                  className="admin-action-button delete"
                  type="button"
                  onClick={() => setProductToDelete(product)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {productToDelete && (
        <div className="modal-overlay" onClick={() => setProductToDelete(null)}>
          <div className="modal" onClick={(event) => event.stopPropagation()}>
            <h2>Eliminar producto</h2>

            <p>
              ¿Desea eliminar <strong>{productToDelete.name}</strong>?
            </p>

            <div className="modal-actions">
              <button
                className="modal-button secondary"
                type="button"
                onClick={() => setProductToDelete(null)}
              >
                Cancelar
              </button>

              <button
                className="modal-button danger"
                type="button"
                onClick={() => handleDeleteProduct(productToDelete._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminProductPage;
