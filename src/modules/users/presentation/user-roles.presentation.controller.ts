import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code UserRoleController} — base {@code /user_role}. */
@Controller('user_role')
export class UserRolesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post()
  create(): never {
    this.reject('UserRoleController POST /user_role');
  }

  @Put()
  update(): never {
    this.reject('UserRoleController PUT /user_role');
  }

  @Delete(':userRoleId')
  delete(): never {
    this.reject('UserRoleController DELETE /user_role/:userRoleId');
  }

  @Get('pageable')
  pageable(): never {
    this.reject('UserRoleController GET /user_role/pageable');
  }

  @Get('roles')
  roles(): never {
    this.reject('UserRoleController GET /user_role/roles');
  }
}
