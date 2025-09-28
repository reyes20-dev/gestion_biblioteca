// src/components/LibroCard.jsx
export default function LibroCard({ titulo, autor, anio }) {
  return (
    <div >
      <h2 >{titulo}</h2>
      <p >Autor: {autor}</p>
      <p >Año: {anio}</p>
    </div>
  );
}
