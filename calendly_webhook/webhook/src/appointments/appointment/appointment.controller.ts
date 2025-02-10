import { Body, Controller, Post, Get, UseGuards, Logger } from '@nestjs/common';
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
        this.logger.log("Hola");
        return this.appointmentService.processCalendlyEvent(payload);
        
    }
}
