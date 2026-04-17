import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftController}. */
@Controller('shifts')
export class ShiftsPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('by-company-date')
  byCompanyDate(): never {
    this.reject('ShiftController GET /shifts/by-company-date');
  }

  @Get('active')
  active(): never {
    this.reject('ShiftController GET /shifts/active');
  }

  @Get('pageable')
  pageable(): never {
    this.reject('ShiftController GET /shifts/pageable');
  }

  @Get(':id')
  getById(): never {
    this.reject('ShiftController GET /shifts/:id');
  }

  @Delete(':id')
  remove(): never {
    this.reject('ShiftController DELETE /shifts/:id');
  }

  @Post()
  create(): never {
    this.reject('ShiftController POST /shifts');
  }

  @Put()
  update(): never {
    this.reject('ShiftController PUT /shifts');
  }
}
