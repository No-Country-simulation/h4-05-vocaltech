import * as yup from 'yup';

const entrepreneur = [
    yup.object({
        fullname: yup.string().required("Este campo es obligatorio"),
        projectSector: yup.string().required("Este campo es obligatorio"),
        email: yup.string().email().required("Este campo es obligatorio")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Formato de correo inválido"),
        phone: yup.string().required("Este campo es obligatorio"),
        socialMedia: yup.string().required("Este campo es obligatorio"),
    }),
    yup.object({
        q1: yup.number().required("Este campo es obligatorio"),
    }),
    yup.object({
        q2: yup.number().required("Este campo es obligatorio"),
        q3: yup.number().required("Este campo es obligatorio"),
        q4: yup.number().required("Este campo es obligatorio"),
    }),
    yup.object({
        q5: yup.number().required("Este campo es obligatorio"),
    }),
    yup.object({
        q6: yup.number().required("Este campo es obligatorio"),
        q7: yup.number().required("Este campo es obligatorio"),
    }),
];

const company = [
    yup.object({
        fullname: yup.string().required("Este campo es obligatorio"),
        occupation: yup.string().required("Este campo es obligatorio"),
        socialMedia: yup.string(),
        enterpriseName: yup.string().required("Este campo es obligatorio"),
        enterpriseEmail: yup.string().email().required("Este campo es obligatorio")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Formato de correo inválido"),
        enterpriseSector: yup.string().required("Este campo es obligatorio"),
        teamQuantity: yup.number().required("Este campo es obligatorio").moreThan(0, "Debe ser mayor a 0"),
    }),
    yup.object({
        q1: yup.number().required("Este campo es obligatorio"),
        q2: yup.number().required("Este campo es obligatorio"),
        q3: yup.number().required("Este campo es obligatorio"),
        q4: yup.number().required("Este campo es obligatorio"),
    }),
    yup.object({
        q5: yup.number().required("Este campo es obligatorio"),
        q6: yup.number().required("Este campo es obligatorio"),
        specifyOther: yup.string()
        .trim()
        .when('q6', {
            is: 43,
            then: schema => schema.required("Este campo es obligatorio"),
            otherwise: schema => schema.notRequired(),
        }),
    }),
];

const subscription = [
    yup.object({
        email: yup.string().email().required("Este campo es obligatorio")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Formato de correo inválido")
    }),
];

const query = [
    yup.object({
        name: yup.string().required("Este campo es obligatorio"),
        email: yup.string().email().required("Este campo es obligatorio")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, "Formato de correo inválido"),
        phone: yup.string().required("Este campo es obligatorio"),
        topic: yup.string().required("Este campo es obligatorio"),
        message: yup.string().required("Este campo es obligatorio"),
    }),
]

export const schemas = {
    entrepreneur,
    company,
    subscription,
    query
};
