import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { appointmentService } from '../services/appointment';

export const Appointment = () => {

    useCalendlyEventListener({
        onEventScheduled: async (e) => {
            try {
                const event = await appointmentService.eventDetails(e.data.payload.event.uri);
                const invitee = await appointmentService.inviteeDetails(e.data.payload.invitee.uri);
                
                const utcDate = event.resource.start_time;
                const localDate = new Date(utcDate);
                const day = String(localDate.getDate()).padStart(2, '0');
                const month = String(localDate.getMonth() + 1).padStart(2, '0'); 
                const year = localDate.getFullYear();

                const formattedDate = `${day}-${month}-${year}`;

                const data = {
                    startDate: formattedDate,
                    status: invitee.resource.status,
                    meetingLink: event.resource.location.join_url,
                    email: invitee.resource.email
                }

                console.log(data)

                const res = await appointmentService.create(data);
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },
      });

    return (
        <div className="container pt-5 pt-md-0">
            <InlineWidget url="https://calendly.com/mariagaa993/30min?background_color=F0F0F0&text_color=333333&primary_color=FF5733" /> 
        </div>
    );
};
