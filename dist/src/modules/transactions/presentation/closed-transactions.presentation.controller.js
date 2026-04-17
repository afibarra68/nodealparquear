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
exports.ClosedTransactionsPresentationController = void 0;
const common_1 = require("@nestjs/common");
const parking_transaction_application_service_1 = require("../application/parking-transaction.application.service");
let ClosedTransactionsPresentationController = class ClosedTransactionsPresentationController {
    parkingTransactions;
    constructor(parkingTransactions) {
        this.parkingTransactions = parkingTransactions;
    }
    todayStats() {
        return this.parkingTransactions.getClosedTodayStats();
    }
    today() {
        return this.parkingTransactions.listClosedToday();
    }
    params(serviceCode) {
        return this.parkingTransactions.getClosedSaleParams(serviceCode);
    }
    close() {
        return this.parkingTransactions.closeStay();
    }
    reprintTicket(closedTransactionId) {
        return this.parkingTransactions.buildClosedReprintTicketData(closedTransactionId);
    }
    list() {
        return this.parkingTransactions.listClosedStays();
    }
};
exports.ClosedTransactionsPresentationController = ClosedTransactionsPresentationController;
__decorate([
    (0, common_1.Get)('today-stats'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "todayStats", null);
__decorate([
    (0, common_1.Get)('today'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "today", null);
__decorate([
    (0, common_1.Get)('params/:serviceCode'),
    __param(0, (0, common_1.Param)('serviceCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "params", null);
__decorate([
    (0, common_1.Post)('close'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "close", null);
__decorate([
    (0, common_1.Get)(':closedTransactionId/reprint-ticket'),
    __param(0, (0, common_1.Param)('closedTransactionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "reprintTicket", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ClosedTransactionsPresentationController.prototype, "list", null);
exports.ClosedTransactionsPresentationController = ClosedTransactionsPresentationController = __decorate([
    (0, common_1.Controller)('closed-transactions'),
    __metadata("design:paramtypes", [parking_transaction_application_service_1.ParkingTransactionApplicationService])
], ClosedTransactionsPresentationController);
//# sourceMappingURL=closed-transactions.presentation.controller.js.map