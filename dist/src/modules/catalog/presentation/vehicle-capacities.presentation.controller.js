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
exports.VehicleCapacitiesPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let VehicleCapacitiesPresentationController = class VehicleCapacitiesPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    pageable() {
        this.reject('VehicleCapacityController GET /vehicle-capacities/pageable');
    }
    byCompanyActive() {
        this.reject('VehicleCapacityController GET /vehicle-capacities/by-company/:companyId/active');
    }
    list() {
        this.reject('VehicleCapacityController GET /vehicle-capacities');
    }
    getById() {
        this.reject('VehicleCapacityController GET /vehicle-capacities/:vehicleCapacityId');
    }
    create() {
        this.reject('VehicleCapacityController POST /vehicle-capacities');
    }
    update() {
        this.reject('VehicleCapacityController PUT /vehicle-capacities');
    }
    remove() {
        this.reject('VehicleCapacityController DELETE /vehicle-capacities/:vehicleCapacityId');
    }
};
exports.VehicleCapacitiesPresentationController = VehicleCapacitiesPresentationController;
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)('by-company/:companyId/active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "byCompanyActive", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':vehicleCapacityId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':vehicleCapacityId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VehicleCapacitiesPresentationController.prototype, "remove", null);
exports.VehicleCapacitiesPresentationController = VehicleCapacitiesPresentationController = __decorate([
    (0, common_1.Controller)('vehicle-capacities'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], VehicleCapacitiesPresentationController);
//# sourceMappingURL=vehicle-capacities.presentation.controller.js.map