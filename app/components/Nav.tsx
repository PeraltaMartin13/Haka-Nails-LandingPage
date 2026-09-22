"use client"

import Image from "next/image"
import { useState } from "react"
import { INSTAGRAM_URL } from "../lib/constants"
import { BOOKING_URL } from "../lib/constants"



export default function Nav() {
    const [menuDesplegado, setMenuDesplegado] = useState(false)

    return (
        <nav className="flex w-full items-center sticky top-0 px-10 justify-between bg-violet-400">
            <Image src="/media/logo-haka.png" alt="logo Haka" width={90} height={60}></Image>
            <div className="flex gap-5" >
                <button className="text-base p-4 md:hidden" onClick={() => setMenuDesplegado(!menuDesplegado)}>☰</button>
                <div className={`${menuDesplegado ? "flex flex-col" : "hidden"} gap-y-4 text-base font-bold md:flex md:flex-row md:text-2xl md:gap-x-10`}>
                    <a href={BOOKING_URL}>Reservar Un Turno</a>
                    <a href="#Services">Servicios</a>
                    <a href={INSTAGRAM_URL}>Mi Instragram</a>
                    <a href="#SobreMi">Un Poco Sobre mi</a>
                </div>
            </div>
        </nav>
    )
}