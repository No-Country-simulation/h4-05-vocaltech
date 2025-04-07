export const Input = ({ id, label, type, placeholder, setForm, value, errors }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setForm(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="form-group mb-4">
            <label htmlFor={id} className="form-label fw-bold">{label}</label>
            <input  
                id={id} 
                name={id}
                type={type}
                className="form-control border-0 border-bottom rounded-0 bg-transparent px-0" 
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
            />
            {
                errors?.[id] && (
                    <div className="invalid-feedback d-block">
                        {errors[id]}
                    </div>
                )
            }
        </div>
    );
};
