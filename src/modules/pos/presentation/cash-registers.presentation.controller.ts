import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code CashRegisterController}. */
@Controller('cash-registers')
export class CashRegistersPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('by-connection/:shiftConnectionHistoryId/concept/:concept/total')
  totalByConcept(): never {
    this.reject(
      'CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId/concept/:concept/total',
    );
  }

  @Get('by-connection/:shiftConnectionHistoryId/total')
  totalByConnection(): never {
    this.reject(
      'CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId/total',
    );
  }

  @Get('by-connection/:shiftConnectionHistoryId')
  byConnection(): never {
    this.reject(
      'CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId',
    );
  }

  @Get('pageable')
  pageable(): never {
    this.reject('CashRegisterController GET /cash-registers/pageable');
  }

  @Post('set-initial-cash')
  setInitialCash(): never {
    this.reject('CashRegisterController POST /cash-registers/set-initial-cash');
  }

  @Post('register-other-income')
  registerOtherIncome(): never {
    this.reject(
      'CashRegisterController POST /cash-registers/register-other-income',
    );
  }

  @Post('register-mensualidad')
  registerMensualidad(): never {
    this.reject(
      'CashRegisterController POST /cash-registers/register-mensualidad',
    );
  }

  @Get(':cashRegisterId')
  getById(): never {
    this.reject('CashRegisterController GET /cash-registers/:cashRegisterId');
  }

  @Delete(':cashRegisterId')
  remove(): never {
    this.reject(
      'CashRegisterController DELETE /cash-registers/:cashRegisterId',
    );
  }

  @Post()
  create(): never {
    this.reject('CashRegisterController POST /cash-registers');
  }

  @Put()
  update(): never {
    this.reject('CashRegisterController PUT /cash-registers');
  }

  @Get()
  list(): never {
    this.reject('CashRegisterController GET /cash-registers');
  }
}
