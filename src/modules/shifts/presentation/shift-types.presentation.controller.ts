import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftTypeController}. */
@Controller('shift-types')
export class ShiftTypesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('by-company')
  byCompany(): never {
    this.reject('ShiftTypeController GET /shift-types/by-company');
  }

  @Get('pageable')
  pageable(): never {
    this.reject('ShiftTypeController GET /shift-types/pageable');
  }

  @Get(':id')
  getById(): never {
    this.reject('ShiftTypeController GET /shift-types/:id');
  }

  @Delete(':id')
  remove(): never {
    this.reject('ShiftTypeController DELETE /shift-types/:id');
  }

  @Post()
  create(): never {
    this.reject('ShiftTypeController POST /shift-types');
  }

  @Put()
  update(): never {
    this.reject('ShiftTypeController PUT /shift-types');
  }
}
