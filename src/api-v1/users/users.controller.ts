import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersQueryDto } from './dto/get-users-query.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // CREATE USER
  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.userService.createUser(data);
  }

  // GET ALL USERS
  @Get()
  getUsers(@Query() query: GetUsersQueryDto) {
    return this.userService.getUsers(query);
  }

  // GET USER DETAIL
  @Get(':id')
  findUser(@Param('id') id: string) {
    return this.userService.findUser(Number(id));
  }

  // UPDATE USER
  @Put(':id')
  updateUser(@Param('id') id: string, @Body() data: UpdateUserDto) {
    return this.userService.updateUser(Number(id), data);
  }

  // DELETE USER
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(Number(id));
  }
}
