import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { HealthQueryService } from './health-query.service';

@Module({
  controllers: [HealthController],
  providers: [HealthQueryService],
})
export class HealthModule {}
