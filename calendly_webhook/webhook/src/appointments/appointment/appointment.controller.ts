import { Body, Controller, Post, Get, UseGuards, Logger, InternalServerErrorException } from '@nestjs/common';
import { CalendlyWebhookDto } from '../dtos/calendly-webhook.dto';
import { AppointmentService } from './appointment.service';
import { AuthToken } from 'src/common/auth-token/auth-token.decorator';
import { AppointmentGuard } from '../guards/appointment/appointment.guard'

@Controller('/api/v1/appointment')
export class AppointmentController {
    private readonly logger = new Logger()
    constructor(private readonly appointmentService: AppointmentService) {}
    


    @Get()
    async getAppointments(@AuthToken() token: string) {
    return this.appointmentService.getAppointments(token);
}
    @UseGuards(AppointmentGuard) 
    @Post('webhook/calendly')
    async handleCalendlyWebhook(@Body() payload: CalendlyWebhookDto) {
        console.log(payload, "Probando")
        try {
            return this.appointmentService.processCalendlyEvent(payload);
        } catch (error) {
            throw new InternalServerErrorException(error, 'Error al recibir el webhook');
        }
    }
}
