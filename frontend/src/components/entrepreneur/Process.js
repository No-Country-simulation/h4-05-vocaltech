import { useRef } from "react"

export const Process = () => { 
const videoRefs = [useRef(null), useRef(null), useRef(null)];

const handleMouseEnter = (index) => {
    if (videoRefs[index].current) {
        videoRefs[index].current.play();
    }
}

const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
        videoRefs[index].current.pause();
    }
}

    return (
        <div className="container mt-3 p-4">
                <div className="row mb-4"> 
                    <div className="col-lg-4 col-md-4 col-sm-12 align-self-center">
                        <p className="text-primary fw-bold mb-3">PASO 1</p>
                        <h3 className="fw-bolder text-white mb-3">Realiza tu primer diagnóstico gratuito</h3>
                        <p className="text-white mb-4">Dinos qué necesitas y descubre oportunidades clave para mejorar. Nuestro diagnóstico gratuito te ayudará a identificar los desafíos y el mejor camino a seguir.</p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto align-self-center">
                        <video ref={videoRefs[0]} src="/videos/step1.mp4" type="video/mp4" muted className="img-fluid w-100 rounded-3 mb-sm-4 mb-md-0 mb-lg-0"
                        onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}></video>
                    </div>
                </div>
                <div className="row mb-4"> 
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto align-self-center">
                        <video ref={videoRefs[1]} src="/videos/step2.mp4" type="video/mp4" muted className="img-fluid w-100 rounded-3 mb-sm-4 mb-md-0 mb-lg-0"
                        onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}></video>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 align-self-center">
                        <p className="text-primary fw-bold mb-3">PASO 2</p>
                        <h3 className="fw-bolder text-white mb-3">Recibe la solución</h3>
                        <p className="text-white mb-4">Con base en tu diagnóstico, diseñamos una estrategia personalizada para ti. Recibirás un plan de acción claro, alineado con tus objetivos y necesidades.</p>
                    </div>
                 </div>
                <div className="row"> 
                    <div className="col-lg-4 col-md-4 col-sm-12 align-self-center">
                        <p className="text-primary fw-bold mb-3">PASO 3</p>
                        <h3 className="fw-bolder text-white mb-3">Comienza a transformar tu empresa</h3>
                        <p className="text-white mb-4">Es hora de implementar cambios y ver resultados. Con el apoyo de nuestros expertos, potenciarás tu comunicación, liderazgo y tecnología para llevar tu negocio al siguiente nivel.</p>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 text-center mx-auto align-self-center">
                        <video ref={videoRefs[2]} src="/videos/step3.mp4" type="video/mp4" muted className="img-fluid w-100 rounded-3"
                        onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}></video>
                    </div>
                </div>
        </div>
    )
}