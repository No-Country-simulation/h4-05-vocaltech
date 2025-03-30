import { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Card } from "./Card";
import { testimonials } from "../../utils/testimonials";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export const Testimonials = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => setIndex(selectedIndex);

    const handlePrev = () => {
        const prevIndex = index === 0 ? testimonials.length - 1 : index - 1;
        setIndex(prevIndex);
    };

    const handleNext = () => {
        const nextIndex = (index + 1) >= testimonials.length ? 0 : index + 1;
        setIndex(nextIndex);
    };

    return (
        <section className="testimonials container py-5 mb-5">
            <div className="col-lg-5">
                <p className="small-subtitle text-lightgray lead">HISTORIAS DE ÉXITO</p>
                <h2 className="subtitle text-black display-2 fw-bolder pb-5">
                    Lo que dicen nuestros clientes
                </h2>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <div className="d-none gap-4 d-lg-flex">
                        <button onClick={handlePrev} className="btn p-0">
                            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="fs-3" />
                        </button>
                        <button onClick={handleNext} className="btn p-0">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} className="fs-3" />
                        </button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={3000}>
                        {
                            testimonials.map((testimonial) => (
                                <Carousel.Item key={testimonial.id}>
                                    <Card
                                        name={testimonial.name}
                                        role={testimonial.role}
                                        description={testimonial.description}
                                        imgUrl={testimonial.imgUrl}
                                        logoCompany={testimonial.logoCompany}
                                    />
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </div>
                <div className="d-flex gap-4 justify-content-center pt-4 d-lg-none">
                    <button onClick={handlePrev} className="btn p-0">
                        <FontAwesomeIcon icon={faArrowAltCircleLeft} className="fs-2" />
                    </button>
                    <button onClick={handleNext} className="btn p-0">
                        <FontAwesomeIcon icon={faArrowAltCircleRight} className="fs-2" />
                    </button>
                </div>
            </div>
        </section>
    );
};
