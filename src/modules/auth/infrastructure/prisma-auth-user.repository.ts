import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infrastructure/prisma/prisma.service';
import { AuthUserReadPort } from '../application/ports/auth-user-read.port';
import type { AuthUserRecord } from '../domain/auth-user.record';

@Injectable()
export class PrismaAuthUserRepository extends AuthUserReadPort {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async findByUsername(username: string): Promise<AuthUserRecord | null> {
    const row = await this.prisma.user.findUnique({ where: { username } });
    return row
      ? {
          id: row.id,
          username: row.username,
          passwordHash: row.passwordHash,
        }
      : null;
  }

  async findById(id: number): Promise<AuthUserRecord | null> {
    const row = await this.prisma.user.findUnique({ where: { id } });
    return row
      ? {
          id: row.id,
          username: row.username,
          passwordHash: row.passwordHash,
        }
      : null;
  }

  async updatePasswordHash(userId: number, newHash: string): Promise<void> {
    await this.prisma.user.update({
      where: { id: userId },
      data: { passwordHash: newHash },
    });
  }
}
