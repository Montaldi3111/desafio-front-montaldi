import Card from "../../components/Cards/HomeCard/Card";
import Image from "next/image";
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
    <main className="w-full">
      <section id="image-container">
      <Image id="home-img" src="/image.png" alt="Digital Money House" width={2300} height={900} className="w-full"/>
      </section>
      <section id="text-content" className="absolute">
        <h1 id="text-head" className="text-white">De ahora en adelante, hacés más con tu dinero</h1>
        <p id="line"></p>
        <h1 id="text-subcontent" className="text-ylw">Tu nueva <b>billetera virtual</b></h1>
      </section>
      <section id="card-container" className="w-full rounded-t-md bg-ylw">
        <Card message={card1}/>
        <Card message={card2}/>
      </section>
    </main>
  );
}