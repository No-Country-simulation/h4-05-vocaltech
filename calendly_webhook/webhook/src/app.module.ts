import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookController } from './controller/webhook/webhook.controller';
import { WebhookService } from './service/webhook/webhook.service';

@Module({
  imports: [],
  controllers: [AppController, WebhookController],
  providers: [AppService, WebhookService],
})
export class AppModule {}
