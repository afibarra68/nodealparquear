import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

export type HealthSnapshot = {
  ok: boolean;
  database: 'up' | 'down';
};

@Injectable()
export class HealthQueryService {
  constructor(private readonly prisma: PrismaService) {}

  async getSnapshot(): Promise<HealthSnapshot> {
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      return { ok: true, database: 'up' };
    } catch {
      return { ok: false, database: 'down' };
    }
  }
}
