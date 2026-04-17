import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class VehicleCapacitiesPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    pageable(): never;
    byCompanyActive(): never;
    list(): never;
    getById(): never;
    create(): never;
    update(): never;
    remove(): never;
}
