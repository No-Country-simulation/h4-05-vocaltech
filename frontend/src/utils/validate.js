export const validate = async (schema, form, setError) => {
    try {
        await schema[0].validate(form, { abortEarly: false });
        setError("");
        return true;
    } catch (err) {
        const formattedErrors = {};
        err.inner.forEach((error) => {
            formattedErrors[error.path] = error.message;  
        });
        setError(formattedErrors); 
        return false;
    }
};
