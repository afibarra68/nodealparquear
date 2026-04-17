import { Injectable } from '@nestjs/common';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/**
 * Servicio de aplicación **único** para el ciclo de vida de estancias de vehículo
 * (transacciones OPEN y CLOSED). Los controladores `/open-transactions` y
 * `/closed-transactions` delegan aquí para compartir invariantes y evolución
 * incremental (ver `docs/INTEGRACION_MEJORAS_TRANSACCIONES.md`).
 */
@Injectable()
export class ParkingTransactionApplicationService {
  constructor(private readonly migration: UnmigratedFeaturePolicy) {}

  // --- OpenTransactionController (paridad Java) ---

  countOpenByVehicleType(): never {
    this.migration.deny(
      'OpenTransactionController GET /open-transactions/count-by-type',
    );
  }

  getOpenSaleParams(serviceCode: string): never {
    void serviceCode;
    this.migration.deny(
      'OpenTransactionController GET /open-transactions/params/:serviceCode',
    );
  }

  registerOpenStay(): never {
    this.migration.deny('OpenTransactionController POST /open-transactions');
  }

  updateOpenStay(): never {
    this.migration.deny('OpenTransactionController PUT /open-transactions');
  }

  updateOpenVehiclePlate(): never {
    this.migration.deny(
      'OpenTransactionController PUT /open-transactions/plate',
    );
  }

  listOpenStays(): never {
    this.migration.deny('OpenTransactionController GET /open-transactions');
  }

  listOpenByPlate(): never {
    this.migration.deny(
      'OpenTransactionController GET /open-transactions/by-plate',
    );
  }

  listOpenByClient(clientId: string): never {
    void clientId;
    this.migration.deny(
      'OpenTransactionController GET /open-transactions/by-client/:clientId',
    );
  }

  buildOpenReprintTicketData(openTransactionId: string): never {
    void openTransactionId;
    this.migration.deny(
      'OpenTransactionController GET /open-transactions/:openTransactionId/reprint-ticket',
    );
  }

  removeOpenStay(openTransactionId: string): never {
    void openTransactionId;
    this.migration.deny(
      'OpenTransactionController DELETE /open-transactions/:openTransactionId',
    );
  }

  // --- ClosedTransactionController (paridad Java) ---

  getClosedSaleParams(serviceCode: string): never {
    void serviceCode;
    this.migration.deny(
      'ClosedTransactionController GET /closed-transactions/params/:serviceCode',
    );
  }

  closeStay(): never {
    this.migration.deny(
      'ClosedTransactionController POST /closed-transactions/close',
    );
  }

  listClosedStays(): never {
    this.migration.deny('ClosedTransactionController GET /closed-transactions');
  }

  getClosedTodayStats(): never {
    this.migration.deny(
      'ClosedTransactionController GET /closed-transactions/today-stats',
    );
  }

  listClosedToday(): never {
    this.migration.deny(
      'ClosedTransactionController GET /closed-transactions/today',
    );
  }

  buildClosedReprintTicketData(closedTransactionId: string): never {
    void closedTransactionId;
    this.migration.deny(
      'ClosedTransactionController GET /closed-transactions/:closedTransactionId/reprint-ticket',
    );
  }
}
