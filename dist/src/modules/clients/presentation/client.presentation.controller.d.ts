import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class ClientPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    renewPeriod(): never;
    transactions(): never;
    create(): never;
    update(): never;
    list(): never;
}
