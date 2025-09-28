// src/components/LibroCard.jsx
export default function LibroCard({ titulo, autor, año }) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      <h2 className="text-xl font-bold">{titulo}</h2>
      <p className="text-gray-700">Autor: {autor}</p>
      <p className="text-gray-500">Año: {año}</p>
    </div>
  );
}
