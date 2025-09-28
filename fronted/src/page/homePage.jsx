// src/pages/Libros.jsx
import { useLibros } from "../hooks/useLibros";
import LibroCard from "../components/libroCard.jsx";

export default function Libros() {
  const { libros, loading } = useLibros();

  if (loading) return <p>Cargando libros...</p>;

  return (
    <div >
      {libros.map((libro) => (
        <LibroCard key={libro.id} {...libro} />
      ))}
    </div>
  );
}
