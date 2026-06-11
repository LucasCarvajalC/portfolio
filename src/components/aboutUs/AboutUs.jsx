import TeamComponent from "./TeamComponent";
import samuel from "../../assets/other/samuel.png";
import juan from "../../assets/other/farelo.png";
import santiago from "../../assets/other/santiago.jpeg";
import lucas from "../../assets/other/lucas.jpeg";

const members = [
  { name: "Samuel Polo", role: "Ing. Frontend", photo: samuel },
  { name: "Juan Farelo", role: "Ing. Backend", photo: juan },
  { name: "Santiago Torres", role: "Ing. Backend", photo: santiago },
  { name: "Lucas Carvajal", role: "Ing. Frontend", photo: lucas },
];
export default function AboutUs() {
  return (
    <section className="w-full py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-16 px-6">

        <h2 className="text-tbig-title font-bold text-white-soft text-center">
          Nosotros
        </h2>

        <div className="flex flex-wrap justify-center gap-10">
          {members.map((member) => (
            <TeamComponent
              key={member.name}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>

        <div className="relative w-full max-w-[1328px] rounded-card bg-black-soft px-8 py-10 md:px-16 md:py-12">

          <span
            aria-hidden="true"
            className="absolute left-8 top-10 h-40px border-l-4 border-blue-raven md:left-16"
          />

          <div className="pl-8 md:pl-12">

            <h3 className="mb-4 text-title font-bold text-white-soft">
              Nuestra misión
            </h3>

            <p className="max-w-[1113px] text-subtitle font-semibold leading-relaxed text-white-soft">
              Desarrollar soluciones web para empresas pequeñas, medianas o
              grandes que integran tecnologías vanguardistas, como modelos de
              inteligencia artificial, para permitir a nuestros clientes estar
              a la par del mercado y optimizar sus flujos de trabajo.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}