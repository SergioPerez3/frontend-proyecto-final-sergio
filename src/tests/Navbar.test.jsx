import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/authContext";

describe("Navbar", () => {
  test("espero que muestre el register y el login", () => {
    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: null, logout: () => {} }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );

    expect(screen.getByText("Login")).toBeInTheDocument;
    expect(screen.getByText("Regístrate")).toBeInTheDocument;
  });

  test("espero que muestre el logout cuando tenga un usuario", () => {
    const user = {
      name: "User",
      email: "user@test.com",
    };

    render(
      <MemoryRouter>
        <AuthContext.Provider value={{ user, logout: () => {} }}>
          <Navbar />
        </AuthContext.Provider>
      </MemoryRouter>,
    );
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });
});
