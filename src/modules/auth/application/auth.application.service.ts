import { Injectable } from '@nestjs/common';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

@Injectable()
export class AuthApplicationService {
  constructor(private readonly migration: UnmigratedFeaturePolicy) {}

  login(): never {
    this.migration.deny('UserLoginController POST /auth/login');
  }

  loginSell(): never {
    this.migration.deny('UserLoginController POST /auth/login-sell');
  }

  validateToken(): never {
    this.migration.deny('UserLoginController GET /auth/validate');
  }

  changePassword(): never {
    this.migration.deny('UserLoginController POST /auth/change-password');
  }

  logout(): void {
    return;
  }
}
