import React from 'react';
import Gallery from './Gallery'; // Importa el componente de Galería
import './Inicio.css';

const Inicio: React.FC = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
    '/images/image5.jpg',
    '/images/image6.jpg',
    // Agrega más URLs de imágenes según sea necesario
  ];

  return (
    <div className="principal">
      <div className="texto">
      <h1>Bienvenidos</h1>
      <p className="parrafo">
  Nos enfocamos en embellecerte. Nos dedicamos a resaltar tu belleza y realzar tu estilo de manera única y personalizada. Nuestro objetivo es hacerte sentir seguro/a y radiante en cada momento. Contamos con un equipo de expertos apasionados por su trabajo y comprometidos con tu satisfacción. Utilizamos productos de alta calidad y técnicas innovadoras para lograr resultados excepcionales. Confía en nosotros para potenciar tu belleza interior y exterior. Estamos aquí para ayudarte a brillar y destacar en cualquier ocasión. Tu confianza y felicidad son nuestra mayor recompensa. Descubre una experiencia de belleza inigualable con nosotros. Nos esforzamos por superar tus expectativas y crear momentos memorables juntos.
</p>
</div>
      <div className="imagen">

      <Gallery  images={images} /> {/* Mostrar la galería de fotos */}
      </div>
    </div>
  );
};

export default Inicio;
