import { Input } from "./Input";
import { Check } from "./Check";
import { input } from "../../utils/input";
import { checklist } from "../../utils/checklist";

export const Entrepreneur = ({ step, form, setForm, errors }) => {
    return (
        <>
            {
                step === 0 && (
                    input.diagnostic.entrepreneur.map(item => (
                        <Input key={item.id} {...item} setForm={setForm} 
                            value={form[item.id]} errors={errors} />
                    ))
                )
            }
            {   step === 1 &&  
                    <Check item={checklist.diagnostic.entrepreneur.step1} form={form} 
                        setForm={setForm} errors={errors} /> 
            }
            {
                step === 2 && checklist.diagnostic.entrepreneur.step2.map((item, index) => (
                    <Check key={index} item={item} form={form} setForm={setForm} errors={errors} />
                ))
            }
            {   step === 3 && 
                    <Check item={checklist.diagnostic.entrepreneur.step3} form={form} 
                        setForm={setForm} errors={errors} /> 
            }
            {
                step === 4 && checklist.diagnostic.entrepreneur.step4.map((item, index) => (
                    <Check key={index} item={item} form={form} setForm={setForm} errors={errors} />
                ))
            }
        </>
    );
};
