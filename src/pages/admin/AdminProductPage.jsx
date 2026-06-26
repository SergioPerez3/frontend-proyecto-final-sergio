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
  const [isSaving, setIsSaving] = useState(false);

  const messageRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts(1, 24);
        setProducts(data.products);
      } catch {
        setError("No se puede cargar el producto");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const handleAddProduct = async (productData) => {
    try {
      setIsSaving(true);

      const newProduct = await createProduct(productData);

      setProducts([...products, newProduct]);

      setShowForm(false);

      setMessage("Producto agregado correctamente");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      setIsSaving(true);

      await deleteProduct(id);

      const filteredProducts = products.filter((product) => product._id != id);

      setProducts(filteredProducts);

      setProductToDelete(null);

      setMessage("Producto eliminado correctamente");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleUpdateProduct = async (productId, productData) => {
    try {
      setIsSaving(true);
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
    } finally {
      setIsSaving(false);
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

  useEffect(() => {
    if (!selectedProduct) {
      return;
    }
    formRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [selectedProduct]);

  if (loading) {
    return <p className="empty-message">Cargando productos...</p>;
  }
  if (error) {
    <p className="empty-message">{error}</p>;
  }
  return (
    <section className="catalog-section">
      {message && (
        <div ref={messageRef} className="admin-message">
          {message}
        </div>
      )}

      <div className="admin-page-header">
        <div ref={formRef}>
          <h1>Gestión de productos</h1>
          <h2>Agrega, edita o elimina tus productos fácilmente.</h2>
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
          isSaving={isSaving}
        />
      )}

      <div className="admin-list">
        {products.map((product) => (
          <article className="admin-list-item" key={product._id}>
            <img src={`/images/product/${product.image}`} alt={product.name} />
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
                disabled={isSaving}
                className="modal-button secondary"
                type="button"
                onClick={() => setProductToDelete(null)}
              >
                Cancelar
              </button>

              <button
                disabled={isSaving}
                className="modal-button danger"
                type="button"
                onClick={() => handleDeleteProduct(productToDelete._id)}
              >
                {isSaving ? "Eliminando..." : "Eliminar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminProductPage;
