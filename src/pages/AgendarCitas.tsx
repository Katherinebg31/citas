import React from 'react';
import './AgendarCitas.css';

const AgendarCitas: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para manejar el envío del formulario
  };

  return (
    <div className="principal">
      <h1>Agendar Citas</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <label>
          Nombre:
          <input type="text" />
        </label>
        <label>
          Fecha:
          <input type="date" />
        </label>
        {/* Otros campos del formulario */}
        <button type="submit">Agendar Cita</button>
      </form>
    </div>
  );
};

export default AgendarCitas;
