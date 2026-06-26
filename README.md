# frontend - Proyecto final

Mi proyecto es una aplicación web moderna desarrollada con React que permite a los usuarios explorar, buscar y gestionar productos dentro de un marketplace.
Incluye autenticación, favoritos, panel de administración y una interfaz limpia y responsive

## Descripcion

# Aplicación para visualizar, buscar y administrar productos consumiendo una API REST creada en Node.js.

El usuario puede:

Navegar por el catálogo de productos

Filtrar por categorías

Buscar en tiempo real

Ver productos destacados

Acceder a la vista de detalle

Añadir productos a favoritos

Registrarse e iniciar sesión

Acceder a rutas protegidas

Administrar productos (crear, editar, eliminar) si es administrador

El frontend está construido con React + Vite, utiliza Context API para la gestión global del estado y se comunica con el backend mediante fetch/axios.

## Caractéristicas

-Listado de productos

-Búsqueda en tiempo real

-Filtros por categoría

-Ordenamiento por precio, nombre o categoría

-Paginación

-Vista de detalle del producto

-Productos destacados

-Gestión de favoritos por usuario

-Panel de administración

-Crear productos

-Editar productos

-Eliminar productos

-Registro de usuarios

-Inicio de sesión con JWT

-Rutas protegidas mediante autenticación

-Context global para Auth y Favoritos

-Diseño responsive

-Testing básico con Vitest

## Tecnologías utilizadas

-React

-Vite

-React Router DOM

-Context API

-Tailwind CSS (o tu sistema de estilos)

-Fetch API / Axios (según lo que uses)

-Vitest

-Testing Library

## Instalación

### Clonar repositorio

```bash
git clone <url-del-repositorio>
```

### Ingresar al proyecto

```bash
cd frontend-proyecto-final-Sergio
```

### Instalar dependencias

```bash
npm install
```

## Variables de entorno

Crear un archivo .env en la raíz del proyecto usando como referencia .env.example.

### .env.example

```env
VITE_API_URL=
```

### Ejemplo local

```env
VITE_API_URL=http://localhost:3000/api
```

### Ejemplo producción

```env
VITE_API_URL=https://mi-api.onrender.com/api
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```txt
http://localhost:5173
```

---

## Ejecutar tests

```bash
npm test
```

## vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.jsx",
  },
});
```

---

## Generar build de producción

```bash
npm run build
```

Los archivos generados se encontrarán en:

```txt
dist/
```

---

## Backend

Este proyecto consume una API REST desarrollada con:

- Node.js
- Express
- MongoDB Atlas
- JWT

La URL del backend se configura mediante:

```env
VITE_API_URL
```

---

## Estructura del proyecto

```txt
public/
└── images/
    └── products/
        └── default.jpg
src/
│
├── components/
├── context/
├── hooks/
├── layouts/
├── loaders/
├── pages/
├── routes/
├── services/
├── tests/
│
├── App.jsx
├── index.css
├── main.jsx
└── setupTests.jsx
```

---

## Autenticación

La aplicación utiliza JWT.

Al iniciar sesión se almacenan en Local Storage:

```txt
token
user
```

Las rutas protegidas requieren autenticación para acceder al panel de administración, favoritos y creación/edición de productos.

---

## Favoritos

-Los usuarios autenticados pueden añadir productos a favoritos.

-Los favoritos se guardan en la base de datos y se muestran en una página dedicada.

-Se pueden eliminar productos individuales o vaciar todos los favoritos.

## Deploy

Frontend desplegado en:

```txt
https://tu-proyecto.netlify.app
```

Backend desplegado en:

```txt
https://tu-api.onrender.com
```

---
## Autor

Proyecto desarrollado como práctica del curso Full Stack de Neoland.

Autor: Sergio Pérez Pérez
---

