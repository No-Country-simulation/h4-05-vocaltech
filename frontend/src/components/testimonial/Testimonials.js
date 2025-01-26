import { Card } from "./Card";
import { testimonials } from "../../utils/testimonials";

export const Testimonials = () => {
    return (
        <section className="container py-5">
            <h2 className="display-7 fw-bolder text-center pb-5">Historias de éxito que inspiran</h2>
            <div className="row">
                {
                    testimonials.map(testimonial => (
                        <div key={testimonial.id} className="col-md-6 col-lg-4 col-xl-3 mb-4">
                            <Card
                                name={testimonial.name}
                                role={testimonial.role}
                                description={testimonial.description}
                                imgUrl={testimonial.imgUrl}
                                stars={testimonial.stars}
                                />
                        </div>
                    ))
                }
            </div>
        </section>
    );
};
