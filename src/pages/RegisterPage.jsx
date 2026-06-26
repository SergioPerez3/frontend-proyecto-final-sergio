import { useState } from "react";
import { register } from "../services/authService";


const initialForm = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};



function RegisterPage() {
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


      if (form.password != form.password_confirmation) {
        setError("Las contraseñas no coinciden");
        return;
      }

      const userData = {
        name: form.name.trim(),
        email: form.email.trim(),
        password: form.password,
      }

      const data = await register(userData);

      setMessage(data.message || "Usuario registrado exitósamente")
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <section className="auth-section">
        <div className="container">
        <form className="auth-form" onSubmit={handleSubmit}>
          <h1>Crear cuenta</h1>

          {error && <p className="auth-error">{error}</p>}
          {message && <p className="auth-message">{message}</p>}

          
            <div className="form-group">
              <label htmlFor="name">Nombre: </label>
              <input
                type="text"
                name="name"
                id="name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

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
            <div className="form-group">
              <label htmlFor="password_confirmation">
                Confirmar contraseña:{" "}
              </label>
              <input
                type="password"
                name="password_confirmation"
                id="password_confirmation"
                value={form.password_confirmation}
                onChange={handleChange}
              />
            </div>
            <button className="add-btn" type="submit">
              Registrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default RegisterPage;
