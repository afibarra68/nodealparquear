"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnmigratedFeaturePolicy = void 0;
const common_1 = require("@nestjs/common");
let UnmigratedFeaturePolicy = class UnmigratedFeaturePolicy {
    deny(operationKey) {
        throw new common_1.HttpException({
            message: `Migración pendiente (parking-app → node): ${operationKey}`,
            code: 'MIGRATION_PENDING',
            operationKey,
        }, common_1.HttpStatus.NOT_IMPLEMENTED);
    }
};
exports.UnmigratedFeaturePolicy = UnmigratedFeaturePolicy;
exports.UnmigratedFeaturePolicy = UnmigratedFeaturePolicy = __decorate([
    (0, common_1.Injectable)()
], UnmigratedFeaturePolicy);
//# sourceMappingURL=unmigrated-feature.policy.js.map