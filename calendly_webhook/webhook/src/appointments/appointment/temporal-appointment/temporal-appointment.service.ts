import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CalendlyWebhookDto } from '../../dtos/calendly-webhook.dto';

@Injectable()
export class TemporalAppointmentService {
    constructor(private readonly httpService: HttpService) {}
    
    async processCalendlyEvent(payload: CalendlyWebhookDto) {
        const {start_time, location} = payload.payload.event;
        const {invitee} = payload.payload;
        const meetingLink = location.join_url;
        const name = invitee.name;

        const appointmentData = {
            start_time,
            meetingLink,
            name
        }

        return this.createAppointmentInSpring(appointmentData);

        
    }   

    async createAppointmentInSpring (data: any) {
        const springApi = process.env.SPRING_BOOT_API;
        const headers = { 'X-API-Key': process.env.SPRING_BOOT_API_KEY };
        return firstValueFrom(this.httpService.post(`${springApi}/appointments`, data, {headers}));
    }
}
