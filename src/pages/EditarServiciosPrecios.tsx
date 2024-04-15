import React from 'react';
import { useNavigate } from 'react-router-dom';

const EditarServiciosPrecios: React.FC = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    // Ejemplo de redirección a otra ruta
    navigate('/ruta-de-destino');
  };

  return (
    <div>
      <h1>Editar Servicios y Precios</h1>
      <button onClick={handleRedirect}>Redirigir</button>
    </div>
  );
};

export default EditarServiciosPrecios;
