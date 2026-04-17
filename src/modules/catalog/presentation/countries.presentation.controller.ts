import { All, Controller, Req } from '@nestjs/common';
import { Request } from 'express';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

@Controller('countries')
export class CountriesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @All('*path')
  handle(@Req() req: Request): never {
    return this.reject(`CountriesPresentationController ${req.method} ${req.originalUrl}`);
  }
}
