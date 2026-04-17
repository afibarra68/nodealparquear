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
exports.UserPrinterTypesPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let UserPrinterTypesPresentationController = class UserPrinterTypesPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    pageable() {
        this.reject('UserPrinterTypeController GET /user-printer-types/pageable');
    }
    list() {
        this.reject('UserPrinterTypeController GET /user-printer-types');
    }
    getById() {
        this.reject('UserPrinterTypeController GET /user-printer-types/:id');
    }
    create() {
        this.reject('UserPrinterTypeController POST /user-printer-types');
    }
    update() {
        this.reject('UserPrinterTypeController PUT /user-printer-types');
    }
    remove() {
        this.reject('UserPrinterTypeController DELETE /user-printer-types/:id');
    }
};
exports.UserPrinterTypesPresentationController = UserPrinterTypesPresentationController;
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserPrinterTypesPresentationController.prototype, "remove", null);
exports.UserPrinterTypesPresentationController = UserPrinterTypesPresentationController = __decorate([
    (0, common_1.Controller)('user-printer-types'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], UserPrinterTypesPresentationController);
//# sourceMappingURL=user-printer-types.presentation.controller.js.map