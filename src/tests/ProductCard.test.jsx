import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const product = {
    id: 1,
    name: "Bolso Gucci",
    description: "Bolso de cuero auténtico con detalles metálicos.",
    price: 450,
    category: "Moda y accesorios",
    image: "https://picsum.photos/300/200?random=1",
    featured: false,
    createdAt: "2024-01-10",
};




describe("ProductCard", () => {
    test("espero que muestre la informacion del producto", () => {
        render(
            <MemoryRouter>
            <ProductCard product={product}/>
            </MemoryRouter>,
        );




        const image = screen.getByAltText("Bolso Gucci")
        expect(image).toBeInTheDocument();

        expect(screen.getByText("Bolso Gucci")).toBeInTheDocument();
        expect(screen.getByText("Bolso de cuero auténtico con detalles metálicos.")).toBeInTheDocument();
        expect(screen.getByText("450 €")).toBeInTheDocument();
        expect(screen.getByAltText("Bolso Gucci")).toBeInTheDocument();
    });
  });
