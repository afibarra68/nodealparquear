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
exports.ShiftConnectionHistoriesPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let ShiftConnectionHistoriesPresentationController = class ShiftConnectionHistoriesPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    shiftHistory() {
        this.reject('ShiftConnectionHistoryController GET /shift-connection-histories/shift-history');
    }
    pageable() {
        this.reject('ShiftConnectionHistoryController GET /shift-connection-histories/pageable');
    }
    adminOpenForUser() {
        this.reject('ShiftConnectionHistoryController POST /shift-connection-histories/admin/open-for-user');
    }
    summary() {
        this.reject('ShiftConnectionHistoryController GET /shift-connection-histories/:shiftHistoryId/summary');
    }
    liquidate() {
        this.reject('ShiftConnectionHistoryController POST /shift-connection-histories/:shiftHistoryId/liquidate');
    }
    create() {
        this.reject('ShiftConnectionHistoryController POST /shift-connection-histories');
    }
};
exports.ShiftConnectionHistoriesPresentationController = ShiftConnectionHistoriesPresentationController;
__decorate([
    (0, common_1.Get)('shift-history'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "shiftHistory", null);
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Post)('admin/open-for-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "adminOpenForUser", null);
__decorate([
    (0, common_1.Get)(':shiftHistoryId/summary'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "summary", null);
__decorate([
    (0, common_1.Post)(':shiftHistoryId/liquidate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "liquidate", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftConnectionHistoriesPresentationController.prototype, "create", null);
exports.ShiftConnectionHistoriesPresentationController = ShiftConnectionHistoriesPresentationController = __decorate([
    (0, common_1.Controller)('shift-connection-histories'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], ShiftConnectionHistoriesPresentationController);
//# sourceMappingURL=shift-connection-histories.presentation.controller.js.map