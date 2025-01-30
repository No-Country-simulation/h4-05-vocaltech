import { Appointment as AppointmentCalendar } from "../components/Appointment";

export const Appointment = () => {
    return (
        <div className="container py-5">
            <div className="text-center">
                <h1 className="display-5 fw-bolder" 
                    style={{background: "linear-gradient(135deg, #938ff4, #535a7c)", 
                    WebkitBackgroundClip: "text",  
                    WebkitTextFillColor: "transparent"}}>¡Agenda tu cita!
                </h1>
                <p className="lead pt-2">Elige una fecha y hora para agendar una sesión personalizada 
                    con nuestro equipo y recibir el asesoramiento que necesitas para dar el siguiente paso.
                </p>
            </div>
            <AppointmentCalendar />
        </div>
    );
};
