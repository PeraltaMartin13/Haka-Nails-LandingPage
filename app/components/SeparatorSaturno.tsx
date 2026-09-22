import Separator from "./Separator";

const imagen = {title: "Saturno", image: "/media/Saturno.png"};

export default function SeparatorSaturno(){
    return(
        <section id="separadorSaturno" className="flex w-full justify-center bg-amber-300">
            <Separator 
            key={imagen.title}
            title={imagen.title}
            image={imagen.image}
            />
        </section>
    )
}