const diagnostic = {
    entrepreneur: {
        step1: {
            question: "1. ¿En qué etapa se encuentra tu emprendimiento? (*)",
            options: [
                { id: 1, option: "Idea Inicial", question: "q1"},
                { id: 2, option: "Validando Mercado", question: "q1"},
                { id: 3, option: "Generando Ingresos", question: "q1"},
                { id: 4, option: "Buscando Escalabilidad", question: "q1"}
            ]
        },
        step2: [
            {
                question: "1. ¿Crees que las personas te entienden cuando te comunicas? (*)",
                options: [
                    { id: 5, option: "Sí", question: "q2"},
                    { id: 6, option: "Puede mejorar", question: "q2"},
                    { id: 7, option: "Necesito ayuda", question: "q2"},
                ]
            },
            {
                question: "2. ¿Tienes un pitch efectivo que genere interés en segundos? (*)",
                options: [
                    { id: 8, option: "Sí, funciona y da resultados", question: "q3"},
                    { id: 9, option: "Sí, pero podría ser más impactante", question: "q3"},
                    { id: 10, option: "No, y lo necesito para atraer inversores y clientes", question: "q3"},
                ]
            },
            {
                question: "3. ¿Tu voz transmite seguridad y capta la atención del público? (*)",
                options: [
                    { id: 11, option: "Sí, mi voz refuerza mi mensaje", question: "q4"},
                    { id: 12, option: "A veces siento que no impacta lo suficiente", question: "q4"},
                    { id: 13, option: "No, y creo que afecta mi comunicación", question: "q4"},
                ]
            }
        ],
        step3: {
            question: "1. ¿Cuál es tu situación con el desarrollo del producto o MVP? (*)",
            options: [
                { id: 14, option: "Aún no lo hemos desarrollado", question: "q5"},
                { id: 15, option: "Estamos trabajando en un prototipo", question: "q5"},
                { id: 16, option: "Tenemos un MVP en fase de validación", question: "q5"},
                { id: 17, option: "Ya tenemos un producto funcional y queremos mejorarlo", question: "q5"},
            ]
        },
        step4: [
            {
                question: "1. ¿Buscas talento estratégico para crecer? (*)",
                options: [
                    { id: 18, option: "Sí, pero necesitamos mejorar el proceso de selección", question: "q6"},
                    { id: 19, option: "Sí, pero aún no tenemos un plan claro", question: "q6"},
                    { id: 20, option: "No en este momento", question: "q6"},
                ]
            },
            {
                question: "2. ¿Cuál es el mayor desafío de tu equipo? (*)",
                options: [
                    { id: 21, option: "Reclutamiento", question: "q7"},
                    { id: 22, option: "Onboarding", question: "q7"},
                    { id: 23, option: "Contratación", question: "q7"},
                    { id: 24, option: "Retención y rotación", question: "q7"},
                ]
            }
        ]
    },
    company: {
        step1: [
            {
                question: "1. ¿Cómo describirías tu capacidad para influir y liderar a tu equipo? (*)",
                options: [
                    { id: 25, option: "Consigo que me escuchen y actúen con claridad", question: "q1"},
                    { id: 26, option: "A veces siento que mi mensaje no genera el impacto esperado", question: "q1"},
                    { id: 27, option: "Me cuesta que las personas sigan mis ideas", question: "q1"},
                ]
            },
            {
                question: "2. ¿Tu voz transmite autoridad y seguridad al hablar? (*)",
                options: [
                    { id: 28, option: "Sí, me siento seguro/a al expresarme", question: "q2"},
                    { id: 29, option: "A veces dudo si mi voz refuerza mi liderazgo", question: "q2"},
                    { id: 30, option: "No, siento que mi voz no ayuda a mi comunicación", question: "q2"},
                ]
            },
            {
                question: "3. ¿Qué tan cómodo/a te sientes en conversaciones difíciles (negociaciones, feedback, gestión de conflictos)? (*)",
                options: [
                    { id: 31, option: "Manejo bien estas situaciones", question: "q3"},
                    { id: 32, option: "A veces me cuesta encontrar las palabras adecuadas", question: "q3"},
                    { id: 33, option: "Evito este tipo de conversaciones", question: "q3"},
                ]
            },
            {
                question: "4. ¿Te resulta fácil captar la atención y el interés de tu equipo o clientes en reuniones o presentaciones? (*)",
                options: [
                    { id: 34, option: "Sí, logro conectar y transmitir mi mensaje", question: "q4"},
                    { id: 35, option: "A veces siento que no logro impactar lo suficiente", question: "q4"},
                    { id: 36, option: "Me cuesta estructurar y comunicar mis ideas con claridad", question: "q4"},
                ]
            }
        ],
        step2: [
            {
                question: "1. ¿Tienes dificultades en la contratación o retención de talento clave? (*)",
                options: [
                    { id: 37, option: "Sí, encontrar y retener talento es un desafío", question: "q5"},
                    { id: 38, option: "Sí, pero más en términos de integración y cultura", question: "q5"},
                    { id: 39, option: "No, nuestro equipo está consolidado", question: "q5"},
                ]
            },
            {
                question: "2. ¿Qué te gustaría mejorar en tu equipo? (*)",
                options: [
                    { id: 40, option: "Mayor compromiso y alineación con la visión", question: "q6"},
                    { id: 41, option: "Mejor comunicación interna y fluidez en la toma de decisiones", question: "q6"},
                    { id: 42, option: "Más autonomía y liderazgo en los colaboradores", question: "q6"},
                    { id: 43, option: "Otro", question: "q6"},
                ]
            }
        ]
    }
};

export const checklist = {
    diagnostic
};
