import { faMicrophone, faCogs, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

export const features = [
    {
        id: 1,
        img: "/images/diagnostic/feature1.png",
        backgroundColor: "#3F8AED",
        title: "Comunicación y Liderazgo",
        icon: faMicrophone,
        footer: "Potenciar tus habilidades de comunicación",
        items: [
            "Presentar ideas con impacto", "Inspirar a tu equipo y audiencia",
            "Mejorar tu presencia ejecutiva", "Propulsar tu negocio", "Superar el miedo escénico",
            "Fomentar una cultura de colaboración", "Construir confianza en sí mismo"
        ],
    },
    {
        id: 2,
        img: "/images/diagnostic/feature2.png",
        backgroundColor: "#2A897D",
        title: "Soluciones Tecnológicas",
        icon: faLaptopCode,
        footer: "Impulsar tus proyectos tech con soluciones a medida",
        items: [
            "No sé por donde empezar a desarrollar mi producto digital", "No encuentro talento TI validado",
            "Busco optimizar mis procesos con soluciones digitales", "Construir un MVP sólido y escalable",
            "Evaluación de habilidades técnicas en candidatos", "Automatizar tareas repetitivas",
            "Fortalecer la seguridad tecnológica"
        ],
    },
    {
        id: 3,
        img: "/images/diagnostic/feature3.png",
        backgroundColor: "#8326E9",
        title: "Servicios Combinados",
        icon: faCogs,
        footer: "Tu proyecto necesita de ambas soluciones",
        items: [
            "Crear y presentar mi proyecto de forma efectiva", "No estoy seguro cómo comunicar mi MVP a clientes o inversores", 
            "Tengo problemas para escalar mi proyecto", "Fortalecer mi liderazgo para quiar a mi equipo"
        ],
    },
];
