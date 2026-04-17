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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenTransactionsPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_transaction_application_service_1 = require("../application/parking-transaction.application.service");
let OpenTransactionsPresentationController = class OpenTransactionsPresentationController {
    parkingTransactions;
    constructor(parkingTransactions) {
        this.parkingTransactions = parkingTransactions;
    }
    countByType() {
        return this.parkingTransactions.countOpenByVehicleType();
    }
    params(serviceCode) {
        return this.parkingTransactions.getOpenSaleParams(serviceCode);
    }
    updatePlate() {
        return this.parkingTransactions.updateOpenVehiclePlate();
    }
    byPlate() {
        return this.parkingTransactions.listOpenByPlate();
    }
    byClient(clientId) {
        return this.parkingTransactions.listOpenByClient(clientId);
    }
    reprintTicket(openTransactionId) {
        return this.parkingTransactions.buildOpenReprintTicketData(openTransactionId);
    }
    remove(openTransactionId) {
        return this.parkingTransactions.removeOpenStay(openTransactionId);
    }
    create() {
        return this.parkingTransactions.registerOpenStay();
    }
    update() {
        return this.parkingTransactions.updateOpenStay();
    }
    list() {
        return this.parkingTransactions.listOpenStays();
    }
};
exports.OpenTransactionsPresentationController = OpenTransactionsPresentationController;
__decorate([
    (0, common_1.Get)('count-by-type'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "countByType", null);
__decorate([
    (0, common_1.Get)('params/:serviceCode'),
    __param(0, (0, common_1.Param)('serviceCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "params", null);
__decorate([
    (0, common_1.Put)('plate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "updatePlate", null);
__decorate([
    (0, common_1.Get)('by-plate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "byPlate", null);
__decorate([
    (0, common_1.Get)('by-client/:clientId'),
    __param(0, (0, common_1.Param)('clientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "byClient", null);
__decorate([
    (0, common_1.Get)(':openTransactionId/reprint-ticket'),
    __param(0, (0, common_1.Param)('openTransactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "reprintTicket", null);
__decorate([
    (0, common_1.Delete)(':openTransactionId'),
    __param(0, (0, common_1.Param)('openTransactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OpenTransactionsPresentationController.prototype, "list", null);
exports.OpenTransactionsPresentationController = OpenTransactionsPresentationController = __decorate([
    (0, common_1.Controller)('open-transactions'),
    __metadata("design:paramtypes", [parking_transaction_application_service_1.ParkingTransactionApplicationService])
], OpenTransactionsPresentationController);
//# sourceMappingURL=open-transactions.presentation.controller.js.map