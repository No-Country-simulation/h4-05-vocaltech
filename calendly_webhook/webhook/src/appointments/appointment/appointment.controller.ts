import { Body, Controller, Post, Get } from '@nestjs/common';
import { CalendlyWebhookDto } from '../dtos/calendly-webhook.dto';
import { AppointmentService } from './appointment.service';
import { AuthToken } from 'src/common/auth-token/auth-token.decorator';

@Controller('/api/v1/appointment')
export class AppointmentController {
    constructor(private readonly appointmentService: AppointmentService) {}


    @Get()
    async getAppointments(@AuthToken() token: string) {
    return this.appointmentService.getAppointments(token);
}
    @Post('webhook/calendly')
    async handleCalendlyWebhook(@Body() payload: CalendlyWebhookDto) {
        return this.appointmentService.processCalendlyEvent(payload);
    }
}
