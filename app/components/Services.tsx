import ServiceCard from "./ServiceCard";

const services = [
    {title: "Caping Acrigel", description:"Refuerzo con poligel sobre largo natural + diseño a tu gusto.", image: "/media/capping-acrigel-1.jpeg" },
    {title: "Caping Acrilico", description:"Refuerzo con poligel sobre largo natural + diseño a tu gusto.", image: "/media/capping-acrilico-1.jpeg" },
    {title: "Esculpidas En Acrilico", description:"Alargá y dale tu forma favorita a tus uñas .", image: "/media/esculpidas-1.jpeg" },
    {title: "Esmaltado Semi permanente", description:"Esmaltado Semi Permanente sobre tu uña natural.", image: "/media/semi-permanente.jpeg" },
    {title: "Soft Gel", description:"Alarga tus uñas con los tips de gel, se adhieren a tu uña natural logrando una extensión más simple y un resultado duradero y delicado.", image: "/media/soft-gel.jpeg" },
    {title: "Retiro de Semi permanente", description:"Opcion unicamente para retiros de otros salones! o si desea retiro y no aplicarse un nuevo servicio.", image: "/media/semi-permanente.jpeg" },
    {title: "Retiro de Acrilico/Acrigel", description:"Opcion unicamente para retiros de otros salones! o si desea retiro y no aplicarse un nuevo servicio.", image: "/media/semi-permanente.jpeg" },
];

export default function Services(){
    return(
        <section id="Services" className="gap-8 py-14 px-16 grid grid-cols-1 lg:grid-cols-3">
            {services.map((service) => (
                <ServiceCard 
                key={service.title}
                title={service.title}
                image={service.image}
                description={service.description}
                />
            ))}
        </section>
    );

}

