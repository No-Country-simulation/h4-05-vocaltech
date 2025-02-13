const appointments = [
    { title: "Nombre Cliente", property: "name" },
    { title: "Fecha de Solicitud", property: "startDate" },
    { title: "Correo Electrónico", property: "email" },
    { title: "Diagnóstico", property: "diagnostic" },
    { title: "Plan de Trabajo", property: "plan" },
];

const leads = [
    { title: "Nombre Cliente", property: "name" },
    { title: "Correo Electrónico", property: "email" },
    { title: "Diagnóstico", property: "diagnostic" },
    { title: "Fecha de creación", property: "creationDate" },
];

const users = [
    { title: "Nombre completo", property: "fullname" },
    { title: "Correo Electrónico", property: "email" },
    { title: "Organización", property: "role" },
    { title: "Acciones", property: "acciones" },
];

export const columnsTable = {
    appointments,
    leads,
    users
};
