import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class HttpClientService {
    constructor(private readonly httpService: HttpService) {}

    async get(url: string) {
        const response = await firstValueFrom(this.httpService.get(url));
        return response.data;
    }

    async post(url: string, data: any) {
        const response = await firstValueFrom(this.httpService.post(url, data));
        return response.data;
    }
}
