import { brands } from "../utils/brands";
import { Brand } from "./Brand";

export const BrandsCallToAction = ({ subtitle, question, children }) => {
    return (
        <section className="container">
            <div className="row text-center">
                <p className="small-subtitle text-lightgray lead">
                    CLIENTES
                </p>
                <h2 className="subtitle text-black display-2 fw-bolder pb-5">{subtitle}</h2>
                <div className="col-lg-9 mx-lg-auto pb-5 d-flex align-items-center flex-wrap 
                    justify-content-center gap-5 gap-md-0">
                    {
                        brands.map(brand => (
                            <div className="col-md-3" key={brand.id}>
                                <Brand brand={brand.img} width={brand.width} />
                            </div>
                        ))
                    }
                </div>
                <p>{question}</p>
                {children}
            </div>
        </section>
    );
};
