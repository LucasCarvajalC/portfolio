import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState} from "react";

export default function Card({ title, description, bigDescription, icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`
        w-full
        rounded-2xl
        bg-surface/75
        backdrop-blur-md
        px-8 py-6
        transition-all duration-300
        border-2 border-transparent
        hover:-translate-y-1
        hover:border-blue-raven
        cursor-pointer
        [animation-fill-mode:forwards]
        ${!isOpen ? "hover:animate-floating" : ""}
      `}
      onClick={() => setIsOpen(!isOpen)}
    >
      
      <div className="border-l-4 border-blue-raven pl-5 mb-7 h-25.75">
        <div>
          <h2 className="text-white text-page-title font-bold mb-3">{title}</h2>
        </div>
    
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={icon} style={{color: "white", fontSize: "3rem"}} />
          <p className="text-white text-body">{description}</p>
        </div>        
      </div>      

      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          ${isOpen ? "max-h-40" : "max-h-0"}
        `}
      >
        <p className="text-white text-body pl-4">
          {bigDescription}
        </p>
      </div>

    </section>
  );
}