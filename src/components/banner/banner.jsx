import React from 'react';
import parallax1Image from '../../assets/parallax-imagem1.png';

function Banner() {
  return (
    <div className="bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax1Image})`, height: '800px' }}>
      <div className="text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-5xl font-bold">MANHATTAN - COFFEE HOUSE</h1>
      </div>
    </div>
  );
}

export default Banner;
