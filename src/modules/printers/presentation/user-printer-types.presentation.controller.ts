import { All, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

@Controller('user-printer-types')
export class UserPrinterTypesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @All('*path')
  handle(@Req() req: Request): never {
    return this.reject(`UserPrinterTypesPresentationController ${req.method} ${req.originalUrl}`);
  }
}
