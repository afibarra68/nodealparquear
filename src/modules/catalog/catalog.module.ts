import { Module } from '@nestjs/common';
import { CountriesPresentationController } from './presentation/countries.presentation.controller';
import { EnumsResourcePresentationController } from './presentation/enums-resource.presentation.controller';
import { TipoVehiculoPresentationController } from './presentation/tipo-vehiculo.presentation.controller';
import { VehicleCapacitiesPresentationController } from './presentation/vehicle-capacities.presentation.controller';

@Module({
  controllers: [CountriesPresentationController, EnumsResourcePresentationController, TipoVehiculoPresentationController, VehicleCapacitiesPresentationController],
})
export class CatalogModule {}
