import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code SubscriptionHistoryStatusController}. */
@Controller('subscription-history-status')
export class SubscriptionHistoryStatusPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Post(':sid/liquidate')
  liquidate(): never {
    this.reject(
      'SubscriptionHistoryStatusController POST /subscription-history-status/:sid/liquidate',
    );
  }

  @Put(':sid/paid-anticipated')
  paidAnticipated(): never {
    this.reject(
      'SubscriptionHistoryStatusController PUT /subscription-history-status/:sid/paid-anticipated',
    );
  }

  @Get(':sid/simulate-liquidation')
  simulateLiquidation(): never {
    this.reject(
      'SubscriptionHistoryStatusController GET /subscription-history-status/:sid/simulate-liquidation',
    );
  }

  @Post(':sid/confirm-liquidation')
  confirmLiquidation(): never {
    this.reject(
      'SubscriptionHistoryStatusController POST /subscription-history-status/:sid/confirm-liquidation',
    );
  }

  @Put(':sid/email')
  updateEmail(): never {
    this.reject(
      'SubscriptionHistoryStatusController PUT /subscription-history-status/:sid/email',
    );
  }

  @Put(':sid')
  updateById(): never {
    this.reject(
      'SubscriptionHistoryStatusController PUT /subscription-history-status/:sid',
    );
  }

  @Get()
  list(): never {
    this.reject(
      'SubscriptionHistoryStatusController GET /subscription-history-status',
    );
  }

  @Post()
  create(): never {
    this.reject(
      'SubscriptionHistoryStatusController POST /subscription-history-status',
    );
  }
}
