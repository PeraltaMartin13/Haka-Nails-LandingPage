import Image from "next/image";

export default function Hero() {
    return (
        <section className=" py-10 w-full flex flex-col items-center text-center gap-6 ">
            <Image className="mx-auto" src="/media/logo-haka.png" alt="logo Haka" width={500} height={400}></Image>
        </section>
    );
}