import { ParkingTransactionApplicationService } from '../application/parking-transaction.application.service';
export declare class ClosedTransactionsPresentationController {
    private readonly parkingTransactions;
    constructor(parkingTransactions: ParkingTransactionApplicationService);
    todayStats(): never;
    today(): never;
    params(serviceCode: string): never;
    close(): never;
    reprintTicket(closedTransactionId: string): never;
    list(): never;
}
