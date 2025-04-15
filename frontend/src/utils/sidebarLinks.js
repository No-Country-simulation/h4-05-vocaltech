import { faHome, faFileAlt, faUserPlus, faUsers, faQuestionCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';

export const sidebarLinks = [
    { to: "/admin-dashboard", label: "Inicio", icon: faHome },
    { to: "/admin-dashboard/templates", label: "Plantillas de Mensajes", icon: faFileAlt },
    //{ to: "/admin-dashboard/appointments", label: "Citas", icon: faCalendarAlt },
    { to: "/admin-dashboard/leads", label: "Leads", icon: faUserPlus },
    { to: "/admin-dashboard/subscriptions", label: "Subscriptores", icon: faUsers },
    { to: "/admin-dashboard/queries", label: "Consultas", icon: faQuestionCircle },
    { to: "/admin-dashboard/users", label: "Administradores", icon: faUserShield },
];
