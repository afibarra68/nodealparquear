import { Module } from '@nestjs/common';
import { BillingPricesPresentationController } from './presentation/billing-prices.presentation.controller';
import { SubscriptionHistoryStatusPresentationController } from './presentation/subscription-history-status.presentation.controller';

@Module({
  controllers: [BillingPricesPresentationController, SubscriptionHistoryStatusPresentationController],
})
export class BillingModule {}
