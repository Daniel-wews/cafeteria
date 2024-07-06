import logo from '../../assets/coffe-house.jpg';

export default function Header() {
  return (
    <header className="text-white shadow-md" style={{ background: 'linear-gradient(to right, #512012, #343935, #0192AD)' }}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logo} className="h-12 w-15 rounded-full" alt="logotipo da cafeteria" />

        <nav className="flex gap-6">
          <a href="#" className="text-gray-300 hover:text-white font-semibold">INFORMAÇÕES</a>
          <a href="#" className="text-gray-300 hover:text-white font-semibold">CONTATOS</a>
          <a href="#" className="text-gray-300 hover:text-white font-semibold">HORÁRIOS</a>
        </nav>
      </div>
    </header>
  );
}