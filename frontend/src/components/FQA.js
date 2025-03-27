import { frequencyQuestions } from "../utils/FQA";

export const FQA = () => {
    return (
        <section className="fqa container py-5 mb-4">
            <div className="col-lg-7 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center">FQA</p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                    Preguntas frecuentes
                </h2>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="row">
                    {
                        frequencyQuestions.map((item, index) => (
                            <div key={index} className="col-md-6 pb-4">
                                <div className="accordion-item border-0 rounded-4 shadow-md">
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button collapsed d-flex gap-5 fw-bold text-black"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="false"
                                            aria-controls={`collapse${index}`}
                                            >
                                            {item.question}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};
