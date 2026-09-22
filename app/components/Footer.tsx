import Image from "next/image";
import { BOOKING_URL } from "../lib/constants";
import { INSTAGRAM_URL } from "../lib/constants";
import { TIKTOK_URL } from "../lib/constants";
import { Smartphone, Camera, Clapperboard, MapPin } from "lucide-react"

export default function Footer() {

    return (
        <section className=" flex flex-col w-full items-center justify-between md:px-6 bg-zinc-950">
            <div className="flex w-full items-center py-6 lg:justify-center md:justify-between">
                <Image src="/media/logo-haka.png" alt="logo Haka" width={150} height={60}></Image>
                <div className="flex flex-col md:flex-row md:items-center p-5  text-zinc-50 ">
                    <div className="flex flex-col py-5 px-10">
                        <h4 className="font-bold text-2xl">REDES SOCIALES</h4>
                        <div className="flex gap-2 items-center">
                            <Camera />
                            <a href={INSTAGRAM_URL}>INSTAGRAM</a>
                        </div>
                        <div className="flex py-2 gap-2 items-center">
                            <Clapperboard />
                            <a href={TIKTOK_URL}>TIKTOK</a>
                        </div>
                    </div>
                    <div className="flex flex-col py-5  px-10">
                        <h4 className="font-bold text-2xl">CONTACTO</h4>
                        <div className="flex gap-2 items-center">
                            <Smartphone />
                            <p>1137727295</p>
                        </div>
                        <div className="flex py-2 gap-2 items-center">
                            <MapPin />
                            <p>Uspallata 2120, Hurlingham</p>
                        </div>
                    </div>
                    <a href={BOOKING_URL} className="text-zinc-100 text-xl px-10  py-4 bg-violet-400 rounded-full ">RESERVÁ TU TURNO!</a>
                </div>
            </div>
            <div>
                <h1>© 2026 Haka Nails</h1>
                <p>Desarrollado por Martin Peralta</p>
            </div>
        </section>

    );
}