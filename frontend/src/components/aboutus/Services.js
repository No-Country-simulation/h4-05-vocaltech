import { Service } from "../cards/Service";
import { services } from "../../utils/services";
  
export const Services = () => {
    return (
        <section id="all-services" className="services-about-us container py-5">
            <div className="col-lg-7 mx-lg-auto">
                <p className="small-subtitle text-lightgray lead text-center">
                    SERVICIOS ADAPTADOS A TUS NECESIDADES
                </p>
                <h2 className="subtitle text-black display-2 fw-bolder text-center pb-5">
                    Nuestros servicios
                </h2>
            </div>
            <div className="row">
                {
                    services.map(service => (
                        <div className="mb-4 col-md-6 col-lg-4">
                        <Service
                            key={service.id}
                            icon={service.icon}
                            title={service.title}
                            subtitle={service.subtitle}
                            description={service.description}
                        />
                        </div>
                    ))
                }    
            </div>
        </section>
    );
};
