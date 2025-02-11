import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppointmentController } from './appointments/appointment/appointment.controller';
//import { AppointmentService } from './appointments/appointment/appointment.service';
import { AppointmentModule } from './appointments/appointment/appointment.module';
import { HttpClientService } from './common/http-client/http-client.service';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [AppointmentModule, HttpModule, ConfigModule.forRoot()],
  controllers: [AppController, AppointmentController, ],
  providers: [AppService, /*AppointmentService,*/ HttpClientService, ],
})
export class AppModule {}
