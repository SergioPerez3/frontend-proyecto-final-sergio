const API_URL = "http://localhost:3000/api/products";

export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await response.json();

  return data;
};



export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`) 

  if(!response) {
    throw new Error ("Error al obtener el producto")
  }

  const data = await response.json();
  return data;
}