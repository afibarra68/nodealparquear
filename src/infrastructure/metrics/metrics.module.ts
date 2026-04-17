import { Module } from '@nestjs/common';
import { MetricsBootstrap } from './metrics.bootstrap';
import { MetricsController } from './metrics.controller';

@Module({
  controllers: [MetricsController],
  providers: [MetricsBootstrap],
})
export class MetricsModule {}
