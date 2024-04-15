import React from 'react';
import AppRouter from './router/AppRouter'; // Asegúrate de que la ruta sea correcta
import { AuthProvider } from './contexts/AuthContext';
import './styles.css'; // Importa los estilos generales

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
