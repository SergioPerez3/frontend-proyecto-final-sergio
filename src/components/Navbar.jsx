import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

       <div className="navbar-logo">
        <img src="/images/logoNavbar.png" alt="Logo" />
      </div>

      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/products">Productos</Link>
        <Link to="#">Favoritos</Link>
        <Link to="/admin">Perfil</Link>
      </div>

      <div className="navbar-right">
        <Link to="/register">Regístrate</Link>
        <Link to="#" className="btn-login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
