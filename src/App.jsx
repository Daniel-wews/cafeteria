import Banner from "./components/banner/banner";
import BomCafe from "./components/bomcafe/bomcafe";
import Contato from "./components/contato/contato";
import Header from "./components/header/header";
import Horarios from "./components/horarios/horarios";
import Informacao from "./components/informacao/informacao";
import Informacoes from "./components/informacoes/informacaoes";
import OQueEOCafe from "./components/OQueEOCafe/OQueEOCafe";
import Sobre from "./components/sobre/sobre";

export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Informacao/>
      <BomCafe/>
      <Informacoes/>
      <OQueEOCafe/>
      <Sobre/>
      <Contato/>
      <Horarios/>
    </>
  )
}