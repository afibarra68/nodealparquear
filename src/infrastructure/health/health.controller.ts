import { Controller, Get } from '@nestjs/common';
import { HealthQueryService, HealthSnapshot } from './health-query.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthQuery: HealthQueryService) {}

  @Get()
  async getHealth(): Promise<{
    status: string;
    database: HealthSnapshot['database'];
  }> {
    const snapshot = await this.healthQuery.getSnapshot();
    return {
      status: snapshot.ok ? 'ok' : 'degraded',
      database: snapshot.database,
    };
  }
}
