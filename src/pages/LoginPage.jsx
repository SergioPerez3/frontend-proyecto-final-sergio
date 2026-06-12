import { useState } from "react";
import { login } from "../services/authService";


const initialForm = {
  email: "",
  password: "",
};


function LoginPage() {
  const [form, setForm] = useState(initialForm);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const { name, value } =
      event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setError("");
      setMessage("");

      const userData = {
        email: form.email.trim(),
        password: form.password,
      }

      const data = await login(userData);

      setMessage(data.message || "Sesión iniciada correctamente")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <section className="auth-section">
        <div className="container">
          <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Iniciar sesión</h1>

          {error && <p className="auth-error">{error}</p>}
          {message && <p className="auth-message">{message}</p>}

          
           

            <div className="form-group">
              <label htmlFor="email">Correo: </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña: </label>
              <input
                autoComplete="off"
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
    
            <button className="add-btn" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
