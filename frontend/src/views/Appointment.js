import { Appointment as AppointmentCalendar } from "../components/Appointment";

export const Appointment = () => {
    return (
        <div className="container">
            <h1>Agendar cita</h1>
            <AppointmentCalendar />
        </div>
    );
};
