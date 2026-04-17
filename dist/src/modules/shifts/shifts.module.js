"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftsModule = void 0;
const common_1 = require("@nestjs/common");
const shift_assignments_presentation_controller_1 = require("./presentation/shift-assignments.presentation.controller");
const shift_connection_histories_presentation_controller_1 = require("./presentation/shift-connection-histories.presentation.controller");
const shift_replacements_presentation_controller_1 = require("./presentation/shift-replacements.presentation.controller");
const shift_types_presentation_controller_1 = require("./presentation/shift-types.presentation.controller");
const shift_validation_presentation_controller_1 = require("./presentation/shift-validation.presentation.controller");
const shifts_presentation_controller_1 = require("./presentation/shifts.presentation.controller");
let ShiftsModule = class ShiftsModule {
};
exports.ShiftsModule = ShiftsModule;
exports.ShiftsModule = ShiftsModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            shifts_presentation_controller_1.ShiftsPresentationController,
            shift_assignments_presentation_controller_1.ShiftAssignmentsPresentationController,
            shift_replacements_presentation_controller_1.ShiftReplacementsPresentationController,
            shift_types_presentation_controller_1.ShiftTypesPresentationController,
            shift_validation_presentation_controller_1.ShiftValidationPresentationController,
            shift_connection_histories_presentation_controller_1.ShiftConnectionHistoriesPresentationController,
        ],
    })
], ShiftsModule);
//# sourceMappingURL=shifts.module.js.map