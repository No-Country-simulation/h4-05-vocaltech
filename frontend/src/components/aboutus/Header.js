import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faMagnet, faRocket, faSearch, faTrophy, faMicrophone } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
    return (
        <section>
            <section className="aboutus-header px-3 pb-4 pb-lg-5 px-md-4">
                <h1 className="aboutus-header-h1">
                    Juntos, impulsamos tu crecimiento
                </h1>
                <div className="w-100 h-100 d-flex justify-content-center align-items-end position-relative mb-5">
                    <img src="/images/vocaltech-light-logo.png" width="328" height="54" alt="Vocaltech Logo" className="mx-3" />
                </div>
            </section>
            <section className="section-who-we-are">
                <div class="d-flex flex-column gap-3">
                    <div class="d-flex flex-column gap-3">
                        <h3>Quienes Somos</h3>
                        <p>Bienvenidos a Vocaltech
                            Somos una plataforma que une lo mejor de la comunicación y la tecnología para ofrecer soluciones integrales a emprendedores y empresas. Nuestro enfoque está basado en el diagnóstico personalizado y el acompañamiento estratégico para ayudar a nuestros clientes a alcanzar sus objetivos.
                            Get Started
                            Learn More</p>
                    </div>
                    <p>
                        Creemos que el verdadero crecimiento empresarial y emprendedor nace de la combinación perfecta entre las habilidades humanas y las soluciones estratégicas. Nuestra misión es ser el socio clave de empresas y emprendedores que buscan no solo adaptarse a los cambios, sino liderarlos.
                    </p>
                </div>
                <img src="/images/reunion.png" width="390" height="390" alt="Reunion" className="mx-3" />
            </section>
            <section className="section-the-alliance">
                <div class="d-flex flex-column gap-2">
                    <p className="small-subtitle text-lightgray lead text-center">NO-COUNTRY + VOS Y TU VOZ</p>
                    <h2 className="subtitle text-black display-2 fw-bolder text-center pb-3">
                        La Alianza
                    </h2>
                </div>
                <p>
                    VocalTech nace de la unión entre No Country, referente en talento digital y desarrollo tecnológico, y Vos y Tu Voz, expertos en comunicación y liderazgo. Esta alianza combina tecnología e innovación con entrenamiento vocal y estratégico, creando soluciones integrales para emprendedores y empresas.
                </p>
            </section>
            <section className="section-last-fortresses">
                <section className="d-flex justify-content-between">
                    <div className="d-flex flex-column gap-2 ">
                        <h3>Unimos Fortalezas:<br />
                            Transformamos Negocios</h3>
                        <p>Expertos en comunicación y tecnología trabajando por tu éxito.</p>
                    </div>
                    <div className="d-flex gap-2">
                        <img src="/images/ines.png" width="120" height="137" alt="Ines" className="mx-3" />
                        <img src="/images/group.png" width="120" height="137" alt="Grupo de trabajo" className="mx-3" />
                        <img src="/images/lean.png" width="120" height="137" alt="Reunion" className="mx-3" />
                    </div>
                </section>
                <section className="d-flex justify-content-center">
                    <div className="d-flex gap-5">
                        <div className="global-reach-container d-flex flex-column gap-1 w-26">
                            <div className="global-reach">+15</div>
                            <p>Presencia en Paises</p>
                        </div>
                        <div className="global-reach-container d-flex flex-column gap-1 w-26">
                            <div className="global-reach">+5.000</div>
                            <p>Talentos IT Validados</p>
                        </div>
                        <div className="global-reach-container d-flex flex-column gap-1 w-26">
                            <div className="global-reach">+20</div>
                            <p>Roles Tech</p>
                        </div>
                        <div className="global-reach-container d-flex flex-column gap-1 w-26">
                            <div className="global-reach">+1.000</div>
                            <p>Talleres impartidos </p>
                        </div>
                    </div>
                </section>
            </section>

            <section className="aboutus-services py-5 mb-5">
                <div className="col-lg-7 mx-lg-auto">
                    <p className="small-subtitle text-lightgray lead text-center">SERVICIOS ADAPTADOS A TUS NECESIDADES</p>
                    <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                        Nuestros Servicios
                    </h2>
                </div>
                <div className="row">
                    {/* Tarjeta 1 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faSearch} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Diagnósticos Personalizados</h3>
                            <p className="subtitle-card-services py-2">IDENTIFICAR NECESIDADES</p>
                            <p>Identificamos tus necesidades y diseñamos un plan a medida...</p>
                        </div>
                    </div>

                    {/* Tarjeta 2 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faTrophy} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Soluciones Integrales</h3>
                            <p className="subtitle-card-services py-2">IDEAS QUE TRANSFORMAN</p>
                            <p>Te ayudamos a superar desafíos específicos de tu negocio...</p>
                        </div>
                    </div>

                    {/* Tarjeta 3 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faMicrophone} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Estrategias de Comunicación</h3>
                            <p className="subtitle-card-services py-2">CONECTA DE MANERA AUTÉNTICA</p>
                            <p>Transforma la manera en que hablas con tu equipo...</p>
                        </div>
                    </div>

                    {/* Tarjeta 4 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faBolt} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Talento
                                Validado</h3>
                            <p className="subtitle-card-services py-2">ACCESO A PROFESIONALES TECH</p>
                            <p>Accede a profesionales digitales listos para transformar tu proyecto, en  +20 roles dentro de 4 verticales como:
                                No-Code, Desarrollo Web, Data BI y Mobile.</p>
                        </div>
                    </div>

                    {/* Tarjeta 5 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faMagnet} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Mejora tu
                                Pitch</h3>
                            <p className="subtitle-card-services py-2">PERSUADIR A TRAVÉS DE LA VOZ</p>
                            <p>Te ayudamos a crear o mejorar tu pitch para atraer a tus clientes o inversores de forma efectiva.
                                Comunica tu idea, vende y transforma.</p>
                        </div>
                    </div>

                    {/* Tarjeta 6 */}
                    <div className="card-service mb-4 col-md-6 col-lg-4">
                        <div className="border shadow-md rounded-3 p-4 px-md-5 bg-special-gray h-100">
                            <FontAwesomeIcon icon={faRocket} className="fs-3 icon-services" />
                            <h3 className="text-black fw-semibold fs-3 pt-2">Construcción
                                de MVP</h3>
                            <p className="subtitle-card-services py-2">TU PRODUCTO LISTO</p>
                            <p>Convierte tu idea en un producto funcional en  5 semanas. Desde la validación del concepto hasta el desarrollo. Obtén un MVP sólido, escalable y listo para el mercado.</p>
                        </div>
                    </div>
                </div>
            </section>


        </section>
    );
};