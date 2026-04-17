"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PosPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let PosPresentationController = class PosPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    cartonAmericaOrdenLlegada() {
        this.reject('PosController GET /pos/carton-america/orden-llegada');
    }
    fechaIngreso() {
        this.reject('PosController PUT /pos/fecha-ingreso');
    }
    cartonAmericaUpdate() {
        this.reject('PosController PUT /pos/carton-america/orden-llegada/update');
    }
};
exports.PosPresentationController = PosPresentationController;
__decorate([
    (0, common_1.Get)('carton-america/orden-llegada'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PosPresentationController.prototype, "cartonAmericaOrdenLlegada", null);
__decorate([
    (0, common_1.Put)('fecha-ingreso'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PosPresentationController.prototype, "fechaIngreso", null);
__decorate([
    (0, common_1.Put)('carton-america/orden-llegada/update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PosPresentationController.prototype, "cartonAmericaUpdate", null);
exports.PosPresentationController = PosPresentationController = __decorate([
    (0, common_1.Controller)('pos'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], PosPresentationController);
//# sourceMappingURL=pos.presentation.controller.js.map