import { ParkingTransactionApplicationService } from '../application/parking-transaction.application.service';
export declare class OpenTransactionsPresentationController {
    private readonly parkingTransactions;
    constructor(parkingTransactions: ParkingTransactionApplicationService);
    countByType(): never;
    params(serviceCode: string): never;
    updatePlate(): never;
    byPlate(): never;
    byClient(clientId: string): never;
    reprintTicket(openTransactionId: string): never;
    remove(openTransactionId: string): never;
    create(): never;
    update(): never;
    list(): never;
}
