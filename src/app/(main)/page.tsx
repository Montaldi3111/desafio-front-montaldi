import Image from "next/image";
import Card from "../components/HomeCard/Card";
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
    <main className="relative phone:max-h-50%">
      <Image src="/home-img.png" alt="home-img" width={1280} height={1000} className="phone:w-full phone:h-72" />
      <div className="absolute phone:w-32 top-2 left-5 phone:mb-10">
        <h1 className="text-white phone:text-lg ">De ahora en adelante, hacés más con tu dinero</h1>
        <p className="phone:border-t-4 phone:w-12 phone:my-4"></p>
        <h1 className="text-ylw phone:text-md phone:mt-1">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <section className="relative phone:w-full phone:bg-ylw rounded-t-2xl">
      <div className="phone:relative phone:flex phone:flex-col phone:justify-center -top-10">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>
    </main>
  );
}
/* 
 Desktop

     <main className="relative">
      <Image src="/home-img.png" alt="home-img" width={1280} height={10} className="w-full" />
      <div className="absolute w-80 top-20 left-20">
        <h1 className="text-white text-4xl">De ahora en adelante, hacés más con tu dinero</h1>
        <h1 className="text-ylw text-2xl mt-3">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <section className="w-full h-40 bg-ylw rounded-t-xl absolute bottom-0">
      <div className="flex flex-row justify-around w-3/4 m-auto relative -top-24">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>
    </main>


*/