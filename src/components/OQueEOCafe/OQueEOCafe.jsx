// OQueEOCafe.js

import React from 'react';
import parallax3Image from '../../assets/parallax-imagem3.jpg';

function OQueEOCafe() {
  return (
    <div className="oqueéocafe relative bg-cover bg-fixed flex items-center justify-center" style={{ 
      backgroundImage: `url(${parallax3Image})`,
      height: '300px', // Altura definida para garantir que o conteúdo seja visível
    }}>
      <h3 className="bg-gray-200 text-white text-center text-lg px-4 py-2 rounded-md" style={{ backgroundColor: '#604829' }}>
        A vida só começa depois do café!
      </h3>
    </div>
  );
}

export default OQueEOCafe;
