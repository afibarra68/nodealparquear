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
exports.ParkingTransactionApplicationService = void 0;
const common_1 = require("@nestjs/common");
const unmigrated_feature_policy_1 = require("../../../common/migration/unmigrated-feature.policy");
let ParkingTransactionApplicationService = class ParkingTransactionApplicationService {
    migration;
    constructor(migration) {
        this.migration = migration;
    }
    countOpenByVehicleType() {
        this.migration.deny('OpenTransactionController GET /open-transactions/count-by-type');
    }
    getOpenSaleParams(serviceCode) {
        void serviceCode;
        this.migration.deny('OpenTransactionController GET /open-transactions/params/:serviceCode');
    }
    registerOpenStay() {
        this.migration.deny('OpenTransactionController POST /open-transactions');
    }
    updateOpenStay() {
        this.migration.deny('OpenTransactionController PUT /open-transactions');
    }
    updateOpenVehiclePlate() {
        this.migration.deny('OpenTransactionController PUT /open-transactions/plate');
    }
    listOpenStays() {
        this.migration.deny('OpenTransactionController GET /open-transactions');
    }
    listOpenByPlate() {
        this.migration.deny('OpenTransactionController GET /open-transactions/by-plate');
    }
    listOpenByClient(clientId) {
        void clientId;
        this.migration.deny('OpenTransactionController GET /open-transactions/by-client/:clientId');
    }
    buildOpenReprintTicketData(openTransactionId) {
        void openTransactionId;
        this.migration.deny('OpenTransactionController GET /open-transactions/:openTransactionId/reprint-ticket');
    }
    removeOpenStay(openTransactionId) {
        void openTransactionId;
        this.migration.deny('OpenTransactionController DELETE /open-transactions/:openTransactionId');
    }
    getClosedSaleParams(serviceCode) {
        void serviceCode;
        this.migration.deny('ClosedTransactionController GET /closed-transactions/params/:serviceCode');
    }
    closeStay() {
        this.migration.deny('ClosedTransactionController POST /closed-transactions/close');
    }
    listClosedStays() {
        this.migration.deny('ClosedTransactionController GET /closed-transactions');
    }
    getClosedTodayStats() {
        this.migration.deny('ClosedTransactionController GET /closed-transactions/today-stats');
    }
    listClosedToday() {
        this.migration.deny('ClosedTransactionController GET /closed-transactions/today');
    }
    buildClosedReprintTicketData(closedTransactionId) {
        void closedTransactionId;
        this.migration.deny('ClosedTransactionController GET /closed-transactions/:closedTransactionId/reprint-ticket');
    }
};
exports.ParkingTransactionApplicationService = ParkingTransactionApplicationService;
exports.ParkingTransactionApplicationService = ParkingTransactionApplicationService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [unmigrated_feature_policy_1.UnmigratedFeaturePolicy])
], ParkingTransactionApplicationService);
//# sourceMappingURL=parking-transaction.application.service.js.map