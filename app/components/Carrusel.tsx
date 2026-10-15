"use client"

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
        <section id="Carrusel" className="">
            <Image className="border-4 rounded-4xl shadow-2xl w-175 h-175 object-cover "
                src={carrusel[indiceAct].image}
                alt="Diseño destacado"
                width={500}
                height={500}
            />
            <button onClick={() => setIndiceActual((indiceAct - 1 + carrusel.length) % carrusel.length)}>←</button>
            <button onClick={() => setIndiceActual((indiceAct + 1)% carrusel.length)}>→</button>
            {carrusel.map((imagen, index) => (
                index === indiceAct ? null : (
                <Image className={"opacity-25 rounded-4xl w-100 h-100 object-cover"}
                    alt={`Diseño de Uñas #${index + 1}`}
                    width={300}
                    height={300}
                    key={imagen.image}
                    src={imagen.image}
                />
            )))}


        </section>
    )
} 