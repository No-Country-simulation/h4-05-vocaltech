import { Input } from "./Input";
import { Check } from "./Check";
import { inputDiagnostic } from "../../utils/inputDiagnostic";
import { checklistDiagnostic } from "../../utils/checklistDiagnostic";

export const Entrepreneur = ({ step, form, setForm, errors }) => {
    return (
        <>
            {
                step === 0 && (
                    inputDiagnostic.entrepreneur.map(item => (
                        <Input key={item.id} {...item} setForm={setForm} 
                            value={form[item.id]} errors={errors} />
                    ))
                )
            }
            {   step === 1 &&  
                    <Check item={checklistDiagnostic.entrepreneur.step1} form={form} 
                        setForm={setForm} errors={errors} /> 
            }
            {
                step === 2 && checklistDiagnostic.entrepreneur.step2.map((item, index) => (
                    <Check key={index} item={item} form={form} setForm={setForm} errors={errors} />
                ))
            }
            {   step === 3 && 
                    <Check item={checklistDiagnostic.entrepreneur.step3} form={form} 
                        setForm={setForm} errors={errors} /> 
            }
            {
                step === 4 && checklistDiagnostic.entrepreneur.step4.map((item, index) => (
                    <Check key={index} item={item} form={form} setForm={setForm} errors={errors} />
                ))
            }
        </>
    );
};
