import { useAuth } from "../hooks/useAuth";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const {user, logout } = useAuth();

  const handleLogout = () => {
    logout()
    navigate("/")
  }

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
        {!user && <Link to="/register">Regístrate</Link>}
        {!user && <Link to="/login" className="btn-login">Login</Link>}

        {user && <button type="button" className="btn-logout" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
