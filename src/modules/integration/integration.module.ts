import { Module } from '@nestjs/common';
import { LegacyUsersGateway } from './gateways/legacy-users.gateway';
import { NoopLegacyUsersGateway } from './gateways/noop-legacy-users.gateway';

@Module({
  providers: [
    { provide: LegacyUsersGateway, useClass: NoopLegacyUsersGateway },
  ],
  exports: [LegacyUsersGateway],
})
export class IntegrationModule {}
