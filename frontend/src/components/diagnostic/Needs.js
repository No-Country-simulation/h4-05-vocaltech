import { diagnosticNeeds } from "../../utils/diagnosticNeeds";

export const Needs = ({ selectedService, selectedNeeds, setSelectedNeeds }) => {
    
    const handleChange = (e) => {
        const { value, checked } = e.target;
        
        setSelectedNeeds((prevNeeds) => {
            if (checked) {
                return [...prevNeeds, value];
            } else {
                return prevNeeds.filter((need) => need !== value);
            }
        });
    };

    return (
        <>
            {
                diagnosticNeeds[selectedService]?.map((need, index) => (
                    <div key={index}>
                        <input
                            type="checkbox"
                            value={need}
                            onChange={handleChange}
                            id={`need-${index}`}
                            checked={selectedNeeds.includes(need)}
                        />
                        <label htmlFor={`need-${index}`} className="form-label ps-1 ps-md-3">{need}</label>
                    </div>
                ))
            }
        </>
    );
};
