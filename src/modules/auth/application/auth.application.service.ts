import { Injectable } from '@nestjs/common';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/**
 * Casos de uso de autenticación (paridad {@code UserLoginController} en parking-app).
 */
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

  /**
   * El Java permite siempre logout; el cliente invalida el token localmente.
   */
  logout(): void {
    return;
  }
}
