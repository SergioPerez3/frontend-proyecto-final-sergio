import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import NotfoundPage from "../pages/NotFoundPage";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

import AdminLayout from "../layouts/AdminLayout";
import AdminProductPage from "../pages/admin/AdminProductPage";
import DashboardPage from "../pages/admin/DaskboardPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";


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
        path:"register",
        element: <RegisterPage />
      },
      {
        path: "login",
        element: <LoginPage/>
      },

      
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
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
