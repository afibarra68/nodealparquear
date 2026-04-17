import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code UserController} — base {@code /users}. */
@Controller('users')
export class UsersPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post()
  create(): never {
    this.reject('UserController POST /users');
  }

  @Put()
  update(): never {
    this.reject('UserController PUT /users');
  }

  @Post('down_public_user')
  deleteUser(): never {
    this.reject('UserController POST /users/down_public_user');
  }

  @Get('pageable')
  pageable(): never {
    this.reject('UserController GET /users/pageable');
  }

  @Post('reset-password')
  resetPassword(): never {
    this.reject('UserController POST /users/reset-password');
  }

  @Post('toggle-status')
  toggleStatus(): never {
    this.reject('UserController POST /users/toggle-status');
  }

  @Get(':id')
  getById(): never {
    this.reject('UserController GET /users/:id');
  }
}
