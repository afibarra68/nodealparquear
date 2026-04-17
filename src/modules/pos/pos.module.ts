import { Module } from '@nestjs/common';
import { PosPresentationController } from './presentation/pos.presentation.controller';
import { CashRegistersPresentationController } from './presentation/cash-registers.presentation.controller';

@Module({
  controllers: [PosPresentationController, CashRegistersPresentationController],
})
export class PosModule {}
