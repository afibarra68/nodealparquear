import { Controller, Get, Param, Post } from '@nestjs/common';
import { ParkingTransactionApplicationService } from '../application/parking-transaction.application.service';

/**
 * Paridad {@code ClosedTransactionController}.
 * Toda la lógica de negocio debe vivir en {@link ParkingTransactionApplicationService}.
 */
@Controller('closed-transactions')
export class ClosedTransactionsPresentationController {
  constructor(
    private readonly parkingTransactions: ParkingTransactionApplicationService,
  ) {}

  @Get('today-stats')
  todayStats(): never {
    return this.parkingTransactions.getClosedTodayStats();
  }

  @Get('today')
  today(): never {
    return this.parkingTransactions.listClosedToday();
  }

  @Get('params/:serviceCode')
  params(@Param('serviceCode') serviceCode: string): never {
    return this.parkingTransactions.getClosedSaleParams(serviceCode);
  }

  @Post('close')
  close(): never {
    return this.parkingTransactions.closeStay();
  }

  @Get(':closedTransactionId/reprint-ticket')
  reprintTicket(
    @Param('closedTransactionId') closedTransactionId: string,
  ): never {
    return this.parkingTransactions.buildClosedReprintTicketData(
      closedTransactionId,
    );
  }

  @Get()
  list(): never {
    return this.parkingTransactions.listClosedStays();
  }
}
