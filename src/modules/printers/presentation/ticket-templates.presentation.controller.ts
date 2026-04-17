import { Controller, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code TicketTemplateController}. */
@Controller('ticket-templates')
export class TicketTemplatesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('TicketTemplateController GET /ticket-templates/pageable');
  }

  @Get()
  list(): never {
    this.reject('TicketTemplateController GET /ticket-templates');
  }

  @Post()
  create(): never {
    this.reject('TicketTemplateController POST /ticket-templates');
  }

  @Put()
  update(): never {
    this.reject('TicketTemplateController PUT /ticket-templates');
  }
}
