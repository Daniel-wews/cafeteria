import React from 'react';
import parallax4Image from '../../assets/parallax-imagem4.png';

function Contato() {
  return (
    <section className="bg-cover bg-fixed" style={{ backgroundImage: `url(${parallax4Image})`, height: '800px', width: '100%' }}>
      <div className="max-w-3xl mx-auto px-4 py-8 bg-opacity-75 text-white flex flex-col items-center justify-center h-full">
        <h2 className="text-yellow-500 text-5xl mb-10 py-2 px-6 inline-block">Contatos & Endereço</h2>
        <iframe
          className="w-full h-96 md:h-120 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.1166802751072!2d-43.36346792402134!3d-22.982736479201744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2ed54ec2e1%3A0x4431d262cad1d163!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1682948042235!5m2!1spt-BR!2sbr"
          title="Mapa"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="mt-8  py-2 px-4 text-center text-base leading-6 rounded-xl" style={{ backgroundColor: '#604829' }}>
          <p>
            Telefone & Whatsapp: (21) 99999-5555<br />
            E-mail: contato@manhattan.com.br<br />
            Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contato;
