import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL_OPENAI;
const TOKEN = process.env.REACT_APP_OPENAI_TOKEN;

const openai = async (newMessages) => {
    try {
        const response = await axios.post(BASE_URL, {
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: `Sé amable, claro y responde de manera corta y concisa. 
                    Solo responde preguntas relacionadas a nuestros servicios. Si te preguntan sobre 
                    coaching de comunicación, liderazgo, desarrollo de MVPs, búsqueda de talento o 
                    comportamiento en el trabajo, da una respuesta corta, directa y concisa. 
                    Para más información, indica al usuario que puede completar el formulario de 
                    diagnóstico o agendar una cita para un asesoramiento personalizado`},
                    ...newMessages
                ],   
            },
            {
                headers: { Authorization: `Bearer ${TOKEN}` }
            }
        );

        return response.data;
        
    } catch {
        throw new Error("Error al comunicarse con Voltebot. Intenté nuevamente!");
    }
};

export const chatbotService = {
    openai,
}
