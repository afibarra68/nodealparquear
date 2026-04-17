import { UnmigratedFeaturePolicy } from './unmigrated-feature.policy';

/**
 * Base para controladores que reflejan rutas del monolito Java hasta
 * sustituir por casos de uso reales.
 */
export abstract class ParkingParityBaseController {
  protected constructor(
    protected readonly unmigratedFeaturePolicy: UnmigratedFeaturePolicy,
  ) {}

  protected reject(operationKey: string): never {
    return this.unmigratedFeaturePolicy.deny(operationKey);
  }
}
