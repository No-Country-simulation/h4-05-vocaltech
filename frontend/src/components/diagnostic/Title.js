export const Title = ({ step, user }) => {
    const titles = {
        entrepreneur: {
            0: "Sobre tu Emprendimiento",
            1: "Etapa Actual",
            2: "Comunicación y Pitch",
            3: "Producto y Crecimiento",
            4: "Talento y Equipo",
            5: "Graba Tu Pitch en 30 Segundos",
        },
        company: {
            0: "Sobre ti",
            1: "Comunicacón y Liderazgo",
            2: "Gestión y Desarrollo de Talento",
            3: "Graba Tu Pitch en 30 Segundos"
        },
    };

    return (
        titles[user] && titles[user][step] ? (
            <h3 className="text-black fw-semibold fs-3 py-4 mt-3">
                { titles[user][step] }
            </h3>
        ) : null
    );
};
