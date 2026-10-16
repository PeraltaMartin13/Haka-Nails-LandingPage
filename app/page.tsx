import Hero from "./components/Hero";
import Services from "./components/Services"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import SobreProfesional from "./components/SobreProfesional";
import Carrusel from "./components/Carrusel";
export default function Home() {
  return (
    <div className="bg-cover bg-center bg-fixed flex flex-col flex-1 items-center justify-center  font-sans "
            style={{ backgroundImage: "url('/media/FondoPrueba.jpg')" }}
    >
      <main className="flex flex-1 w-full flex-col items-center justify-between  sm:items-start">
        <Nav />
        <Hero />
        <Services />
        <SobreProfesional />
        <Carrusel />
        <Footer />
      </main>
    </div>
  );
}
