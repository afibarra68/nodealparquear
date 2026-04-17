import { Controller, Get, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code PosController}. */
@Controller('pos')
export class PosPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('carton-america/orden-llegada')
  cartonAmericaOrdenLlegada(): never {
    this.reject('PosController GET /pos/carton-america/orden-llegada');
  }

  @Put('fecha-ingreso')
  fechaIngreso(): never {
    this.reject('PosController PUT /pos/fecha-ingreso');
  }

  @Put('carton-america/orden-llegada/update')
  cartonAmericaUpdate(): never {
    this.reject('PosController PUT /pos/carton-america/orden-llegada/update');
  }
}
