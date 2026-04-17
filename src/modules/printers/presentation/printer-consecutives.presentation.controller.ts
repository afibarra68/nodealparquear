import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code PrinterConsecutiveController}. */
@Controller('printer-consecutives')
export class PrinterConsecutivesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('next')
  next(): never {
    this.reject('PrinterConsecutiveController GET /printer-consecutives/next');
  }

  @Get('pageable')
  pageable(): never {
    this.reject(
      'PrinterConsecutiveController GET /printer-consecutives/pageable',
    );
  }

  @Get()
  list(): never {
    this.reject('PrinterConsecutiveController GET /printer-consecutives');
  }

  @Post()
  create(): never {
    this.reject('PrinterConsecutiveController POST /printer-consecutives');
  }

  @Put()
  update(): never {
    this.reject('PrinterConsecutiveController PUT /printer-consecutives');
  }
}
