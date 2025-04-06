import { useState } from "react";

export const Check = ({ user, item, form, setForm, errors }) => {
    const [selectedOption, setSelectedOption] = useState(
        form.selectedOptions?.[item.options[0].question] || null
    );

    const handleSelection = (option) => {
        setSelectedOption(option.id);
 
        setForm(prevForm => ({
            ...prevForm,
            selectedOptions: { ...prevForm.selectedOptions, [option.question]: option.id },
            ...(user === "company" && option.question === "q6" && option.id !== 43 && { specifyOther: "" })
        }));
    }; 

    return (
        <>
            <p className="fw-bold">{item.question}</p>
            <div className="d-flex flex-column gap-2 mb-4">
                {
                    item.options.map((opt, index) => (
                        <label key={opt.id} className="d-flex align-items-center gap-2" 
                            onClick={() => handleSelection(opt)}>
                            <input 
                                type="radio" 
                                name={opt.id} 
                                className="d-none" 
                                checked={selectedOption === opt.id} 
                                readOnly
                            />
                            <span className={`btn rounded-2 px-4 ${selectedOption === opt.id ? 
                                'btn-lightblue-personalized text-white' : 'btn-outline-primary'}`}>
                                {String.fromCharCode(65 + index)}
                            </span>
                            {opt.option}
                        </label>
                    ))
                }
                {
                    errors?.[item.options[0].question] && (
                        <div className="invalid-feedback d-block">
                            { errors[item.options[0].question] }
                        </div>
                    )
                }
            </div>
        </>
    );
};
