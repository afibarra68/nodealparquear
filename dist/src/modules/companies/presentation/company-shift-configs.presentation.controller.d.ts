import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class CompanyShiftConfigsPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    pageable(): never;
    byCompany(): never;
    byCode(): never;
    isEnabled(): never;
    create(): never;
    update(): never;
}
