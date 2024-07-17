import React from 'react';
import seta from '../../assets/seta-para-cima.png'
function Rodape() {
  return (
    <div className="container-rodape bg-black text-white text-center py-4">
      <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
      <p>Desenvolvido por <span className="font-bold">Daniel Junior</span></p>
      <a href="#banner" className="inline-block w-12 h-12 bg-yellow-500 rounded-full p-2">
        <img src={seta} alt="Ir para o topo" className="w-full h-full object-contain" />
      </a>
    </div>
  );
}

export default Rodape;
