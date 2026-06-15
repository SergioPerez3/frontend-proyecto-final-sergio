import { useAuth } from "../../hooks/useAuth";
// import { useNavigate } from "react-router-dom";


function DashboardPage() {
    const {user} = useAuth();
    // const navigate = useNavigate();

    if(!user) {
        return <p>Inicia sesón antes de continuar</p>
        // navigate("/auth/login")
        
    }

    return (
        <section className="catalog-section">
            <h1>Dashboard</h1>
        </section>
    )
};

export default DashboardPage;