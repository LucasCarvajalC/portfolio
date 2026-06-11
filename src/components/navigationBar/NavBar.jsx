import { useEffect, useState } from "react";
import logo from "../../assets/logo/alternative-2-wb.png";

export default function NavBar() {
    const [activeSection, setActiveSection] = useState("inicio");

    const links = [
        { id: "inicio", text: "Inicio" },
        { id: "servicios", text: "Servicios" },
        { id: "experiencia", text: "Experiencia" },
        { id: "nosotros", text: "Nosotros" },
        { id: "contacto", text: "Contacto" },
    ];

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="w-full flex justify-between items-center p-8 h-17.5 bg-black/50 backdrop-blur-xl text-white sticky top-0 right-0 z-50">

            <a href="#inicio">
                <img
                    src={logo}
                    alt="Logo"
                    className="w-full h-auto"
                />
            </a>

            <div className="flex items-center gap-8">
                {links.map((link) => (
                    <a
                        key={link.id}
                        href={`#${link.id}`}
                        className={`
                            text-subtitle
                            transition-all duration-300
                            ${
                                activeSection === link.id
                                    ? "text-primary underline underline-offset-8"
                                    : "hover:underline"
                            }
                        `}
                    >
                        {link.text}
                    </a>
                ))}
            </div>

        </nav>
    );
}