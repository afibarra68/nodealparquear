import { Module } from '@nestjs/common';
import { OpenTransactionsPresentationController } from './presentation/open-transactions.presentation.controller';
import { ClosedTransactionsPresentationController } from './presentation/closed-transactions.presentation.controller';

@Module({
  controllers: [OpenTransactionsPresentationController, ClosedTransactionsPresentationController],
})
export class TransactionsModule {}
