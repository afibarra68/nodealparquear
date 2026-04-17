import {
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import type { AuthUserRecord } from '../domain/auth-user.record';
import type { ChangePasswordCommand } from '../domain/change-password.command';
import type { JwtValidatedUser } from '../domain/jwt-validated-user';
import type { LoginCredentials } from '../domain/login-credentials';
import type { LoginResult } from '../domain/login-result';
import { AuthUserReadPort } from './ports/auth-user-read.port';

@Injectable()
export class AuthApplicationService {
  constructor(
    private readonly users: AuthUserReadPort,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  async login(credentials: LoginCredentials): Promise<LoginResult> {
    return this.issueTokenForCredentials(credentials);
  }

  async loginSell(credentials: LoginCredentials): Promise<LoginResult> {
    return this.issueTokenForCredentials(credentials);
  }

  describeSession(user: JwtValidatedUser): {
    valid: true;
    userId: number;
    username: string;
  } {
    return {
      valid: true,
      userId: user.userId,
      username: user.username,
    };
  }

  async changePassword(
    user: JwtValidatedUser,
    command: ChangePasswordCommand,
  ): Promise<void> {
    const row = await this.users.findById(user.userId);
    if (!row || !(await bcrypt.compare(command.oldPassword, row.passwordHash))) {
      throw new UnauthorizedException('Invalid current password');
    }
    const newHash = await bcrypt.hash(command.newPassword, 10);
    await this.users.updatePasswordHash(user.userId, newHash);
  }

  logout(): void {
    return;
  }

  private async issueTokenForCredentials(
    credentials: LoginCredentials,
  ): Promise<LoginResult> {
    const username = credentials.username.trim();
    const user = await this.users.findByUsername(username);
    if (!user || !(await this.verifyPassword(credentials.password, user))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const expiresInSec = this.config.get<number>('JWT_EXPIRES_SEC', 28800);
    const accessToken = await this.jwt.signAsync(
      { sub: String(user.id), username: user.username },
      { expiresIn: expiresInSec },
    );
    return {
      accessToken,
      tokenType: 'Bearer',
      expiresInSec,
      user: { id: user.id, username: user.username },
    };
  }

  private async verifyPassword(
    plain: string,
    user: AuthUserRecord,
  ): Promise<boolean> {
    return bcrypt.compare(plain, user.passwordHash);
  }
}
