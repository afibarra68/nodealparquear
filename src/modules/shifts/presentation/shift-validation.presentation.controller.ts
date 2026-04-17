import { Controller, Post } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code ShiftValidationController}. */
@Controller('shift-validation')
export class ShiftValidationPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post('close/:shiftHistoryId')
  close(): never {
    this.reject(
      'ShiftValidationController POST /shift-validation/close/:shiftHistoryId',
    );
  }
}
