import "../styles/contactInfo.css"

export const ContactInfo = () => {
    return (
        <section className="contactInfoContainer">
            <div className="block1">
                <h2>Contactar al equipo de Vocaltech</h2>
                <p>Las mejores ideas cobran vida cuando se comunican con claridad y estrategia. En VocalTech, te ayudamos a conectar, liderar y construir con impacto.</p>
                <p>Escríbenos y comencemos a crear juntos.</p>
                <p class="">Miles de emprendedores y empresas ya confían en VocalTech para impulsar su comunicación y desarrollo, ¿te sumas?</p>
            </div>
            <div className="block2">
                <form className="form">
                <h3>Formulario de Contacto</h3>
                    <div className="inputBlock">
                        <label for="name">Nombre *</label>
                        <input id="name" type="text" name="name" placeholder="Tu nombre / Empresa"></input>
                    </div>
                    <div className="inputBlock">
                        <label for="email">Email *</label>
                        <input id="email" type="email" name="email" placeholder="tucorreo@email.com"></input>
                    </div>
                    <div className="inputBlock">
                        <label for="topic">Asunto *</label>
                        <input id="topic" type="text" name="topic" placeholder="Asunto de la consulta"></input>
                    </div>
                    <div className="inputBlock">
                        <label for="message">Mensaje *</label>
                        <textarea id="message" type="text" name="message" placeholder="¿En qué te podemos ayudar?"></textarea>
                    </div>
                    <div className="buttonContainer">
                        <button className="submitButton">
                            Enviar Consulta
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}