import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function ContactButton() {
    return(
        <a 
            href="#contacto"
            className="flex items-center gap-2 px-9 py-4 rounded-badge bg-blue-deep/65 backdrop-blur-md text-white fixed bottom-8 right-8 z-50 transition-all duration-300 hover:bg-blue-deep hover:animate-floating hover:shadow-lg shadow-md"
        >
            <FontAwesomeIcon icon={faEnvelope} />
            Contactanos
        </a>
    )
}