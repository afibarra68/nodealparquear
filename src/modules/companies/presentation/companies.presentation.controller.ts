import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code CompanyController}. */
@Controller('companies')
export class CompaniesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('CompanyController GET /companies/pageable');
  }

  @Get('current')
  current(): never {
    this.reject('CompanyController GET /companies/current');
  }

  @Get('current-time')
  currentTime(): never {
    this.reject('CompanyController GET /companies/current-time');
  }

  @Get()
  list(): never {
    this.reject('CompanyController GET /companies');
  }

  @Post()
  create(): never {
    this.reject('CompanyController POST /companies');
  }

  @Put()
  update(): never {
    this.reject('CompanyController PUT /companies');
  }
}
