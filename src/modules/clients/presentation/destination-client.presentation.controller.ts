import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code DestinationClientController}. */
@Controller('destination-client')
export class DestinationClientPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post()
  create(): never {
    this.reject('DestinationClientController POST /destination-client');
  }

  @Put()
  update(): never {
    this.reject('DestinationClientController PUT /destination-client');
  }

  @Get()
  pageable(): never {
    this.reject('DestinationClientController GET /destination-client');
  }
}
