import { Module } from '@nestjs/common';
import { ShiftsPresentationController } from './presentation/shifts.presentation.controller';
import { ShiftTypesPresentationController } from './presentation/shift-types.presentation.controller';
import { ShiftAssignmentsPresentationController } from './presentation/shift-assignments.presentation.controller';
import { ShiftReplacementsPresentationController } from './presentation/shift-replacements.presentation.controller';
import { ShiftConnectionHistoriesPresentationController } from './presentation/shift-connection-histories.presentation.controller';
import { ShiftValidationPresentationController } from './presentation/shift-validation.presentation.controller';

@Module({
  controllers: [ShiftsPresentationController, ShiftTypesPresentationController, ShiftAssignmentsPresentationController, ShiftReplacementsPresentationController, ShiftConnectionHistoriesPresentationController, ShiftValidationPresentationController],
})
export class ShiftsModule {}
