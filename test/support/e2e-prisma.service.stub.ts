import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../src/infrastructure/prisma/prisma.service';

@Injectable()
export class E2ePrismaServiceStub extends PrismaService {
  override async onModuleInit(): Promise<void> {
    return;
  }

  override async onModuleDestroy(): Promise<void> {
    return;
  }

  /** Acepta la firma de plantilla de Prisma (`$queryRaw\`...\``) en tests. */
  override $queryRaw(
    _strings: TemplateStringsArray,
    ..._values: unknown[]
  ): Promise<unknown> {
    return Promise.resolve(1);
  }
}
