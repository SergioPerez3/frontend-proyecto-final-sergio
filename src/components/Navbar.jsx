import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#">Inicio</a>
        <a href="#">Mis Productos</a>
        <a href="#">Favoritos</a>
      </div>

      <div className="navbar-right">
        <a href="#">Regístrate</a>
        <a href="#" className="btn-login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
