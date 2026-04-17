import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';
import { AuthApplicationService } from '../application/auth.application.service';
import type { JwtValidatedUser } from '../domain/jwt-validated-user';
import { ChangePasswordRequestDto } from './dto/change-password-request.dto';
import { LoginRequestDto } from './dto/login-request.dto';
import { LoginSellRequestDto } from './dto/login-sell-request.dto';

type AuthedRequest = Request & { user: JwtValidatedUser };

@Controller('auth')
export class AuthPresentationController {
  constructor(private readonly authApplication: AuthApplicationService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: LoginRequestDto) {
    return this.authApplication.login({
      username: dto.username,
      password: dto.password,
    });
  }

  @Post('login-sell')
  @HttpCode(HttpStatus.OK)
  loginSell(@Body() dto: LoginSellRequestDto) {
    return this.authApplication.loginSell({
      username: dto.username,
      password: dto.password,
    });
  }

  @Get('validate')
  @UseGuards(AuthGuard('jwt'))
  validateToken(@Req() req: AuthedRequest) {
    return this.authApplication.describeSession(req.user);
  }

  @Post('change-password')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(AuthGuard('jwt'))
  async changePassword(
    @Req() req: AuthedRequest,
    @Body() dto: ChangePasswordRequestDto,
  ): Promise<void> {
    await this.authApplication.changePassword(req.user, {
      oldPassword: dto.oldPassword,
      newPassword: dto.newPassword,
    });
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(): void {
    this.authApplication.logout();
  }
}
