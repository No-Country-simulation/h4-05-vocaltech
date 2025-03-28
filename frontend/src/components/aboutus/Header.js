export const Header = () => {
    return (
        <section className="about-us-header px-3 pb-4 pb-lg-5 px-md-4">
            <div className="container pt-5 text-center">
                <div className="row pt-5 mt-5 px-md-4">
                    <span className="border border-white rounded-2 border-2 mt-md-4 mx-auto mt-lg-5 
                        col-lg-9 col-xl-8">
                        <h1 className="display-1 py-3 fw-bold text-white title-header">
                            Juntos, impulsamos tu crecimiento
                        </h1>
                    </span>
                    <div className="position-absolute img-container">
                        <img src="/images/logos/vocaltech-light-logo.png" 
                            width="250" alt="Vocaltech Logo" />
                    </div>
                </div>
            </div>
        </section>
    );
};
