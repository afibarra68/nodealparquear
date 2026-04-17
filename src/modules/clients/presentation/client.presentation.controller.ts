import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ClientController}. */
@Controller('client')
export class ClientPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post(':clientId/renew-period')
  renewPeriod(): never {
    this.reject('ClientController POST /client/:clientId/renew-period');
  }

  @Get(':clientId/transactions')
  transactions(): never {
    this.reject('ClientController GET /client/:clientId/transactions');
  }

  @Post()
  create(): never {
    this.reject('ClientController POST /client');
  }

  @Put()
  update(): never {
    this.reject('ClientController PUT /client');
  }

  @Get()
  list(): never {
    this.reject('ClientController GET /client');
  }
}
