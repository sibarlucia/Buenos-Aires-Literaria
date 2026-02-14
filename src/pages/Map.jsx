import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { literaryWorks } from '../data/literaryWorks';

const Map = () => {
  const { id } = useParams();
  const work = literaryWorks.find((w) => w.id === parseInt(id));

  if (!work) {
    return <Navigate to="/" />;
  }

  return (
    <div className="map-page">
      <header className="map-header">
        <Link to="/" className="back-link">
          &larr; Volver
        </Link>
        <div className="header-info">
          <h1>{work.title}</h1>
          <p className="points-count">{work.pointsCount} puntos de interés</p>
          <a href={work.directMapUrl} target="_blank" rel="noopener noreferrer" className="maps-button">
            Abrir recorrido en Maps
          </a>
        </div>
      </header>
      <main className="map-container-full">
        <iframe
          src={work.mapUrl}
          width="100%"
          height="700"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={work.title}
        ></iframe>
      </main>
    </div>
  );
};

export default Map;
