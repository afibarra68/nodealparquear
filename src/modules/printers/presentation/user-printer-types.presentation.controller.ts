import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code UserPrinterTypeController}. */
@Controller('user-printer-types')
export class UserPrinterTypesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('UserPrinterTypeController GET /user-printer-types/pageable');
  }

  @Get()
  list(): never {
    this.reject('UserPrinterTypeController GET /user-printer-types');
  }

  @Get(':id')
  getById(): never {
    this.reject('UserPrinterTypeController GET /user-printer-types/:id');
  }

  @Post()
  create(): never {
    this.reject('UserPrinterTypeController POST /user-printer-types');
  }

  @Put()
  update(): never {
    this.reject('UserPrinterTypeController PUT /user-printer-types');
  }

  @Delete(':id')
  remove(): never {
    this.reject('UserPrinterTypeController DELETE /user-printer-types/:id');
  }
}
