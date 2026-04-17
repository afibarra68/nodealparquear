import { Injectable } from '@nestjs/common';
import { LegacyUsersGateway } from './legacy-users.gateway';

@Injectable()
export class NoopLegacyUsersGateway extends LegacyUsersGateway {
  resolveLoginIdentity(): Promise<{ externalUserId: string } | null> {
    return Promise.resolve(null);
  }
}
