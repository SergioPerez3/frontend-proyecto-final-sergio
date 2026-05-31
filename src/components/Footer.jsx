import { Link } from "react-router-dom";
import "../index.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>COMPRA · VENDE · CONECTA</p>
        <div className="footer-Links">
          <Link to="/products">Productos</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/admin">Perfil</Link>
          <Link to="/about">| About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} MercadoLibre. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
