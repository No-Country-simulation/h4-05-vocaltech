const appointments = [
    { title: "Nombre Cliente", property: "" },
    { title: "Fecha de la cita", property: "startDate" },
    { title: "Estado", property: "status" },
    { title: "Correo Electrónico", property: "email" },
    { title: "Diagnóstico", property: "" },
    { title: "Plan de Trabajo", property: "" },
];

const leads = [
    { title: "Nombre Cliente", property: "name" },
    { title: "Correo Electrónico", property: "email" },
    { title: "Diagnóstico", property: "diagnostic" },
    { title: "Fecha de creación", property: "creationDate" },
];

export const columnsTable = {
    appointments,
    leads,
};
