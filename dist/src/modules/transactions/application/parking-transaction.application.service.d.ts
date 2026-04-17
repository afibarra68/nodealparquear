import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class ParkingTransactionApplicationService {
    private readonly migration;
    constructor(migration: UnmigratedFeaturePolicy);
    countOpenByVehicleType(): never;
    getOpenSaleParams(serviceCode: string): never;
    registerOpenStay(): never;
    updateOpenStay(): never;
    updateOpenVehiclePlate(): never;
    listOpenStays(): never;
    listOpenByPlate(): never;
    listOpenByClient(clientId: string): never;
    buildOpenReprintTicketData(openTransactionId: string): never;
    removeOpenStay(openTransactionId: string): never;
    getClosedSaleParams(serviceCode: string): never;
    closeStay(): never;
    listClosedStays(): never;
    getClosedTodayStats(): never;
    listClosedToday(): never;
    buildClosedReprintTicketData(closedTransactionId: string): never;
}
