import parallax5Image from '../../assets/cafeteria.jpg';

import React from 'react';

function Horarios() {
  return (
    <section id="horarios" className="container-parallax5 bg-cover bg-fixed" style={{ backgroundImage: `url(${parallax5Image})` }}>
      <div className="max-w-3xl mx-auto py-8 bg-opacity-75 text-white flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl text-yellow-500 mb-4 py-2 px-6 inline-block">HORÁRIOS DE FUNCIONAMENTO</h2>
        <div className="max-w-3xl mx-auto">
          <ul className="grid grid-cols-3 gap-4">
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">SEGUNDA</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <span className="text-yellow-500">FECHADO</span>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">TERÇA</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">09:00 - 22:00</p>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">QUARTA</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">09:00 - 22:00</p>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">QUINTA</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">09:00 - 22:00</p>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">SEXTA</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">09:00 - 22:00</p>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">SÁBADO</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">12:00 - 22:00</p>
            </li>
            <li className="bg-gray-800 rounded-lg p-4 text-center">
              <h3 className="text-lg font-semibold mb-2">DOMINGO</h3>
              <div className="h-1 bg-gray-600 mb-2 mx-auto w-16"></div>
              <p className="text-gray-400">12:00 - 22:00</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Horarios;
