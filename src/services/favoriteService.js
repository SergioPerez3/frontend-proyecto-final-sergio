const API_URL = `${import.meta.env.VITE_API_URL}/favorites`;

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

const handleResponse = async (response) => {
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Error en la solicitud");
  }
  return data;
};

export const getFavorites = async () => {
  const token = getToken();

  const response = await fetch(API_URL, {
    headers: {
      Authorization: token,
    },
  });

  return handleResponse(response);
};

export const addFavorite = async (productId) => {
  const token = getToken();

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({ product: productId }),
  });

  return handleResponse(response);
};

export const removeFavorite = async (productId) => {
  const token = getToken();

  const response = await fetch(`${API_URL}/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  return handleResponse(response);
};

export const clearFavorites = async () => {
  const token = getToken();

  const response = await fetch(API_URL, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });

  return handleResponse(response);
};
