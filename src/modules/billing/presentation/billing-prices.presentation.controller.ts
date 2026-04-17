import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ParkingParityBaseController } from '../../../common/migration/parking-parity.base-controller';
import { UnmigratedFeaturePolicy } from '../../../common/migration/unmigrated-feature.policy';

/** Paridad {@code BillingPriceController}. */
@Controller('billing-prices')
export class BillingPricesPresentationController extends ParkingParityBaseController {
  constructor(migration: UnmigratedFeaturePolicy) {
    super(migration);
  }

  @Get('pageable')
  pageable(): never {
    this.reject('BillingPriceController GET /billing-prices/pageable');
  }

  @Get()
  list(): never {
    this.reject('BillingPriceController GET /billing-prices');
  }

  @Get(':billingPriceId')
  getById(): never {
    this.reject('BillingPriceController GET /billing-prices/:billingPriceId');
  }

  @Post()
  create(): never {
    this.reject('BillingPriceController POST /billing-prices');
  }

  @Put()
  update(): never {
    this.reject('BillingPriceController PUT /billing-prices');
  }

  @Delete(':billingPriceId')
  remove(): never {
    this.reject(
      'BillingPriceController DELETE /billing-prices/:billingPriceId',
    );
  }
}
