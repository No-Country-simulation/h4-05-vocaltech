import { schemas } from "./schemas";

export const isCurrentStepValid = async (user, step, form, setErrors) => {
    try {
        const currentSchema = schemas[user][step];
        const stepData = {
            ...form,
            ...form.selectedOptions, 
        };
        
        await currentSchema.validate(stepData, { abortEarly: false });
        setErrors({});
        return true;
    } catch (err) {
        const formattedErrors = {};
        
        err.inner.forEach((error) => {
            formattedErrors[error.path] = error.message;
        });
        
        setErrors(formattedErrors);
        return false;
    }
};
