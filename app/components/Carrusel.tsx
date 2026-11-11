"use client"

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image"

const carrusel = [{ image: "/media/carrusel/Carrusel1.jpg" }, { image: "/media/carrusel/Carrusel2.jpg" }, { image: "/media/carrusel/Carrusel3.jpg" },
{ image: "/media/carrusel/Carrusel4.jpg" }, { image: "/media/carrusel/Carrusel5.jpg" }, { image: "/media/carrusel/Carrusel6.jpg" }, { image: "/media/carrusel/Carrusel7.jpg" },
{ image: "/media/carrusel/Carrusel8.jpg" }, { image: "/media/carrusel/Carrusel9.jpg" }, { image: "/media/carrusel/Carrusel10.jpg" },
{ image: "/media/carrusel/Carrusel11.jpg" }, { image: "/media/carrusel/Carrusel12.jpg" }
];

export default function Carrusel() {
    const [indiceAct, setIndiceActual] = useState(0);
    return (
        <section id="Carrusel" className="bg-black/90  py-5 w-full flex flex-col items-center  ">
            <div className="text-6xl py-4 ">No sabes que hacerte? acá algunas ideas...</div>
            <div className="overflow-hidden w-5xl relative">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(${+33.33 + (-indiceAct * 33.33)}%)` }}>
                    {carrusel.map((imagen, index) => (
                        <Image
                            className={`shrink-0 rounded-4xl w-1/3 h-150 object-cover transition-all duration-500 ${index === indiceAct ? "scale-100 opacity-100" : "scale-75 opacity-50"}`}
                            alt={`Diseño de Uñas #${index + 1}`}
                            width={300}
                            height={300}
                            key={imagen.image}
                            src={imagen.image}
                        />
                    ))}
                </div>
                <button onClick={() => setIndiceActual((indiceAct - 1 + carrusel.length) % carrusel.length)}
                    aria-label="Foto anterior"
                    className="text-white absolute left-4 top-1/2 -translate-y-1/2 p-3 hover:scale-110 transition">
                    <ChevronLeft size={100} strokeWidth={2} />
                </button>
                <button onClick={() => setIndiceActual((indiceAct + 1) % carrusel.length)}
                    aria-label="Foto Siguiente"
                    className="text-white absolute right-4 top-1/2 -translate-y-1/2 p-3 hover:scale-110 transition">
                    <ChevronRight size={100} strokeWidth={2} />
                </button>
            </div>

        </section>
    )
} 