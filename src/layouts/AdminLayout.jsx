import { Outlet,Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/footer";

function AdminLayout() {
    return (
        <>
        <Header/>
        <main className="admin-product">
            <div >
            <div className="container">
            <h1>Panel Administrativo</h1>
            <p>Aquí puedes gestionar tus productos de forma sencilla.</p>
           
            <nav>
                <button>
                <Link to="/admin/products">Ver mis productos</Link>
                </button>
                <button>
                <Link to="/admin/products">+ Añadir producto</Link>
                </button>
                <Link to= "/">↩</Link>
            </nav>
            <Outlet/> 
            </div>
            </div>
        </main>
        <Footer/>
        </>
    )
}

export default AdminLayout;