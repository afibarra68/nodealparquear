import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class UserRolesPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    create(): never;
    update(): never;
    delete(): never;
    pageable(): never;
    roles(): never;
}
