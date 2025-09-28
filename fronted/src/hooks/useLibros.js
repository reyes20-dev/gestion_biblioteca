// src/hooks/useLibros.js
import { useEffect, useState } from "react";
import { getLibros } from "../services/api";

export function useLibros() {
  const [libros, setLibros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function cargarLibros() {
      const data = await getLibros();
      setLibros(data);
      setLoading(false);
    }
    cargarLibros();
  }, []);

  return { libros, loading };
}
