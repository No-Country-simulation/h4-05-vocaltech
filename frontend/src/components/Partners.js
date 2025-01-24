export const Partners = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Nuestra alianza</h2>
            <div className="row mb-4 align-items-center">
                <div className="col-md-6 col-lg-5">
                    <p className="pb-5 pb-md-0"><strong>Vos y Tu Voz</strong> y <strong>No Country</strong> se unen para 
                        potenciar el talento desde distintos sectores y el desarrollo de aplicaciones
                        innovadoras, ya seas emprendedor o líder de empresa.
                    </p>
                </div>
                <div className="col-md-6 col-lg-7 text-center">
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-5 mb-md-0">  
                            <img
                                src="./images/logo-voz.png"
                                className="img-fluid w-50"
                                alt="Vos y tu Voz logo"
                            
                            />
                        </div>
                        <div className="col-md-6"> 
                            <img
                                src="./images/logo-no-country.png"
                                className="img-fluid "
                                alt="No Country logo"
                            />
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    );
};
