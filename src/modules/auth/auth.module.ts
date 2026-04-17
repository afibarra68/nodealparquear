import { Module } from '@nestjs/common';
import { AuthApplicationService } from './application/auth.application.service';
import { AuthPresentationController } from './presentation/auth.presentation.controller';

@Module({
  controllers: [AuthPresentationController],
  providers: [AuthApplicationService],
})
export class AuthModule {}
