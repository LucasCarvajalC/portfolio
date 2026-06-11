import ContactMethod from "./ContactMethod"

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

export default function Contact() {
    return (
        <section className="bg-black text-white py-16 px-6">
            <div className="max-w-4xl mx-auto text-center">

                <h1 className="text-big-title-v font-bold mb-3">
                    ¿Estas interesado?
                </h1>

                <p className="max-w-2xl mx-auto text-body text-white/80 leading-relaxed">
                    ¿Tienes una idea en mente o un problema de negocio que quieras resolver
                    con tecnología? Cuéntanos sobre tu proyecto. Estamos listos para diseñar
                    y desarrollar la plataforma web que tu empresa necesita para crecer.
                </p>

                <div className="mt-8">
                    <h3 className="text-subtitle font-semibold mb-4">
                        Contacto directo
                    </h3>

                    <div className="flex justify-center gap-12">
                        <ContactMethod
                            title="WhatsApp"
                            icon={faWhatsapp}
                            href="https://wa.me/573175140183?text=Hola,%20estoy%20interesado%20en%20un%20proyecto" //Boleatear a Farelo
                        />

                        <ContactMethod
                            title="Mail"
                            icon={faEnvelope}
                            href="mailto:ravenmind.dev@gmail.com?subject=Consulta%20desde%20el%20Portafolio"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}