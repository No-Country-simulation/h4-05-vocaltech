const informacionGeneral = [
    { title: 'Leads Totales', quantity: '20' },
    { title: 'Citas Pendientes', quantity: '4' },
    { title: 'Citas en la última semana', quantity: '5' },
    { title: 'Planes de Trabajo enviados', quantity: '15' },
];

const appointments = [
    { name: 'Maria', fecha: '20-02-2025', status: 'pendiente', email: 'maria@prueba.com', diagnostic: true, plan: false },
    { name: 'Gabriela', fecha: '25-02-2025', status: 'completada', email: 'maria@prueba.com', diagnostic: false, plan: true },
    { name: 'Santiago', fecha: '10-02-2025', status: 'cancelada', email: 'maria@prueba.com', diagnostic: false, plan: false },
    { name: 'Martín', fecha: '01-02-2025', status: 'pendiente', email: 'maria@prueba.com', diagnostic: true, plan: false },
    { name: 'Juan', fecha: '05-01-2025', status: 'completada', email: 'maria@prueba.com', diagnostic: true, plan: true },
    { name: 'Hernan', fecha: '10-01-2025', status: 'completada', email: 'maria@prueba.com', diagnostic: false, plan: true },
    { name: 'Carlos', fecha: '22-02-2025', status: 'pendiente', email: 'maria@prueba.com', diagnostic: true, plan: false },
    { name: 'Marina', fecha: '27-02-2025', status: 'pendiente', email: 'maria@prueba.com', diagnostic: false, plan: false },
]

export const prueba = {
    informacionGeneral,
    appointments,
}
