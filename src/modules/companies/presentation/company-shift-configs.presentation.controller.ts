import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code CompanyShiftConfigController}. */
@Controller('company-shift-configs')
export class CompanyShiftConfigsPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject(
      'CompanyShiftConfigController GET /company-shift-configs/pageable',
    );
  }

  @Get('by-company/:companyId')
  byCompany(): never {
    this.reject(
      'CompanyShiftConfigController GET /company-shift-configs/by-company/:companyId',
    );
  }

  @Get('by-code/:shiftModuleCode')
  byCode(): never {
    this.reject(
      'CompanyShiftConfigController GET /company-shift-configs/by-code/:shiftModuleCode',
    );
  }

  @Get('is-enabled/:companyId')
  isEnabled(): never {
    this.reject(
      'CompanyShiftConfigController GET /company-shift-configs/is-enabled/:companyId',
    );
  }

  @Post()
  create(): never {
    this.reject('CompanyShiftConfigController POST /company-shift-configs');
  }

  @Put()
  update(): never {
    this.reject('CompanyShiftConfigController PUT /company-shift-configs');
  }
}
