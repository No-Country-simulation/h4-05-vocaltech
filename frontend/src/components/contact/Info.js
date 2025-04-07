import { useState } from "react";
import { Brand } from "../Brand";
import { Form } from "./Form";
import { SentSucessfully } from "./SentSucessfully"
import { ErrorSending } from "../diagnostic/ErrorSending";
import { brands } from "../../utils/brands";

export const ContactInfo = () => {
    const [isSentSucessfully, setIsSentSucessfully] = useState(false);
    const [isErrorSending, setIsErrorSending] = useState(false);

    return (
        <section className="contact container py-5 mt-5 mb-md-5">
            {
                isSentSucessfully ? (
                    <SentSucessfully />
                ) : isErrorSending ? (
                    <ErrorSending />
                ) : (
                    <div className="row pt-lg-5 mt-lg-4">
                        <div className="col-lg-6 pe-xl-5">
                            <h2 className="subtitle text-black display-3 text-center text-lg-start 
                                fw-bolder pb-3 pt-5 pt-lg-0 pe-xl-5">
                                Contactar al equipo de Vocaltech
                            </h2>
                            <p className="lead text-center text-lg-start pb-md-3">Las mejores ideas cobran vida cuando se 
                                comunican con claridad y estrategia. En VocalTech, te ayudamos a conectar, liderar
                                y construir con impacto.
                            </p>
                            <p className="lead pb-md-3">Escríbenos y comencemos a crear juntos.</p>
                            <p className="lead fw-semibold text-lightgray pb-3">Miles de emprendedores y empresas ya confían en 
                                VocalTech para impulsar su comunicación y desarrollo, ¿te sumas?
                            </p>
                            <div className="col-lg-8 col-xl-9 d-flex align-items-center gap-4 gap-md-0 gap-lg-4">
                                {
                                    brands.map(brand => (
                                        <div className="col-md-3 text-center text-lg-start" key={brand.id}>
                                            <Brand brand={brand.img} width={brand.width} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pt-lg-0">
                            <Form 
                                setIsSentSucessfully={setIsSentSucessfully}
                                setIsErrorSending={setIsErrorSending} 
                            />
                        </div>
                    </div>
                )
            }
        </section>
    );
};
