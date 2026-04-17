import { Module } from '@nestjs/common';
import { UsersPresentationController } from './presentation/users.presentation.controller';
import { UserRolesPresentationController } from './presentation/user-roles.presentation.controller';

@Module({
  controllers: [UsersPresentationController, UserRolesPresentationController],
})
export class UsersModule {}
