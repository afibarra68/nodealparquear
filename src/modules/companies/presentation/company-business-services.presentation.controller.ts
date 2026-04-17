import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code CompanyBusinessServiceController}. */
@Controller('company-business-services')
export class CompanyBusinessServicesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject(
      'CompanyBusinessServiceController GET /company-business-services/pageable',
    );
  }

  @Get('by-company/:companyId')
  byCompany(): never {
    this.reject(
      'CompanyBusinessServiceController GET /company-business-services/by-company/:companyId',
    );
  }

  @Get()
  list(): never {
    this.reject(
      'CompanyBusinessServiceController GET /company-business-services',
    );
  }

  @Post()
  create(): never {
    this.reject(
      'CompanyBusinessServiceController POST /company-business-services',
    );
  }

  @Put()
  update(): never {
    this.reject(
      'CompanyBusinessServiceController PUT /company-business-services',
    );
  }

  @Delete(':companyBusinessServiceId')
  remove(): never {
    this.reject(
      'CompanyBusinessServiceController DELETE /company-business-services/:companyBusinessServiceId',
    );
  }
}
