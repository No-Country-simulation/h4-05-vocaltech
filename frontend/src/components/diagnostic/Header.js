export const Header = () => {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="text-center">
                    <h1 className="display-5 fw-bolder" 
                        style={{background: "linear-gradient(135deg, #6a11cb, #2575fc)", 
                        WebkitBackgroundClip: "text",  
                        WebkitTextFillColor: "transparent"}}>¡Haz tu Diagnóstico!</h1>
                    <p className="lead pt-2">Responde algunas preguntas y recibe un análisis personalizado 
                        de tus necesidades.</p>
                </div>
            </div>
        </section>
    );
};
