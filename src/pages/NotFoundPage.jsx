import { Link } from "react-router-dom";

function NotfoundPage() {
  return (
    <main>
      <section className="catalog-section">
        <Link to="/">
          <div className="container">
            <h1 className="detail-price">Pagina no encontrada</h1>
            <p className="detail-title">
              La pagina que estas buscando no existe.
            </p>
            <Link to="/" className="detail-price">
              <p>Pulse para volver a la página principal</p>
            </Link>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default NotfoundPage;
