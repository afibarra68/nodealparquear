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
exports.UsersPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_parity_base_controller_1 = require("../../../common/migration/parking-parity.base-controller");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let UsersPresentationController = class UsersPresentationController extends parking_parity_base_controller_1.ParkingParityBaseController {
    constructor(migration) {
        super(migration);
    }
    create() {
        this.reject('UserController POST /users');
    }
    update() {
        this.reject('UserController PUT /users');
    }
    deleteUser() {
        this.reject('UserController POST /users/down_public_user');
    }
    pageable() {
        this.reject('UserController GET /users/pageable');
    }
    resetPassword() {
        this.reject('UserController POST /users/reset-password');
    }
    toggleStatus() {
        this.reject('UserController POST /users/toggle-status');
    }
    getById() {
        this.reject('UserController GET /users/:id');
    }
};
exports.UsersPresentationController = UsersPresentationController;
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('down_public_user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.Get)('pageable'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "pageable", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('toggle-status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "toggleStatus", null);
__decorate([
    (0, common_1.Get)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersPresentationController.prototype, "getById", null);
exports.UsersPresentationController = UsersPresentationController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], UsersPresentationController);
//# sourceMappingURL=users.presentation.controller.js.map