import Banner from "./components/banner/banner";
import BomCafe from "./components/bomcafe/bomcafe";
import Header from "./components/header/header";
import Informacao from "./components/informacao/informacao";
import Informacoes from "./components/informacoes/informacaoes";

export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Informacao/>
      <BomCafe/>
      <Informacoes/>
    </>
  )
}