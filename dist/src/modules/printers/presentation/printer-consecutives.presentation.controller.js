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
exports.PrinterConsecutivesPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let PrinterConsecutivesPresentationController = class PrinterConsecutivesPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    next() {
        this.reject('PrinterConsecutiveController GET /printer-consecutives/next');
    }
    pageable() {
        this.reject('PrinterConsecutiveController GET /printer-consecutives/pageable');
    }
    list() {
        this.reject('PrinterConsecutiveController GET /printer-consecutives');
    }
    create() {
        this.reject('PrinterConsecutiveController POST /printer-consecutives');
    }
    update() {
        this.reject('PrinterConsecutiveController PUT /printer-consecutives');
    }
};
exports.PrinterConsecutivesPresentationController = PrinterConsecutivesPresentationController;
__decorate([
    (0, common_1.Get)('next'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrinterConsecutivesPresentationController.prototype, "next", null);
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrinterConsecutivesPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrinterConsecutivesPresentationController.prototype, "list", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrinterConsecutivesPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PrinterConsecutivesPresentationController.prototype, "update", null);
exports.PrinterConsecutivesPresentationController = PrinterConsecutivesPresentationController = __decorate([
    (0, common_1.Controller)('printer-consecutives'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], PrinterConsecutivesPresentationController);
//# sourceMappingURL=printer-consecutives.presentation.controller.js.map