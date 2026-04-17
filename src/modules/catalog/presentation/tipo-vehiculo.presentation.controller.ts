import { Controller, Get } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code TipoVehiculoController} — base {@code /enum} en Java. */
@Controller('enum')
export class TipoVehiculoPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get()
  list(): never {
    this.reject('TipoVehiculoController GET /enum');
  }
}
