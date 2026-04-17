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
exports.SubscriptionHistoryStatusPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let SubscriptionHistoryStatusPresentationController = class SubscriptionHistoryStatusPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    liquidate() {
        this.reject('SubscriptionHistoryStatusController POST /subscription-history-status/:sid/liquidate');
    }
    paidAnticipated() {
        this.reject('SubscriptionHistoryStatusController PUT /subscription-history-status/:sid/paid-anticipated');
    }
    simulateLiquidation() {
        this.reject('SubscriptionHistoryStatusController GET /subscription-history-status/:sid/simulate-liquidation');
    }
    confirmLiquidation() {
        this.reject('SubscriptionHistoryStatusController POST /subscription-history-status/:sid/confirm-liquidation');
    }
    updateEmail() {
        this.reject('SubscriptionHistoryStatusController PUT /subscription-history-status/:sid/email');
    }
    updateById() {
        this.reject('SubscriptionHistoryStatusController PUT /subscription-history-status/:sid');
    }
    list() {
        this.reject('SubscriptionHistoryStatusController GET /subscription-history-status');
    }
    create() {
        this.reject('SubscriptionHistoryStatusController POST /subscription-history-status');
    }
};
exports.SubscriptionHistoryStatusPresentationController = SubscriptionHistoryStatusPresentationController;
__decorate([
    (0, common_1.Post)(':sid/liquidate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "liquidate", null);
__decorate([
    (0, common_1.Put)(':sid/paid-anticipated'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "paidAnticipated", null);
__decorate([
    (0, common_1.Get)(':sid/simulate-liquidation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "simulateLiquidation", null);
__decorate([
    (0, common_1.Post)(':sid/confirm-liquidation'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "confirmLiquidation", null);
__decorate([
    (0, common_1.Put)(':sid/email'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "updateEmail", null);
__decorate([
    (0, common_1.Put)(':sid'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "updateById", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SubscriptionHistoryStatusPresentationController.prototype, "create", null);
exports.SubscriptionHistoryStatusPresentationController = SubscriptionHistoryStatusPresentationController = __decorate([
    (0, common_1.Controller)('subscription-history-status'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], SubscriptionHistoryStatusPresentationController);
//# sourceMappingURL=subscription-history-status.presentation.controller.js.map