import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class BillingPricesPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    pageable(): never;
    list(): never;
    getById(): never;
    create(): never;
    update(): never;
    remove(): never;
}
