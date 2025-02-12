
export class CalendlyWebhookDto {
    event: string; 
    payload: {
      event: {
        start_time: string; 
        end_time: string;
        location: {
          join_url: string;
        };
      };
      invitee: {
        email: string;
        name: string;
      };
    };
  }