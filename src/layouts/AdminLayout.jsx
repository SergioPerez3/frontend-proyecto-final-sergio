import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminLayout() {
  return (
    <>
      <Header />
      <main className="admin-product">
        <div className="container">
          <div className="container">
            <h1>Panel Administrativo</h1>
            <p>Aquí puedes gestionar tus productos de forma sencilla.</p>
          </div>
          <nav>
            <button>
              <Link to="/admin/products">Mis productos</Link>
            </button>
            <button>
              <Link to="/products">Ver sitio Web</Link>
            </button>
            <Link to="/admin">↩ Dashboard</Link>
          </nav>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AdminLayout;
