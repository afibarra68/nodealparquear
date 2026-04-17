"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogModule = void 0;
const common_1 = require("@nestjs/common");
const countries_presentation_controller_1 = require("./presentation/countries.presentation.controller");
const enums_resource_presentation_controller_1 = require("./presentation/enums-resource.presentation.controller");
const tipo_vehiculo_presentation_controller_1 = require("./presentation/tipo-vehiculo.presentation.controller");
const vehicle_capacities_presentation_controller_1 = require("./presentation/vehicle-capacities.presentation.controller");
let CatalogModule = class CatalogModule {
};
exports.CatalogModule = CatalogModule;
exports.CatalogModule = CatalogModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            countries_presentation_controller_1.CountriesPresentationController,
            enums_resource_presentation_controller_1.EnumsResourcePresentationController,
            tipo_vehiculo_presentation_controller_1.TipoVehiculoPresentationController,
            vehicle_capacities_presentation_controller_1.VehicleCapacitiesPresentationController,
        ],
    })
], CatalogModule);
//# sourceMappingURL=catalog.module.js.map