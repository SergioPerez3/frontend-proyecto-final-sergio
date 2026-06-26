import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductForm from "../components/ProductForm";

describe("ProductForm", () => {
  test("Espero que muestre el formulario para crear un producto", () => {
    render(
      <ProductForm
        onAddProduct={() => {}}
        onUpdateProduct={() => {}}
        isSaving={false}
      />,
    );
    expect(screen.getByText("Nuevo producto")).toBeInTheDocument();
    expect(screen.getByText("Nombre:")).toBeInTheDocument();
    expect(screen.getByText("Descripción:")).toBeInTheDocument();
    expect(screen.getByText("Precio:")).toBeInTheDocument();
    expect(screen.getByText("Categoría:")).toBeInTheDocument();
    expect(screen.getByText("Foto del producto:")).toBeInTheDocument();
    expect(screen.getByText("Destacado:")).toBeInTheDocument();
    expect(screen.getByText("Guardar producto")).toBeInTheDocument();
  });

  test("Espero que me permita completar los datos del formulario", () => {
    render(
      <ProductForm
        onAddProduct={() => {}}
        onUpdateProduct={() => {}}
        isSaving={false}
      />,
    );

    fireEvent.click(screen.getByLabelText("Nombre:"), {
      target: { value: "Bolso" },
    });

    fireEvent.click(screen.getByLabelText("Precio:"), {
      target: { value: "130" },
    });

    fireEvent.click(screen.getByLabelText("Foto del producto:"), {
      target: { value: "https://picsum.photos/300/200?random=1" },
    });

    expect(screen.getByDisplayValue("Bolso")).toBeInTheDocument();
  });

  test("Esperar que muestre los datos de la película al editarla", () => {
    const product = {
      id: 1,
      name: "Bolso Gucci",
      description: "Bolso de cuero auténtico con detalles metálicos.",
      price: 450,
      category: "Moda y accesorios",
      image: "https://picsum.photos/300/200?random=1",
      featured: false,
    };
    render(
      <ProductForm
        product={product}
        onAddProduct={() => {}}
        onUpdateProduct={() => {}}
        isSaving={false}
      />,
    );

    expect(screen.getByText("Editar producto")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Bolso Gucci")).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(
        "Bolso de cuero auténtico con detalles metálicos.",
      ),
    ).toBeInTheDocument();
  });
});
