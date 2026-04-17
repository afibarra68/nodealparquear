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
exports.AuthApplicationService = void 0;
const common_1 = require("@nestjs/common");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let AuthApplicationService = class AuthApplicationService {
    migration;
    constructor(migration) {
        this.migration = migration;
    }
    login() {
        this.migration.deny('UserLoginController POST /auth/login');
    }
    loginSell() {
        this.migration.deny('UserLoginController POST /auth/login-sell');
    }
    validateToken() {
        this.migration.deny('UserLoginController GET /auth/validate');
    }
    changePassword() {
        this.migration.deny('UserLoginController POST /auth/change-password');
    }
    logout() {
        return;
    }
};
exports.AuthApplicationService = AuthApplicationService;
exports.AuthApplicationService = AuthApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], AuthApplicationService);
//# sourceMappingURL=auth.application.service.js.map