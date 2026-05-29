import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import NotfoundPage from "../pages/NotFoundPage";

import AdminLayout from "../layouts/AdminLayout";
import AdminProductPage from "../pages/admin/AdminProductPage";
import DashboardPage from "../pages/admin/DaskboardPage";

export const router = createBrowserRouter([
  // RUTA PUBLICA
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "*",
        element: <NotfoundPage />,
      },
    ],
  },

  // RUTA PRIVADA

  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "products",
        element: <AdminProductPage />,
      },
    ],
  },
]);
