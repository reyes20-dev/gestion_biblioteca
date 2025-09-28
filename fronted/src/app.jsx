// src/App.jsx
import React, { useState, useEffect } from 'react';

import Libros from "./page/homePage";

function App() {
  return (
    <div className="min-h-screen bg-blue-800">
      <h1 className="text-3xl font-bold text-center p-6">Biblioteca</h1>
      <Libros />
    </div>
  );
}

export default App;
