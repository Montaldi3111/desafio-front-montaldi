import Image from "next/image";
import Card from "../components/HomeCard/Card";
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
    <main className="relative h-screen">
      <Image src="/image.png" alt="home-img" width={1000} height={1500} className="absolute" />
      <section id="text-content" className="absolute">
        <h1 id="text-head" className="text-white text-xl">De ahora en adelante, hacés más con tu dinero</h1>
        <h1 id="text-subcontent" className="text-ylw text-[16px]">Tu nueva <b>billetera</b> virtual</h1>
      </section>
      <section id="card-container" className="absolute w-full bg-ylw rounded-t-md">
      <div id="cards" className="relative">
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

  Mobile

      <main className="relative phone:h-screen phone:bg-ylw">
      <Image src="/image.png" alt="home-img" width={1000} height={1500} className="absolute phone:h-72" />
      <div className="absolute phone:w-32 top-2 left-5 phone:mb-10">
        <h1 className="text-white phone:text-lg ">De ahora en adelante, hacés más con tu dinero</h1>
        <p className="phone:border-t-4 phone:w-12 phone:my-4"></p>
        <h1 className="text-ylw phone:text-md phone:mt-1">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <section className="absolute phone:w-full phone:bg-ylw phone:rounded-t-md bottom-6">
      <div className="phone:relative phone:flex phone:flex-col phone:justify-center -top-10">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>
    </main>

  Tablet

      <main className="relative h-screen">
      <Image src="/image.png" alt="home-img" width={1000} height={1500} className="absolute tablet:h-[70vh]" />
      <div className="absolute tablet:w-32 top-2 left-5 tablet:mb-10">
        <h1 className="text-white tablet:text-lg ">De ahora en adelante, hacés más con tu dinero</h1>
        <p className="tablet:border-t-4 tablet:w-12 tablet:my-4"></p>
        <h1 className="text-ylw tablet:text-md tablet:mt-1">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <section className="absolute tablet:w-full tablet:h-[40vh] tablet:bg-ylw tablet:rounded-t-md bottom-0">
      <div className="tablet:relative tablet:flex tablet:flex-col -top-20">
        <Card message={card1}/>
        <Card message={card2}/>
      </div>
      </section>


*/