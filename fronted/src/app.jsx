// src/App.jsx
import React, { useState, useEffect } from 'react';

import Libros from "./page/homePage.jsx";

function App() {
  return (
    <div>
      <h1>Biblioteca</h1>
      <Libros />
    </div>
  );
}

export default App;
