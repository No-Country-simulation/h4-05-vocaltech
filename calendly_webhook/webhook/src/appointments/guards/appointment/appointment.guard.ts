import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { createHmac } from 'crypto';


@Injectable()
export class AppointmentGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const signature = request.headers['calendly-webhook-signature'];
    const payload = JSON.stringify(request.body);
    const secret = process.env.REACT_APP_CALENDLY_API_TOKEN;

    if(!secret) {
      throw new Error('REACT_APP_CALENDLY_API_TOKEN no está definida en las variables de entorno')
    }
    
    const expectedSignature = createHmac('sha256', secret).update(payload).digest('base64');
    return signature == expectedSignature;
  }
}
