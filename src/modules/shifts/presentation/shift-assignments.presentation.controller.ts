import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftAssignmentController}. */
@Controller('shift-assignments')
export class ShiftAssignmentsPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post(':id/confirm')
  confirm(): never {
    this.reject(
      'ShiftAssignmentController POST /shift-assignments/:id/confirm',
    );
  }

  @Post(':id/close')
  close(): never {
    this.reject('ShiftAssignmentController POST /shift-assignments/:id/close');
  }

  @Get('by-user/:userId')
  byUser(): never {
    this.reject(
      'ShiftAssignmentController GET /shift-assignments/by-user/:userId',
    );
  }

  @Get('by-company/:companyId')
  byCompany(): never {
    this.reject(
      'ShiftAssignmentController GET /shift-assignments/by-company/:companyId',
    );
  }

  @Get('pageable')
  pageable(): never {
    this.reject('ShiftAssignmentController GET /shift-assignments/pageable');
  }

  @Get(':id')
  getById(): never {
    this.reject('ShiftAssignmentController GET /shift-assignments/:id');
  }

  @Delete(':id')
  remove(): never {
    this.reject('ShiftAssignmentController DELETE /shift-assignments/:id');
  }

  @Post()
  create(): never {
    this.reject('ShiftAssignmentController POST /shift-assignments');
  }

  @Put()
  update(): never {
    this.reject('ShiftAssignmentController PUT /shift-assignments');
  }
}
