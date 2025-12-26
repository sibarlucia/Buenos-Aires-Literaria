import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Map = () => {
  const { id } = useParams();

  return (
    <div className="map-page">
      <header>
        <Link to="/" className="back-link">
          &larr; Volver
        </Link>
        <h1>Mapa del Recorrido Literario</h1>
      </header>
      <main>
        <div className="map-placeholder">
          <p>El mapa para la obra con ID: {id} irá aquí.</p>
          <p>Se requiere una clave de API de Google Maps para mostrar el mapa.</p>
        </div>
      </main>
    </div>
  );
};

export default Map;
