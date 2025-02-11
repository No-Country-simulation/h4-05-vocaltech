import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
//import { CalendlyWebhookDto } from '../dtos/calendly-webhook.dto';
import { log } from 'console';

/*@Injectable()
export class AppointmentService {
    constructor(private readonly httpService: HttpService) {}
    //private readonly logger = new Logger()

    // Crear un appointment y retornar los datos para enviarlos a la función createAppointmentinSpringBoot
    async processCalendlyEvent(payload: CalendlyWebhookDto) {
      log("Hola");
      console.log(payload.payload.event);
      const {start_time, location} = payload.payload.event;
      const {invitee} = payload.payload;
      const meetingLink = location.join_url;
      const email = invitee.email;

      const appointmentData = {
        startDate: start_time,
        status: 'SCHEDULED',
        meetingLink,
        email
      }

      console.log(appointmentData)

      return this.sendAppointment(appointmentData);
    }  

    // Enviar webhook a la Api en Spring
    private async sendAppointment(data: any) {
      const apiLink = process.env.SPRING_BOOT_API;
      const url = `${apiLink}/appointments`;
      const headers = { 'X-API-Key': process.env.SPRING_BOOT_API_KEY };
      return firstValueFrom(this.httpService.post(url, data, {headers}));
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
      */
