export const Header = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 text-center d-none d-md-block">
                    <div className="img-wrapper position-relative">
                        <div className="circle-bg-left position-absolute"></div>
                        <img
                            src="./images/empresa.jpg"
                            className="img-fluid rounded-circle shadow-lg img-company"
                            alt="Empresa"
                        />
                        <div className="circle-bg-right position-absolute"></div>
                    </div>
                </div>
                <div className="col-md-6 text-center text-md-start mb-5 mb-md-0">
                    <h1 className="display-5 fw-bolder">Potencia tu empresa</h1>
                    <p className="lead py-4">Ofrecemos soluciones innovadoras que impulsan el crecimiento 
                        y éxito de tu organización.
                    </p>
                    <button type="button"
                        className="btn btn-dark rounded-pill btn-personalized">
                        Solicitar Diagnóstico
                    </button>
                </div>
                <div className="col-md-6 text-center d-md-none">
                    <div className="img-wrapper position-relative">
                        <div className="circle-bg-left position-absolute"></div>
                        <img
                            src="./images/empresa.jpg"
                            className="img-fluid rounded-circle shadow-lg img-company"
                            alt="Empresa"
                        />
                        <div className="circle-bg position-absolute"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
