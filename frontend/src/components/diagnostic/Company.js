import { Input } from "./Input";
import { Check } from "./Check";
import { input } from "../../utils/input";
import { checklistDiagnostic } from "../../utils/checklistDiagnostic";

export const Company = ({ user, step, form, setForm, errors }) => {
    return (
        <>
            {
                step === 0 && (
                    input.diagnostic.company.map(item => (
                        <Input key={item.id} {...item} setForm={setForm} 
                            value={form[item.id]} errors={errors} />
                    ))
                )
            }
            {
                step === 1 && checklistDiagnostic.company.step1.map((item, index) => (
                    <Check key={index} item={item} form={form} setForm={setForm} errors={errors} />
                ))
            }
            {
                step === 2 && (
                    <>
                        {
                            checklistDiagnostic.company.step2.map((item, index) => (
                                <Check key={index} user={user} item={item} form={form}
                                    setForm={setForm} errors={errors} />
                            ))
                        }
                        {
                            form.selectedOptions.q6 === 43 && (
                                <Input
                                    id="specifyOther"
                                    label="Especifíca otro"
                                    type="text"
                                    placeholder="Ingresa tu respuesta..."
                                    value={form.specifyOther}
                                    setForm={setForm}
                                    errors={errors}
                                />
                            )
                        }
                    </>
                )
            }
        </>
    );
};
