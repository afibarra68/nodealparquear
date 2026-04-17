import { UnmigratedFeaturePolicy } from './unmigrated-feature.policy';
export declare abstract class ParkingParityBaseController {
    protected readonly unmigratedFeaturePolicy: UnmigratedFeaturePolicy;
    protected constructor(unmigratedFeaturePolicy: UnmigratedFeaturePolicy);
    protected reject(operationKey: string): never;
}
