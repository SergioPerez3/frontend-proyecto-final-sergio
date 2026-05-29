import { Link } from "react-router-dom";
import { products } from "../../data/products";

function AdminProductPage() {
  return (
    <section className="catalog-section">
      <h2>Gestión de productos</h2>

      <p>Próximamente podremos crear, editar y eliminar productos.</p>
      <nav>
        <button>
          <Link to="/admin/products">+ Añadir producto</Link>
        </button>

        <Link to="/">Volver a la web</Link>
      </nav>
      <div className="admin-list">
        {products.map(product => (
            <article className="admin-list-item" key={product.id}>
                <img src={product.image} alt={product.name} />
                <div>
                    <h3>{product.name}</h3>
                    <p>
                        {product.description}
                    </p>
                    <p>{product.price}€</p>
                </div>
                
            </article>
        ))}
      </div>
      
    </section>
  );
}

export default AdminProductPage;
