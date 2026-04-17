import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code PrinterController}. */
@Controller('printers')
export class PrintersPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('PrinterController GET /printers/pageable');
  }

  @Get()
  list(): never {
    this.reject('PrinterController GET /printers');
  }

  @Post()
  create(): never {
    this.reject('PrinterController POST /printers');
  }

  @Put()
  update(): never {
    this.reject('PrinterController PUT /printers');
  }
}
