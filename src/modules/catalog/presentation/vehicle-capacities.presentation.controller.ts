import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code VehicleCapacityController}. */
@Controller('vehicle-capacities')
export class VehicleCapacitiesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('VehicleCapacityController GET /vehicle-capacities/pageable');
  }

  @Get('by-company/:companyId/active')
  byCompanyActive(): never {
    this.reject(
      'VehicleCapacityController GET /vehicle-capacities/by-company/:companyId/active',
    );
  }

  @Get()
  list(): never {
    this.reject('VehicleCapacityController GET /vehicle-capacities');
  }

  @Get(':vehicleCapacityId')
  getById(): never {
    this.reject(
      'VehicleCapacityController GET /vehicle-capacities/:vehicleCapacityId',
    );
  }

  @Post()
  create(): never {
    this.reject('VehicleCapacityController POST /vehicle-capacities');
  }

  @Put()
  update(): never {
    this.reject('VehicleCapacityController PUT /vehicle-capacities');
  }

  @Delete(':vehicleCapacityId')
  remove(): never {
    this.reject(
      'VehicleCapacityController DELETE /vehicle-capacities/:vehicleCapacityId',
    );
  }
}
