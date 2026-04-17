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
exports.ShiftAssignmentsPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let ShiftAssignmentsPresentationController = class ShiftAssignmentsPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    confirm() {
        this.reject('ShiftAssignmentController POST /shift-assignments/:id/confirm');
    }
    close() {
        this.reject('ShiftAssignmentController POST /shift-assignments/:id/close');
    }
    byUser() {
        this.reject('ShiftAssignmentController GET /shift-assignments/by-user/:userId');
    }
    byCompany() {
        this.reject('ShiftAssignmentController GET /shift-assignments/by-company/:companyId');
    }
    pageable() {
        this.reject('ShiftAssignmentController GET /shift-assignments/pageable');
    }
    getById() {
        this.reject('ShiftAssignmentController GET /shift-assignments/:id');
    }
    remove() {
        this.reject('ShiftAssignmentController DELETE /shift-assignments/:id');
    }
    create() {
        this.reject('ShiftAssignmentController POST /shift-assignments');
    }
    update() {
        this.reject('ShiftAssignmentController PUT /shift-assignments');
    }
};
exports.ShiftAssignmentsPresentationController = ShiftAssignmentsPresentationController;
__decorate([
    (0, common_1.Post)(':id/confirm'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "confirm", null);
__decorate([
    (0, common_1.Post)(':id/close'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "close", null);
__decorate([
    (0, common_1.Get)('by-user/:userId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "byUser", null);
__decorate([
    (0, common_1.Get)('by-company/:companyId'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "byCompany", null);
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "getById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ShiftAssignmentsPresentationController.prototype, "update", null);
exports.ShiftAssignmentsPresentationController = ShiftAssignmentsPresentationController = __decorate([
    (0, common_1.Controller)('shift-assignments'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], ShiftAssignmentsPresentationController);
//# sourceMappingURL=shift-assignments.presentation.controller.js.map