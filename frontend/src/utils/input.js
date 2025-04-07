const diagnostic = {
    entrepreneur: [
        { 
            id: "fullname", 
            label: "1. Nombre y Apellido", 
            placeholder: "John Doe", 
            type: "text" 
        },
        { 
            id: "projectSector", 
            label: "2. Sector del proyecto", 
            placeholder: "Tecnología", 
            type: "text" 
        },
        { 
            id: "email", 
            label: "3. Correo Electrónico", 
            placeholder: "johndoe@example.com", 
            type: "email" 
        },
        { 
            id: "phone", 
            label: "4. Teléfono", 
            placeholder: "+5491112345678", 
            type: "tel" 
        },
        { 
            id: "socialMedia", 
            label: "5. Web o LinkedIn del proyecto", 
            placeholder: "https://www.linkedin.com/in/jhondoe", 
            type: "url" 
        },
    ],
    company: [
        { 
            id: "fullname", 
            label: "1. Nombre y Apellido", 
            placeholder: "John Doe", 
            type: "text" 
        },
        { 
            id: "occupation", 
            label: "2. Puesto/Cargo", 
            placeholder: "Director de Marketing, Gerente de Ventas...", 
            type: "text" 
        },
        { 
            id: "enterpriseName", 
            label: "3. Nombre de la Empresa", 
            placeholder: "Tech Example", 
            type: "text" 
        },
        { 
            id: "enterpriseEmail", 
            label: "4. Correo Electrónico Corporativo", 
            placeholder: "johndoe@techexample.com", 
            type: "email" 
        },
        { 
            id: "enterpriseSector", 
            label: "5. Sector de la Empresa", 
            placeholder: "Tecnología", 
            type: "text" 
        },
        { 
            id: "socialMedia", 
            label: "6. LinkedIn o Sitio Web (opcional)", 
            placeholder: "https://www.linkedin.com/in/jhondoe", 
            type: "url" 
        },
        { 
            id: "teamQuantity", 
            label: "7. Tamaño del equipo que lideras", 
            placeholder: "0", 
            type: "number" 
        },
    ]
};

const contact = [
    {
        id: "name", 
        label: "Nombre y Apellido / Empresa", 
        placeholder: "Tu nombre / Empresa", 
        type: "text" 
    },
    { 
        id: "email", 
        label: "Correo Electrónico", 
        placeholder: "ejemplo@correo.com", 
        type: "email" 
    },
    { 
        id: "phone", 
        label: "Teléfono", 
        placeholder: "+5491112345678", 
        type: "tel" 
    },
    {
        id: "topic", 
        label: "Asunto", 
        placeholder: "Asunto de la consulta", 
        type: "text" 
    },
];

export const input = {
    diagnostic,
    contact
}
