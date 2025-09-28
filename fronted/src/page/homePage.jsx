// src/pages/Libros.jsx
import { useLibros } from "../hooks/useLibros";
import LibroCard from "../components/libroCard";

export default function Libros() {
  const { libros, loading } = useLibros();

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      {libros.map((libro) => (
        <LibroCard key={libro.id} {...libro} />
      ))}
    </div>
  );
}
