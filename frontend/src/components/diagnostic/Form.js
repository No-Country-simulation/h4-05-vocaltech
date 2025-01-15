import { useState, useEffect } from 'react';

export const Form = ({ needs, audioTitle }) => {
    const [formData, setFormData] = useState({needs: [], audio: null});

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            let updatedNeeds = [...prevData.needs];

            checked ? updatedNeeds.push(value) : updatedNeeds = updatedNeeds.filter((need) => need !== value); 
            return { ...prevData, needs: updatedNeeds };
        });
    };

    useEffect(() => {
        setFormData({
            needs: [],
            audio: null,
        });
    }, [needs]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); 

        setFormData({
            needs: [],
            audio: null,
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="form-group">
                {
                    needs?.map((need, index) => (
                        <div key={index}>
                            <input type="checkbox" value={need} onChange={handleCheckboxChange} 
                                id={`need-${index}`} checked={formData.needs.includes(need)}
                            />
                            <label htmlFor={`need-${index}`}>{need}</label>
                        </div>
                    ))
                }
            </div>
            <div className="form-group">
                <label htmlFor="audio">{audioTitle} (30-60 segundos)</label>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
};
