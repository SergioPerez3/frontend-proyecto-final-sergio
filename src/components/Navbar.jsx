import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

       <div className="navbar-logo">
        <img src="/images/logoNavbar.png" alt="Logo" />
      </div>

      <div className="navbar-left">
        <a href="#">Home</a>
        <a href="#">Favoritos</a>
        <a href="#">Mis Productos</a>
        <a href="#">Perfil</a>
      </div>

      <div className="navbar-right">
        <a href="#">Regístrate</a>
        <a href="#" className="btn-login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
