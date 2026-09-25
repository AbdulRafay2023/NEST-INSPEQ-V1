import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { usersHelpers } from './users.helper';

@Module({
  providers: [UsersService, usersHelpers],
  controllers: [UsersController],
})
export class UsersModule {}
