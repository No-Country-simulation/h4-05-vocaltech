export const Header = () => {
    return (
        <section className="landing-header">
            <div className="container pt-5 text-center">
                <div className="row">
                    {/* solo se muestra a partir de 768px */}
                    <div className="col-lg-6 col-xl-5 d-none d-lg-block"
                        style={{
                            backgroundImage: "url(./images/banner-home.png)",
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                        }}>
                    </div>
                    <div className="col-lg-6 col-xl-7 header-padding">
                        <h2 className="display-5 fw-bolder">
                            Trabajamos con tu voz para impulsar tus ideas
                        </h2>
                        <p className="py-4 lead">
                            Desarrolla tu proyecto o mejora tu negocio con nuestro
                            acompañamiento y las herramientas que necesitas para crecer.
                        </p>
                        <button type="button"
                            className="btn btn-outline-dark rounded-pill btn-personalized">
                            Conoce más
                        </button>
                    </div>
                    {/* solo se ve en mobile */}
                    <div className="d-lg-none mt-4"
                        style={{
                            backgroundImage: "url(./images/banner-home.png)",
                            backgroundPosition: "bottom",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain",
                            height: "260px",
                        }}>
                    </div>
                </div>
            </div>
        </section>
    );
};
