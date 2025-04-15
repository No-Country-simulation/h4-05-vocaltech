import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const ProgressBar = ({ step }) => {
    return (
        <div className="d-flex align-items-md-center mx-auto mt-5" style={{ maxWidth: "600px" }}>
            <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon={faCircleCheck} className="text-lightblue" style={{ height: "40px" }} />
                <p className="text-sm text-center mt-2 text-lightblue">¿Qué necesitas?</p>
            </div>
            <div className="mt-3 mt-md-0 mx-2" style={{ height: "2px", backgroundColor: "#2684FC", width: "64px" }}></div>
            <div className="d-flex flex-column align-items-center">
                {
                    step === null ? (
                        <>
                            <span className="d-flex align-items-center text-gray justify-content-center 
                                rounded-circle fw-semibold" style={{ width: "45px", height: "45px", 
                                border: "2px solid #9A9A9A" }}>
                                2
                            </span>
                            <p className="text-sm text-center mt-2 text-gray">Ayúdanos a entenderte</p>
                        </>
                    ) : (
                        <>
                            <FontAwesomeIcon icon={faCircleCheck} className="text-lightblue" 
                                style={{ height: "40px" }} />
                            <p className="text-sm text-center mt-2 text-gray">Ayúdanos a entenderte</p>
                        </>
                    )
                }
            </div>
            <div className="mt-3 mt-md-0 mx-2" style={{ height: "2px", backgroundColor: "#2684FC", width: "64px" }}></div>
            <div className="d-flex flex-column align-items-center">
                <span className="d-flex align-items-center text-gray justify-content-center 
                    rounded-circle fw-semibold" style={{ width: "45px", height: "45px", 
                    border: "2px solid #9A9A9A" }}>
                    3
                </span>
                <p className="text-sm text-center mt-2 text-gray">Te damos la solución</p>
            </div>     
        </div>     
    );
};
