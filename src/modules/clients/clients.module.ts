import { Module } from '@nestjs/common';
import { ClientPresentationController } from './presentation/client.presentation.controller';
import { DestinationClientPresentationController } from './presentation/destination-client.presentation.controller';

@Module({
  controllers: [ClientPresentationController, DestinationClientPresentationController],
})
export class ClientsModule {}
