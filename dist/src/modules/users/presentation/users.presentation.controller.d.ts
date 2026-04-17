import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class UsersPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    create(): never;
    update(): never;
    deleteUser(): never;
    pageable(): never;
    resetPassword(): never;
    toggleStatus(): never;
    getById(): never;
}
