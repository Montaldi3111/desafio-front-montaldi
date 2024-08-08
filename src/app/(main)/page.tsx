import Card from "../components/HomeCard/Card";
import ImageContainer from "../components/ImageContainer/ImageContainer";
import "./main.css"
export default function Home() {

  const card1 = {
    head: "Tranferí dinero",
    content: "Desde Digital Money House vas a poder transferir dinero a otras cuentas, así como también recibir transferencias y nuclear tu capital en nuestra billetera virtual"
  }

  const card2 = {
    head: "Pago de servicios",
    content: "Pagá mensualmente los servicios en 3 simples clicks. Fácil, rápido y conveniente. Olvidate de las facturas en papel"
  }

  return (
    <main className="relative bg-ylw">
      <section className="w-full h-full">
        <ImageContainer />
      </section>
      <section id="text-content" className="absolute">
        <h1 id="text-head" className="text-white text-xl">De ahora en adelante, hacés más con tu dinero</h1>
        <h1 id="text-subcontent" className="text-ylw text-[16px]">Tu nueva <b>billetera</b> virtual</h1>
      </section>
      <section id="card-container" className="relative w-full rounded-t-md bg-ylw">
      <div id="cards" className="relative">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>
    </main>
  );
}
 /* card container absolute w-full bg-ylw rounded-t-md */