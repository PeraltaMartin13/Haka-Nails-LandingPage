import Image from "next/image";
import { BOOKING_URL } from "../lib/constants"


type ServiceCardProps = {
    title: string;
    image: string;
    description: string;
};

//Cambiar tamaño  de <p>
export default function ServiceCard({ title, image, description }: ServiceCardProps) {
    return (
        <div className="bg-zinc-50 p-6 rounded-4xl text-center border-black border-4 ">
            <h3 className=" py-3 text-3xl font-bold text-zinc-950">{title}</h3>
            <Image className="mx-auto w-full rounded-2xl border-4 border-black" src={image} alt={title} width={600} height={400}></Image>
            <p className="text-zinc-900 text-4xl text-left py-4 ">{description}</p>
            <div className="text-center py-4">
                <a href={BOOKING_URL} className="text-zinc-100 text-2xl px-10 text-center py-4 bg-violet-400 rounded-full ">!! QUIERO !!</a>
            </div>

        </div>
    );
}