import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class UnmigratedFeaturePolicy {
  deny(operationKey: string): never {
    throw new HttpException(
      {
        message: `Migración pendiente (parking-app → node): ${operationKey}`,
        code: 'MIGRATION_PENDING',
        operationKey,
      },
      HttpStatus.NOT_IMPLEMENTED,
    );
  }
}
