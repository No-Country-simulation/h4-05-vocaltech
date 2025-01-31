import { Controller, Post, Body, Headers } from '@nestjs/common';
import { WebhookService } from 'src/service/webhook/webhook.service';


@Controller('webhook')
export class WebhookController {
    constructor(private readonly webhookService: WebhookService) {}

    @Post()
    async handleWebhook(@Body() payload: any, @Headers("user-agent") userAgent: string){
        if(!userAgent.includes('Calendly')){
            return { message: "Invalid webhook source"};
        }
        console.log('Webhook received:', payload);
        await this.webhookService.saveAppoinment(payload);

        return { message: 'Webhook processed successfully' };
    }
}
