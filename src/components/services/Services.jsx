import Card from "./card";
import {
  faCode,
  faPalette,
  faRocket,
  faScrewdriverWrench
} from "@fortawesome/free-solid-svg-icons";

const myServices = [
    {title:"Desarrollo Web a Medida", description:"Creamos aplicaciones web y plataformas inteligentes que transforman ideas en soluciones de alto rendimiento.", bigDescription:"Convertimos tus necesidades en soluciones digitales potentes. Desarrollamos aplicaciones web y plataformas personalizadas con interfaces intuitivas, lógica sólida y tecnologías modernas. Desde paneles administrativos hasta sistemas de gestión complejos, construimos herramientas rápidas, seguras y escalables que optimizan procesos y potencian el crecimiento de tu empresa.", icon:faCode,},
    {title:"Diseño de Interfaces UI/UX", description:"Diseñamos experiencias digitales intuitivas que enamoran a tus usuarios.", bigDescription:"Una gran plataforma no solo debe funcionar; también debe enamorar a quien la utiliza. Diseñamos interfaces modernas, limpias y visualmente impactantes, pensadas para ofrecer una experiencia fluida en cualquier dispositivo. Analizamos el comportamiento de los usuarios para crear productos intuitivos, accesibles y memorables que refuercen la identidad de tu marca y conviertan cada interacción en una experiencia excepcional.", icon:faPalette},
    {title:"Sitios Web Corporativos y Landing Pages", description:"Impulsamos tu presencia digital con sitios que convierten visitantes en clientes.", bigDescription: "Tu presencia digital es la primera impresión de tu marca, y nos encargamos de que sea inolvidable. Diseñamos y desarrollamos landing pages y sitios corporativos de alto impacto, enfocados en captar la atención, transmitir confianza y convertir visitantes en clientes. Cada proyecto combina un diseño moderno, tiempos de carga rápidos y optimización para buscadores (SEO), creando una experiencia que impulsa el crecimiento de tu negocio y fortalece tu presencia en línea.", icon:faRocket},
    {title:"Mantenimiento y Soporte Continuo", description:"Optimizamos y modernizamos tu plataforma para que siempre rinda al máximo.", bigDescription:"La tecnología evoluciona constantemente, y tu plataforma debe hacerlo con ella. Optimizamos el rendimiento de sitios y aplicaciones existentes, corregimos problemas técnicos y modernizamos sistemas para garantizar mayor velocidad, estabilidad y seguridad. Desde mejoras en tiempos de carga hasta migraciones a tecnologías más avanzadas, nos aseguramos de que tu solución esté preparada para crecer y ofrecer una experiencia confiable las 24 horas del día.", icon:faScrewdriverWrench}
];

export default function Services() {
    return(
        <section className="w-full flex flex-col items-center gap-4 py-24" id="servicios">

            <div className="flex justify-center items-center p-auto w-full">
                <h2 className="font-bold text-white text-title mb-7">¿Que ofrecemos?</h2>
            </div>

            {myServices.map((service,key)=>(
                <Card 
                    key={key} 
                    title={service.title} 
                    description={service.description} 
                    bigDescription={service.bigDescription} 
                    icon={service.icon}
                />
            ))}
        </section>
    )
}