import { useAuth } from "../../hooks/useAuth";

function DashboardPage() {
  const { user } = useAuth();

  if (!user) {
    return <p>Inicia sesón antes de continuar</p>;
  }

  return (
    <section className="catalog-section">
      <h1>Dashboard</h1>

      <div className="dashboard-text">
        <h2>Bienvenido, {user.name}</h2>
      </div>

      <div className="dashboard-text">
        <h3>Total de productos</h3>
        <p className="dashboard-number">{"21"}</p>
      </div>
    </section>
  );
}

export default DashboardPage;
