function ContactUs() {
  return (
    <section className="contact">
      <div>
        <h1>Contáctanos</h1>
        <p>
          ¿Tienes dudas, sugerencias o necesitas ayuda? Nuestra equipo de
          soporte está aquí para ayudarte.
        </p>
      
      <div>
        <p>
          <strong>Email:</strong> soporte@webeW.fake
        </p>
        <p>
          <strong>Teléfono:</strong> +34 600 000 000
        </p>
        <p>
          <strong>Dirección:</strong> Calle del Comercio 27, Madrid (ficticio)
        </p>
      </div>
      <form className="contact-form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu email" required />
          <textarea placeholder="Tu mensaje" rows="5" required></textarea>
          <button type="submit">Enviar</button>
        </form>
        </div>
    </section>
  );
}

export default ContactUs;
