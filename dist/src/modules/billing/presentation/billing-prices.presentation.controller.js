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
exports.BillingPricesPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let BillingPricesPresentationController = class BillingPricesPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    pageable() {
        this.reject('BillingPriceController GET /billing-prices/pageable');
    }
    list() {
        this.reject('BillingPriceController GET /billing-prices');
    }
    getById() {
        this.reject('BillingPriceController GET /billing-prices/:billingPriceId');
    }
    create() {
        this.reject('BillingPriceController POST /billing-prices');
    }
    update() {
        this.reject('BillingPriceController PUT /billing-prices');
    }
    remove() {
        this.reject('BillingPriceController DELETE /billing-prices/:billingPriceId');
    }
};
exports.BillingPricesPresentationController = BillingPricesPresentationController;
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':billingPriceId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':billingPriceId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillingPricesPresentationController.prototype, "remove", null);
exports.BillingPricesPresentationController = BillingPricesPresentationController = __decorate([
    (0, common_1.Controller)('billing-prices'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], BillingPricesPresentationController);
//# sourceMappingURL=billing-prices.presentation.controller.js.map