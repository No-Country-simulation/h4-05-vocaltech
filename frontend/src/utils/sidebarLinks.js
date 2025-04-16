import { faHome, faFileAlt, faUserPlus, faUsers, faQuestionCircle, faUserShield } from '@fortawesome/free-solid-svg-icons';

export const sidebarLinks = [
    { to: "/admin-dashboard", label: "Inicio", icon: faHome },
    { to: "/admin-dashboard/plantillas", label: "Plantillas de Mensajes", icon: faFileAlt },
    //{ to: "/admin-dashboard/citas", label: "Citas", icon: faCalendarAlt },
    { to: "/admin-dashboard/leads", label: "Leads", icon: faUserPlus },
    { to: "/admin-dashboard/subscriptores", label: "Subscriptores", icon: faUsers },
    { to: "/admin-dashboard/consultas", label: "Consultas", icon: faQuestionCircle },
    { to: "/admin-dashboard/usuarios-admin", label: "Administradores", icon: faUserShield },
];
