import { Controller, Get } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code EnumResourceController} — base {@code /enums}. */
@Controller('enums')
export class EnumsResourcePresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get(':enumName')
  byName(): never {
    this.reject('EnumResourceController GET /enums/:enumName');
  }

  @Get()
  list(): never {
    this.reject('EnumResourceController GET /enums');
  }
}
