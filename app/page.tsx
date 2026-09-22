import Hero from "./components/Hero";
import Services from "./components/Services"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import SeparatorSaturno from "./components/SeparatorSaturno";
import SobreProfesional from "./components/SobreProfesional";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between  bg-white dark:bg-black sm:items-start">
        <Nav />
        <Hero />
        <Services />
        <SeparatorSaturno />
        <SobreProfesional />
        <Footer />
      </main>
    </div>
  );
}
