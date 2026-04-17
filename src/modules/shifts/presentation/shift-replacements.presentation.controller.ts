import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftReplacementController}. */
@Controller('shift-replacements')
export class ShiftReplacementsPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('ShiftReplacementController GET /shift-replacements/pageable');
  }

  @Get(':id')
  getById(): never {
    this.reject('ShiftReplacementController GET /shift-replacements/:id');
  }

  @Delete(':id')
  remove(): never {
    this.reject('ShiftReplacementController DELETE /shift-replacements/:id');
  }

  @Post()
  create(): never {
    this.reject('ShiftReplacementController POST /shift-replacements');
  }

  @Put()
  update(): never {
    this.reject('ShiftReplacementController PUT /shift-replacements');
  }
}
