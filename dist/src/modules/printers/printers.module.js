"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrintersModule = void 0;
const common_1 = require("@nestjs/common");
const printer_consecutives_presentation_controller_1 = require("./presentation/printer-consecutives.presentation.controller");
const printers_presentation_controller_1 = require("./presentation/printers.presentation.controller");
const ticket_templates_presentation_controller_1 = require("./presentation/ticket-templates.presentation.controller");
const user_printer_types_presentation_controller_1 = require("./presentation/user-printer-types.presentation.controller");
const user_printers_presentation_controller_1 = require("./presentation/user-printers.presentation.controller");
let PrintersModule = class PrintersModule {
};
exports.PrintersModule = PrintersModule;
exports.PrintersModule = PrintersModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            printers_presentation_controller_1.PrintersPresentationController,
            user_printers_presentation_controller_1.UserPrintersPresentationController,
            user_printer_types_presentation_controller_1.UserPrinterTypesPresentationController,
            printer_consecutives_presentation_controller_1.PrinterConsecutivesPresentationController,
            ticket_templates_presentation_controller_1.TicketTemplatesPresentationController,
        ],
    })
], PrintersModule);
//# sourceMappingURL=printers.module.js.map