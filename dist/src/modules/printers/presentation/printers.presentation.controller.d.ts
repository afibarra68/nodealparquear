import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';
export declare class PrintersPresentationController extends ParkingParityBaseController {
    constructor(migration: UnmigratedFeaturePolicy);
    pageable(): never;
    list(): never;
    create(): never;
    update(): never;
}
