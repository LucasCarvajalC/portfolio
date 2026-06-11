import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactMethod({ title, icon,href }) {
    return (
        <a href={href}
            target={title === "WhatsApp" ? "_blank" : "_self"} 
            rel="noreferrer"
            className="flex flex-col items-center gap-1 cursor-pointer transition-colors hover:text-blue-mid"
        >
            <div className="flex flex-col items-center gap-1 cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center">
                    <FontAwesomeIcon
                        icon={icon}
                        className="text-4xl"
                    />
                </div>

                <span className="text-small">
                    {title}
                </span>
            </div>
        </a>
    ); 
} 
