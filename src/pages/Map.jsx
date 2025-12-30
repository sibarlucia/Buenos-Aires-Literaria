import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { literaryWorks } from '../data/literaryWorks';

const Map = () => {
  const { id } = useParams();
  const work = literaryWorks.find((w) => w.id === parseInt(id));

  return (
    <div className="map-page">
      <header>
        <Link to="/" className="back-link">
          &larr; Volver
        </Link>
        <h1>{work.title}</h1>
      </header>
      <main>
        <iframe
          src={work.mapUrl}
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </div>
  );
};

export default Map;
