import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/about">¿Quiénes somos?</Link></li>
        <li><Link to="/project">Un proyecto literario y urbano</Link></li>
        <li><Link to="/read-more">Para leer más</Link></li>
        <li><Link to="/tours">Recorridos presenciales</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
