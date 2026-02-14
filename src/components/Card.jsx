import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, title, author }) => {
  return (
    <Link to={`/map/${id}`} className="card">
      <div className="card-content">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </Link>
  );
};

export default Card;
