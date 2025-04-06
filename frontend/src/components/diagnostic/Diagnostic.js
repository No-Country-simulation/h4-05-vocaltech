import { useState } from "react";
import { Header } from "./Header";
import { Feature } from "../cards/Feature";
import { features } from "../../utils/features";
import { Form } from "./Form";
import { SentSucessfully } from "./SentSucessfully";
import { ErrorSending } from "./ErrorSending";

export const Diagnostic = () => {
    const [user, setUser] = useState("");
    const [isSentSucessfully, setIsSentSucessfully] = useState(false);
    const [isErrorSending, setIsErrorSending] = useState(false);
    const getUser = (user) => setUser(user);

    return (
        <> 
            {
                isSentSucessfully ? (
                    <SentSucessfully />
                ) : isErrorSending ? (
                    <ErrorSending />
                ) : !user ? (
                    <>
                        <Header />
                        <div className="px-xl-5">
                            <h1 className="text-black display-6 fw-bolder pb-3">
                                ¿Qué necesitas construir o mejorar?
                            </h1>
                            <p className="lead pb-2">En Vocaltech te ayudamos a identificar y construir lo
                                que tu negocio necesita.
                            </p>
                            <div className="row d-flex gap-4 gap-md-0 justify-content-center">
                                {
                                    features.map(feature => (
                                        <div key={feature.id} className={`col-md-6 col-lg-4 
                                            ${feature.id === 1 ? "mb-md-4 mb-lg-0" : ""}`}>
                                            <Feature {...feature} />
                                        </div>
                                    ))
                                }
                            </div>
                            <p className="lead pt-4 pb-2">Para continuar, cuéntanos quién eres para 
                                adaptar tu diagnóstico
                            </p>
                            <div className="d-flex flex-wrap flex-md-nowrap justify-content-center gap-3 mt-3 
                                px-0 col-lg-9 col-xl-7 mx-auto">
                                <button
                                    type="button"
                                    onClick={() => getUser("entrepreneur")}
                                    className="btn btn-general btn-pink-personalized px-3 py-2 fw-bold text-white">
                                    Soy Emprendedor
                                </button>
                                <button
                                    type="button"
                                    onClick={() => getUser("company")}
                                    className="btn btn-general btn-multicolor-light-personalized px-3 
                                    py-2 fw-bold text-white">
                                    Represento una Empresa
                                </button>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <Header />
                        <Form 
                            user={user} 
                            setIsSentSucessfully={setIsSentSucessfully}
                            setIsErrorSending={setIsErrorSending} 
                        />
                    </>
                )
            }
        </>
    );
};
