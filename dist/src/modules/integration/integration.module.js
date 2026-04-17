"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationModule = void 0;
const common_1 = require("@nestjs/common");
const legacy_users_gateway_1 = require("./gateways/legacy-users.gateway");
const noop_legacy_users_gateway_1 = require("./gateways/noop-legacy-users.gateway");
let IntegrationModule = class IntegrationModule {
};
exports.IntegrationModule = IntegrationModule;
exports.IntegrationModule = IntegrationModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: legacy_users_gateway_1.LegacyUsersGateway,
                useClass: noop_legacy_users_gateway_1.NoopLegacyUsersGateway,
            },
        ],
        exports: [legacy_users_gateway_1.LegacyUsersGateway],
    })
], IntegrationModule);
//# sourceMappingURL=integration.module.js.map