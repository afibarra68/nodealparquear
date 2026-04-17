import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code CountryController}. */
@Controller('countries')
export class CountriesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('CountryController GET /countries/pageable');
  }

  @Get('queryable')
  queryable(): never {
    this.reject('CountryController GET /countries/queryable');
  }

  @Get()
  list(): never {
    this.reject('CountryController GET /countries');
  }

  @Post()
  create(): never {
    this.reject('CountryController POST /countries');
  }

  @Put()
  update(): never {
    this.reject('CountryController PUT /countries');
  }

  @Delete(':id')
  remove(): never {
    this.reject('CountryController DELETE /countries/:id');
  }
}
