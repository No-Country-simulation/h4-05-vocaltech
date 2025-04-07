import { useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Process = () => { 
    const videoRefs = [useRef(null), useRef(null), useRef(null)];

    const handleMouseEnter = (index) => {
        if (videoRefs[index].current) {
            videoRefs[index].current.play();
        }
    };

    const handleMouseLeave = (index) => {
        if (videoRefs[index].current) {
            videoRefs[index].current.pause();
        }
    };

    return (
        <div className="process container mb-5">
            <h2 className="subtitle text-white display-3 text-center fw-bolder pb-3">
                Cómo funciona
            </h2>
            <p className="lead pb-4 text-white text-md-center">Un proceso simple para grandes resultados</p>
            <div className="row"> 
                <div className="d-flex pt-md-5">
                    <div className="col-md-6 col-lg-5 col-xl-4 pe-md-5">
                        <p className="text-lightgray fw-bold"> 
                            <FontAwesomeIcon icon={faCircleCheck} className="icon-check-process me-2"/>PASO 1
                        </p>
                        <h3 className="fw-bolder text-white my-3">Realiza tu primer diagnóstico gratuito</h3>
                        <p className="text-white mb-4">Dinos qué necesitas y descubre oportunidades clave 
                            para mejorar. Nuestro diagnóstico gratuito te ayudará a identificar los desafíos 
                            y el mejor camino a seguir.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-8 ps-xl-5">
                        <video ref={videoRefs[0]} src="/videos/step1.mp4" type="video/mp4" 
                            muted className="img-fluid w-100 rounded-3"
                            onMouseEnter={() => handleMouseEnter(0)} onMouseLeave={() => handleMouseLeave(0)}>
                        </video>
                    </div>
                </div>
                <div className="d-flex pt-5 mt-lg-5">
                    <div className="d-md-none">
                        <p className="text-lightgray fw-bold"> 
                            <FontAwesomeIcon icon={faCircleCheck} className="icon-check-process me-2"/>PASO 2
                        </p>
                        <h3 className="fw-bolder text-white my-3">Recibe la solución</h3>
                        <p className="text-white mb-4">Con base en tu diagnóstico, diseñamos una estrategia 
                            personalizada para ti. Recibirás un plan de acción claro, alineado con tus 
                            objetivos y necesidades.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-8 pe-xl-5">
                        <video ref={videoRefs[1]} src="/videos/step2.mp4" type="video/mp4" 
                            muted className="img-fluid w-100 rounded-3"
                            onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={() => handleMouseLeave(1)}>
                        </video>
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4 d-none d-md-block text-md-end ps-md-5">
                        <p className="text-lightgray fw-bold"> 
                            PASO 2<FontAwesomeIcon icon={faCircleCheck} className="icon-check-process ms-2"/>
                        </p>
                        <h3 className="fw-bolder text-white my-3">Recibe la solución</h3>
                        <p className="text-white mb-4">Con base en tu diagnóstico, diseñamos una estrategia 
                            personalizada para ti. Recibirás un plan de acción claro, alineado con tus 
                            objetivos y necesidades.
                        </p>
                    </div>
                </div>
                <div className="d-flex pt-5 mt-lg-5">
                    <div className="col-md-6 col-lg-5 col-xl-4 pe-md-5">
                        <p className="text-lightgray fw-bold"> 
                            <FontAwesomeIcon icon={faCircleCheck} className="icon-check-process me-2"/>PASO 3
                        </p>
                        <h3 className="fw-bolder text-white my-3">Comienza a transformar tu empresa</h3>
                        <p className="text-white mb-4">Es hora de implementar cambios y ver resultados. 
                            Con el apoyo de nuestros expertos, potenciarás tu comunicación, liderazgo y 
                            tecnología para llevar tu negocio al siguiente nivel.
                        </p>
                    </div>
                    <div className="col-md-6 col-lg-7 col-xl-8 ps-xl-5">
                        <video ref={videoRefs[2]} src="/videos/step3.mp4" type="video/mp4" 
                            muted className="img-fluid w-100 rounded-3"
                            onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={() => handleMouseLeave(2)}>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};
