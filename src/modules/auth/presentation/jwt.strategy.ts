import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import type { JwtValidatedUser } from '../domain/jwt-validated-user';

type JwtPayload = {
  sub: string;
  username: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.getOrThrow<string>('JWT_SECRET'),
    });
  }

  async validate(payload: JwtPayload): Promise<JwtValidatedUser> {
    const userId = Number.parseInt(payload.sub, 10);
    if (Number.isNaN(userId)) {
      throw new UnauthorizedException();
    }
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user || user.username !== payload.username) {
      throw new UnauthorizedException();
    }
    return { userId, username: user.username };
  }
}
