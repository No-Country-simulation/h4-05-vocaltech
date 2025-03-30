import { Test, TestingModule } from '@nestjs/testing';
import { TemporalAppointmentService } from './temporal-appointment.service';

describe('TemporalAppointmentService', () => {
  let service: TemporalAppointmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TemporalAppointmentService],
    }).compile();

    service = module.get<TemporalAppointmentService>(TemporalAppointmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
