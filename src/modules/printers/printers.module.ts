import { Module } from '@nestjs/common';
import { PrintersPresentationController } from './presentation/printers.presentation.controller';
import { TicketTemplatesPresentationController } from './presentation/ticket-templates.presentation.controller';
import { UserPrintersPresentationController } from './presentation/user-printers.presentation.controller';
import { UserPrinterTypesPresentationController } from './presentation/user-printer-types.presentation.controller';
import { PrinterConsecutivesPresentationController } from './presentation/printer-consecutives.presentation.controller';

@Module({
  controllers: [PrintersPresentationController, TicketTemplatesPresentationController, UserPrintersPresentationController, UserPrinterTypesPresentationController, PrinterConsecutivesPresentationController],
})
export class PrintersModule {}
