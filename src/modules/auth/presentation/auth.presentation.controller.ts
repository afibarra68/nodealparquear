import { Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthApplicationService } from '../application/auth.application.service';

@Controller('auth')
export class AuthPresentationController {
  constructor(private readonly authApplication: AuthApplicationService) {}

  @Post('login')
  login(): never {
    return this.authApplication.login();
  }

  @Post('login-sell')
  loginSell(): never {
    return this.authApplication.loginSell();
  }

  @Get('validate')
  validateToken(): never {
    return this.authApplication.validateToken();
  }

  @Post('change-password')
  changePassword(): never {
    return this.authApplication.changePassword();
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(): void {
    this.authApplication.logout();
  }
}
