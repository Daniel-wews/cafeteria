// BomCafe.js

import React from 'react';
import bomCafeImage from '../../assets/parallax-imagem2.jpg'; // Importe sua imagem de fundo aqui

function BomCafe() {
  return (
    <div className="bg-cover bg-center bg-fixed" style={{ 
      backgroundImage: `url(${bomCafeImage})`,
      width: '100%',
      height: '300px',
    }}>
      <div className="relative flex items-center justify-center h-full">
        <h3 className="bg-gray-200 text-white text-center text-lg px-4 py-2 rounded-md" style={{ backgroundColor: '#604829' }}>
          Um bom café é motivo de alegria!
        </h3>
      </div>
    </div>
  );
}

export default BomCafe;
