import { useState, useEffect } from "react";
import { getProductsCategories } from "../services/productService";

const initialForm = {
  name: "",
  description: "",
  price: "",
  category: "",
  image: "",
  featured: false,
};

function ProductForm({ onAddProduct, product, onUpdateProduct, isSaving }) {
  const [form, setForm] = useState(initialForm);
  const [categories, setCategories] = useState([]);

  const isEditing = Boolean(product);

  useEffect(() => {
    const loadCategories = async () => {
      const data = await getProductsCategories();
      setCategories(data.categories || data || []);
    };

    loadCategories();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!form.name.trim()) {
      alert("Ingrese el nombre del producto");
      return;
    }

    if (!form.description.trim()) {
      alert("Ingrese una descripción");
      return;
    }

    if (!form.category) {
      alert("Seleccione una categoría");
      return;
    }

    if (!form.image.trim()) {
      alert("Ingrese una imagen");
      return;
    }

    if (!form.price || isNaN(form.price) || Number(form.price) < 0) {
      alert("Ingrese un precio válido");
      return;
    }

    if (isEditing) {
      await onUpdateProduct(product._id, form);
    } else {
      await onAddProduct(form);
    }

    setForm(initialForm);
  };

  useEffect(() => {
    if (product) {
      setForm({
        ...initialForm,
        ...product,
        image: product.image ? `/images/product/${product.image}` : "",
      });
    }
  }, [product]);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Editar producto" : "Nuevo producto"}</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          placeholder="Nombre del producto"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción:</label>
        <textarea
          placeholder="Escribe una breve descripción"
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="price">Precio:</label>
        <input
          type="number"
          placeholder="....€"
          id="price"
          name="price"
          min="0"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Categoría:</label>
        <select
          id="category"
          name="category"
          value={form.category}
          onChange={handleChange}
        >
          <option value="">Selecciona una categoría</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Foto del producto:</label>
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

      <div className="form-group">
        <label htmlFor="featured">Destacado:</label>
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={form.featured}
          onChange={handleChange}
        />
      </div>

      <button
        disabled={isSaving}
        className="button movie-form-button"
        type="submit"
      >
        {isSaving ? "Guardando..." : "Guardar producto"}
      </button>
    </form>
  );
}

export default ProductForm;
