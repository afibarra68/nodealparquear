"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingParityBaseController = void 0;
class ParkingParityBaseController {
    unmigratedFeaturePolicy;
    constructor(unmigratedFeaturePolicy) {
        this.unmigratedFeaturePolicy = unmigratedFeaturePolicy;
    }
    reject(operationKey) {
        return this.unmigratedFeaturePolicy.deny(operationKey);
    }
}
exports.ParkingParityBaseController = ParkingParityBaseController;
//# sourceMappingURL=parking-parity.base-controller.js.map