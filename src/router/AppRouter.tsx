// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importaciones correctas en AppRouter.tsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Inicio from '../pages/Inicio'; // Verifica la ruta correcta
import AgendarCitas from '../pages/AgendarCitas'; // Verifica la ruta correcta
import Resenas from '../pages/Resenas'; // Verifica la ruta correcta
import Contacto from '../pages/Contacto'; // Verifica la ruta correcta
import EditarServiciosPrecios from '../pages/EditarServiciosPrecios'; // Verifica la ruta correcta
import VideoBg from '../pages/VideoBg'; // Importa el componente VideoBg

const AppRouter: React.FC = () => {
  return (
    <Router>
       <VideoBg /> {/* Coloca el componente VideoBg aquí */}
      <Navbar /> {/* Agrega el Navbar aquí */}
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/agendar-citas" element={<AgendarCitas />} />
        <Route path="/reseñas" element={<Resenas />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/editar-servicios-precios" element={<EditarServiciosPrecios />} />
      </Routes>
      <Footer /> {/* Agrega el Footer aquí */}
    </Router>
  );
};

export default AppRouter;

