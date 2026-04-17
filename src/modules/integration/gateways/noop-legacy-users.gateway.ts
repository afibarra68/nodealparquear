import { Injectable } from '@nestjs/common';
import { LegacyUsersGateway } from './legacy-users.gateway';

@Injectable()
export class NoopLegacyUsersGateway extends LegacyUsersGateway {
  async findLegacyUserById(_id: string): Promise<null> {
    return null;
  }
}
