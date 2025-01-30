import { diagnosticNeeds } from "../../utils/diagnosticNeeds";

export const Needs = ({ selectedRole, selectedService, selectedNeeds, setSelectedNeeds }) => {

    const handleChange = (e) => {
        const { value, checked } = e.target;
        const id = Number(value); 

        setSelectedNeeds((prevNeeds) => checked ? [...prevNeeds, id] : prevNeeds.filter((need) => need !== id));
    };

    const getNeedsForService = () => {
        return selectedService === 5
            ? diagnosticNeeds[5][selectedRole === 1 ? 'emprendedor' : 'empresa']
            : diagnosticNeeds[selectedService] || [];
    };

    const needsList = getNeedsForService();

    return (
        <>
            {
                needsList.map((need) => (
                    <div key={need.id}>
                        <input
                            type="checkbox"
                            value={need.id}
                            onChange={handleChange}
                            id={need.id}
                            checked={selectedNeeds.includes(need.id)}
                        />
                        <label htmlFor={need.id} className="form-label ps-1 ps-md-3">
                            {need.text} 
                        </label>
                    </div>
                ))
            }
        </>
    );
};
