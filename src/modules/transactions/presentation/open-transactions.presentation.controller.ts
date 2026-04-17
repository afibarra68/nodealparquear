import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParkingTransactionApplicationService } from '../application/parking-transaction.application.service';

/**
 * Paridad {@code OpenTransactionController}.
 * Toda la lógica de negocio debe vivir en {@link ParkingTransactionApplicationService}.
 */
@Controller('open-transactions')
export class OpenTransactionsPresentationController {
  constructor(
    private readonly parkingTransactions: ParkingTransactionApplicationService,
  ) {}

  @Get('count-by-type')
  countByType(): never {
    return this.parkingTransactions.countOpenByVehicleType();
  }

  @Get('params/:serviceCode')
  params(@Param('serviceCode') serviceCode: string): never {
    return this.parkingTransactions.getOpenSaleParams(serviceCode);
  }

  @Put('plate')
  updatePlate(): never {
    return this.parkingTransactions.updateOpenVehiclePlate();
  }

  @Get('by-plate')
  byPlate(): never {
    return this.parkingTransactions.listOpenByPlate();
  }

  @Get('by-client/:clientId')
  byClient(@Param('clientId') clientId: string): never {
    return this.parkingTransactions.listOpenByClient(clientId);
  }

  @Get(':openTransactionId/reprint-ticket')
  reprintTicket(@Param('openTransactionId') openTransactionId: string): never {
    return this.parkingTransactions.buildOpenReprintTicketData(
      openTransactionId,
    );
  }

  @Delete(':openTransactionId')
  remove(@Param('openTransactionId') openTransactionId: string): never {
    return this.parkingTransactions.removeOpenStay(openTransactionId);
  }

  @Post()
  create(): never {
    return this.parkingTransactions.registerOpenStay();
  }

  @Put()
  update(): never {
    return this.parkingTransactions.updateOpenStay();
  }

  @Get()
  list(): never {
    return this.parkingTransactions.listOpenStays();
  }
}
