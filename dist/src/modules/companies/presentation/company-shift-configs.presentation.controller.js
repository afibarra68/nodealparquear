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
exports.CompanyShiftConfigsPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let CompanyShiftConfigsPresentationController = class CompanyShiftConfigsPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    pageable() {
        this.reject('CompanyShiftConfigController GET /company-shift-configs/pageable');
    }
    byCompany() {
        this.reject('CompanyShiftConfigController GET /company-shift-configs/by-company/:companyId');
    }
    byCode() {
        this.reject('CompanyShiftConfigController GET /company-shift-configs/by-code/:shiftModuleCode');
    }
    isEnabled() {
        this.reject('CompanyShiftConfigController GET /company-shift-configs/is-enabled/:companyId');
    }
    create() {
        this.reject('CompanyShiftConfigController POST /company-shift-configs');
    }
    update() {
        this.reject('CompanyShiftConfigController PUT /company-shift-configs');
    }
};
exports.CompanyShiftConfigsPresentationController = CompanyShiftConfigsPresentationController;
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)('by-company/:companyId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "byCompany", null);
__decorate([
    (0, common_1.Get)('by-code/:shiftModuleCode'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "byCode", null);
__decorate([
    (0, common_1.Get)('is-enabled/:companyId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "isEnabled", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CompanyShiftConfigsPresentationController.prototype, "update", null);
exports.CompanyShiftConfigsPresentationController = CompanyShiftConfigsPresentationController = __decorate([
    (0, common_1.Controller)('company-shift-configs'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], CompanyShiftConfigsPresentationController);
//# sourceMappingURL=company-shift-configs.presentation.controller.js.map