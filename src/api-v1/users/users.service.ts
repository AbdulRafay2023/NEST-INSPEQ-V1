import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../../database/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersQueryDto } from './dto/get-users-query.dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(private readonly databaseService: DatabaseService) {}

  //create user
  async createUser(data: CreateUserDto) {
    try {
      return this.databaseService.user.create({
        data: {
          name: data.name,
          email: data.email,

          departments: {
            create: data.departments.map((departmentId) => ({
              department: {
                connect: {
                  id: departmentId,
                },
              },
            })),
          },
        },
        include: {
          departments: {
            include: {
              department: true,
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //get users
  async getUsers(query: GetUsersQueryDto) {
    try {
      return this.databaseService.user.findMany();
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //find user by id

  async findUser(id: number) {
    try {
      return await this.databaseService.user.findUnique({
        where: {
          id,
        },
        include: {
          departments: {
            include: {
              department: true,
            },
          },
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //update user
  async updateUser(id: number, data: UpdateUserDto) {
    try {
      return this.databaseService.user.update({
        where: {
          id: id,
        },
        data: {
          name: data.name,
          department: data.departments,
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //delete user
  async deleteUser(id: number) {
    try {
      return this.databaseService.user.delete({
        where: {
          id: id,
        },
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
