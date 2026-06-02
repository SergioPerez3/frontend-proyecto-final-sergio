import { useState } from "react";
import { categories } from "../data/categories";


const initialForm = {
  title: "",
  description: "",
  price: "",
  category: "",
  image: "",
  notes: "",
  featured:false,
};

function ProductForm(onAddProduct) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
  

  if (!form.name || !form.price) {
    alert("Por favor completa los campos obligatorios");
    return;
  }


  onAddProduct(form);

  setForm(initialForm);
};
  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Nuevo producto</h2>
      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea
          type="text"
          placeholder="Escribe una breve descripción"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div>
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          id="price"
          name="price"
          min="0"
          value={form.price}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="categories">Categoría:</label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((cat) => (
            <option key={cat} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* <div>
        <label htmlFor="categories">Categoría:</label>
        <select
          name="categories"
          id="categories"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          <option value="Tecnología y electrónica">
            Tecnología y electrónica
          </option>
          <option value="Moda y accesorios">Moda y accesorios</option>
          <option value="Deporte y ocio">Deporte y ocio</option>
          <option value="Hogar y jardín">Hogar y jardín</option>
          <option value="Mobiliario y decoración">
            Mobiliario y decoración
          </option>
          <option value="Libros, música y películas">
            Libros, música y películas
          </option>
          <option value="Herramientas y bricolaje">
            Herramientas y bricolaje
          </option>
          <option value="Otros">Otros</option>
        </select>
      </div> */}

      <div>
        <label htmlFor="image">URL de imagen:</label>
        <input
          type="text"
          id="image"
          name="image"
          placeholder="https://..."
          value={form.image}
          onChange={handleChange}
        />
      </div>

      {form.image.trim() && (
        <div className="image-preview">
            <img src={form.image} alt="Vista previa" />
        </div>
      )}

      <div>
        <label htmlFor="notes">Notas:</label>
        <textarea
          type="text"
          id="notes"
          name="notes"
          placeholder="Observaciones del producto"
          value={form.notes}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="featured">Destacado:</label>
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Agregar producto</button>
    </form>
  );
}

export default ProductForm;
