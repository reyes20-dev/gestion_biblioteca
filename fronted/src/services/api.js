// src/services/api.js
const API_URL = "http://127.0.0.1:8000"; // Aquí corre FastAPI

// Obtener todos los libros
export async function getLibros() {
  const res = await fetch(`${API_URL}/libros`);
  return await res.json();
}

// Buscar libro por id
export async function getLibroById(id) {
  const res = await fetch(`${API_URL}/libros/${id}`);
  return await res.json();
}
