import { Controller, Get, Post } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftConnectionHistoryController}. */
@Controller('shift-connection-histories')
export class ShiftConnectionHistoriesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('shift-history')
  shiftHistory(): never {
    this.reject(
      'ShiftConnectionHistoryController GET /shift-connection-histories/shift-history',
    );
  }

  @Get('pageable')
  pageable(): never {
    this.reject(
      'ShiftConnectionHistoryController GET /shift-connection-histories/pageable',
    );
  }

  @Post('admin/open-for-user')
  adminOpenForUser(): never {
    this.reject(
      'ShiftConnectionHistoryController POST /shift-connection-histories/admin/open-for-user',
    );
  }

  @Get(':shiftHistoryId/summary')
  summary(): never {
    this.reject(
      'ShiftConnectionHistoryController GET /shift-connection-histories/:shiftHistoryId/summary',
    );
  }

  @Post(':shiftHistoryId/liquidate')
  liquidate(): never {
    this.reject(
      'ShiftConnectionHistoryController POST /shift-connection-histories/:shiftHistoryId/liquidate',
    );
  }

  @Post()
  create(): never {
    this.reject(
      'ShiftConnectionHistoryController POST /shift-connection-histories',
    );
  }
}
