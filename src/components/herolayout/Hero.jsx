export default function Hero(){
    return(
        <section id="inicio">
            <div className="w-auto h-screen flex flex-col items-start justify-center mb-17.5">
                <img src="../../assets/white-crow-wb.png" alt="Logo" className="w-32 h-32s self-center"/>
                <h1 className="text-text-big-title-v text-white font-extrabold">BIENVENIDO A:</h1>
                <h1 className="text-text-tbig-title font-black">RAVEN MIND</h1>
                <p className="text-text-subtitle font-semibold text-white/80 ">
                    Somos Ravenmind. Creamos software a medida, interfaces 
                    limpias y soluciones inteligentes que impulsan el crecimiento 
                    de tu negocio.
                </p>
            </div>
        </section>
    )
}