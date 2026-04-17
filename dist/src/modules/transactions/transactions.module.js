"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionsModule = void 0;
const common_1 = require("@nestjs/common");
const parking_transaction_application_service_1 = require("./application/parking-transaction.application.service");
const closed_transactions_presentation_controller_1 = require("./presentation/closed-transactions.presentation.controller");
const open_transactions_presentation_controller_1 = require("./presentation/open-transactions.presentation.controller");
let TransactionsModule = class TransactionsModule {
};
exports.TransactionsModule = TransactionsModule;
exports.TransactionsModule = TransactionsModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            open_transactions_presentation_controller_1.OpenTransactionsPresentationController,
            closed_transactions_presentation_controller_1.ClosedTransactionsPresentationController,
        ],
        providers: [parking_transaction_application_service_1.ParkingTransactionApplicationService],
        exports: [parking_transaction_application_service_1.ParkingTransactionApplicationService],
    })
], TransactionsModule);
//# sourceMappingURL=transactions.module.js.map