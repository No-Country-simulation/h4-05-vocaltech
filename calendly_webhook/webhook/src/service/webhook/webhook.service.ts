import { Injectable, HttpServer } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class WebhookService {
    private sprinBootApi = 'https://vocaltechapp-latest.onrender.com/';

    async saveAppoinment(data: any) {
        try {
            const response = await axios.post(this.sprinBootApi, {
                start_date: data.event.start_time,
                status: 'scheduled',
                id_lead: data.payload?.invitee?.email
            });
            return response.data
        }
        catch(error) {
            console.error("Error saving Appointment", error)
            throw error;
        }
    }
}
