import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthApplicationService } from './application/auth.application.service';
import { AuthUserReadPort } from './application/ports/auth-user-read.port';
import { PrismaAuthUserRepository } from './infrastructure/prisma-auth-user.repository';
import { AuthPresentationController } from './presentation/auth.presentation.controller';
import { JwtStrategy } from './presentation/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: config.get<number>('JWT_EXPIRES_SEC', 28800),
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AuthPresentationController],
  providers: [
    PrismaAuthUserRepository,
    { provide: AuthUserReadPort, useExisting: PrismaAuthUserRepository },
    AuthApplicationService,
    JwtStrategy,
  ],
})
export class AuthModule {}
