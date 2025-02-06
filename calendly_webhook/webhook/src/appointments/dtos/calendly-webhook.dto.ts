

export class CalendlyWebhookDto {
    event: string; // Tipo de evento (ej: "invitee.created")
    payload: {
      event: {
        start_time: string; // Campo en snake_case
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