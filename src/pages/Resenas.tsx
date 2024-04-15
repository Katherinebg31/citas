import React from 'react';
import './Resenas.css';

const Reseñas: React.FC = () => {
  return (
    <div className="principal">
      <h1>Reseñas de nuestros clientes</h1>
      <div className="reseñas-list">
        <div className="reseña">
          <h2>Nombre del Cliente 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel urna nec arcu ultrices rutrum.</p>
        </div>
        <div className="reseña">
          <h2>Nombre del Cliente 2</h2>
          <p>Ut nec dolor sed justo commodo dictum. Donec convallis nisl in nisi gravida ultrices.</p>
        </div>
        {/* Agrega más reseñas según sea necesario */}
      </div>
    </div>
  );
};

export default Reseñas;
