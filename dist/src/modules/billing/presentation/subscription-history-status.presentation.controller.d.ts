import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class SubscriptionHistoryStatusPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    liquidate(): never;
    paidAnticipated(): never;
    simulateLiquidation(): never;
    confirmLiquidation(): never;
    updateEmail(): never;
    updateById(): never;
    list(): never;
    create(): never;
}
