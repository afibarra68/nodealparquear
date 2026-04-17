import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code BusinessServiceController}. */
@Controller('business-services')
export class BusinessServicesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('BusinessServiceController GET /business-services/pageable');
  }

  @Get()
  list(): never {
    this.reject('BusinessServiceController GET /business-services');
  }

  @Post()
  create(): never {
    this.reject('BusinessServiceController POST /business-services');
  }

  @Put()
  update(): never {
    this.reject('BusinessServiceController PUT /business-services');
  }
}
