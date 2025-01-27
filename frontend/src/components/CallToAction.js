export const CallToAction = () => {
    return (
        <section className="container py-5 my-5 text-center text-md-start">
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="wave"></div>
            <div className="digital-lines-top"></div>
            <div className="row align-items-center">
                <div className="col-md-6 pe-lg-5">
                    <h2 className="display-5 pb-4 fw-bolder">¡Da el siguiente paso hoy mismo!</h2>
                   
                </div>
                <div className="col-md-6">
                    <p className="lead pb-5">Descubre cómo podemos ayudarte a lograr tus objetivos. 
                        Completa nuestro diagnóstico personalizado o agenda una cita para comenzar a 
                        transformar tu proyecto
                    </p>
                    <div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3">
                        <button type="button" className="btn btn-dark rounded-pill btn-width-services zindex">
                            ¡Hazlo AHORA!
                        </button>
                        <button type="button" className="btn btn-dark rounded-pill btn-width-services zindex">
                            Agenda una cita
                        </button>
                    </div>
                </div>
            </div>
            <div className="digital-lines-bottom"></div>
        </section>
    );
};
