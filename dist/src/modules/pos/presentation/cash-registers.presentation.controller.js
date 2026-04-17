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
exports.CashRegistersPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let CashRegistersPresentationController = class CashRegistersPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    totalByConcept() {
        this.reject('CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId/concept/:concept/total');
    }
    totalByConnection() {
        this.reject('CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId/total');
    }
    byConnection() {
        this.reject('CashRegisterController GET /cash-registers/by-connection/:shiftConnectionHistoryId');
    }
    pageable() {
        this.reject('CashRegisterController GET /cash-registers/pageable');
    }
    setInitialCash() {
        this.reject('CashRegisterController POST /cash-registers/set-initial-cash');
    }
    registerOtherIncome() {
        this.reject('CashRegisterController POST /cash-registers/register-other-income');
    }
    registerMensualidad() {
        this.reject('CashRegisterController POST /cash-registers/register-mensualidad');
    }
    getById() {
        this.reject('CashRegisterController GET /cash-registers/:cashRegisterId');
    }
    remove() {
        this.reject('CashRegisterController DELETE /cash-registers/:cashRegisterId');
    }
    create() {
        this.reject('CashRegisterController POST /cash-registers');
    }
    update() {
        this.reject('CashRegisterController PUT /cash-registers');
    }
    list() {
        this.reject('CashRegisterController GET /cash-registers');
    }
};
exports.CashRegistersPresentationController = CashRegistersPresentationController;
__decorate([
    (0, common_1.Get)('by-connection/:shiftConnectionHistoryId/concept/:concept/total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "totalByConcept", null);
__decorate([
    (0, common_1.Get)('by-connection/:shiftConnectionHistoryId/total'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "totalByConnection", null);
__decorate([
    (0, common_1.Get)('by-connection/:shiftConnectionHistoryId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "byConnection", null);
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Post)('set-initial-cash'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "setInitialCash", null);
__decorate([
    (0, common_1.Post)('register-other-income'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "registerOtherIncome", null);
__decorate([
    (0, common_1.Post)('register-mensualidad'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "registerMensualidad", null);
__decorate([
    (0, common_1.Get)(':cashRegisterId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(':cashRegisterId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CashRegistersPresentationController.prototype, "list", null);
exports.CashRegistersPresentationController = CashRegistersPresentationController = __decorate([
    (0, common_1.Controller)('cash-registers'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], CashRegistersPresentationController);
//# sourceMappingURL=cash-registers.presentation.controller.js.map