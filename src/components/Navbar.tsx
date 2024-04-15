import React from 'react';
import { Link } from 'react-router-dom';
import { GiSaloon } from "react-icons/gi";
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { authenticated, isAdmin, logout } = useAuth(); // Obtiene el estado de autenticación, si el usuario es administrador y la función para cerrar sesión

  return (
    <nav className="barra">
      <div className="logo">
        <GiSaloon className="icono" />
        <h1>Magnifique</h1>
      </div>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/agendar-citas">Agendar-Citas</Link></li>
        <li><Link to="/reseñas">Reseñas</Link></li>
        <li><Link to="/contacto">Contactanos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
