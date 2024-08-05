import Image from "next/image";
export default function Home() {
  return (
    <main className="relative">
      <Image src="/home-img.png" alt="home-img" width={500} height={10} className="w-full"/>
      <div className="absolute w-80 top-20 left-20">
        <h1 className="text-white text-4xl">De ahora en adelante, hacés más con tu dinero</h1>
        <h1 className="text-ylw text-2xl mt-3">Tu nueva <b>billetera</b> virtual</h1>
      </div>
      <div className="w-100 bg-ylw py-20 relative rounded-t-5xl" id="content"></div>
    </main>
  );
}
