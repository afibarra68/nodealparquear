import { Injectable, OnModuleInit } from '@nestjs/common';
import { collectDefaultMetrics } from 'prom-client';

let defaultMetricsRegistered = false;

@Injectable()
export class MetricsBootstrap implements OnModuleInit {
  onModuleInit(): void {
    if (defaultMetricsRegistered) {
      return;
    }
    collectDefaultMetrics();
    defaultMetricsRegistered = true;
  }
}
