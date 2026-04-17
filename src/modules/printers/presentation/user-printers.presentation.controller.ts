import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code UserPrinterController}. */
@Controller('user-printers')
export class UserPrintersPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('UserPrinterController GET /user-printers/pageable');
  }

  @Get()
  list(): never {
    this.reject('UserPrinterController GET /user-printers');
  }

  @Get(':id')
  getById(): never {
    this.reject('UserPrinterController GET /user-printers/:id');
  }

  @Post()
  create(): never {
    this.reject('UserPrinterController POST /user-printers');
  }

  @Put()
  update(): never {
    this.reject('UserPrinterController PUT /user-printers');
  }

  @Delete(':id')
  remove(): never {
    this.reject('UserPrinterController DELETE /user-printers/:id');
  }
}
