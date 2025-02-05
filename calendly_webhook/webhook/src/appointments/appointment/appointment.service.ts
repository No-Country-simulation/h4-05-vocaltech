import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CalendlyWebhookDto } from '../dtos/calendly-webhook.dto';

@Injectable()
export class AppointmentService {
    constructor(private readonly httpService: HttpService) {}

    // Crear un appointment y retornar los datos para enviarlos a la función createAppointmentinSpringBoot
    async processCalendlyEvent(payload: CalendlyWebhookDto) {

        const { 
            payload: { 
              event: { start_time, location }, 
              invitee 
            } 
          } = payload;
    const meetingLink = location.join_url;
    const email = invitee.email;
    //const lead = await this.getLeadByEmail(email);

    const appointmentData = {
        startDate: start_time,
        status: 'SCHEDULED',
        meetingLink,
        email
    }

    return this.createAppointmentInSpringBoot(appointmentData);
    }

    /*private async getLeadByEmail(email: string) {
        console.log('SPRING_BOOT_API:', process.env.SPRING_BOOT_API);
        const response = await firstValueFrom(
            this.httpService.post(`${process.env.SPRING_BOOT_API}/api/v1/leads?email=${email}`),
        );
        return response.data[0];
    }
*/
    // Enviar los datos del Appointment a SpringBoot
    private async createAppointmentInSpringBoot(data: any) {
        const response = await firstValueFrom(
            this.httpService.post(`${process.env.SPRING_BOOT_API}/api/v1/appointments`, data),
        );
        return response.data;
    }
    // Mostrar appointments traidos desde base de datos en Spring Boot
    async getAppointments(token?: string) {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await firstValueFrom(
          this.httpService.get(`${process.env.SPRING_BOOT_API}/appointments`, { headers }),
        );
        return response.data;
      }
}
