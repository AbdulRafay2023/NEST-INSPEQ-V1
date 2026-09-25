import { Injectable, Logger } from '@nestjs/common';
import { DatabaseService } from '../../database/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { GetUsersQueryDto } from './dto/get-users-query.dto';
import { usersHelpers } from './users.helper';
import { userFormatInputType, userFormatResponseType } from './types';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly usersHelpers: usersHelpers,
  ) {}

  //create user
  async createUser(data: CreateUserDto): Promise<userFormatInputType> {
    try {
      return await this.databaseService.user.create({
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
  async getUsers(query: GetUsersQueryDto): Promise<userFormatResponseType[]> {
    try {
      const users = await this.databaseService.user.findMany({
        include: {
          departments: {
            select: {
              department: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
      });

      return users.map((user) => this.usersHelpers.formatUser(user));
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //find user by id

  async findUser(id: number): Promise<userFormatResponseType> {
    try {
      const user = await this.databaseService.user.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          departments: {
            select: {
              department: {
                select: {
                  name: true,
                  id: true,
                },
              },
            },
          },
        },
      });
      return this.usersHelpers.formatUser(user);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  //update user
  async updateUser(
    id: number,
    data: UpdateUserDto,
  ): Promise<userFormatResponseType> {
    try {
      const user = await this.databaseService.user.update({
        where: {
          id: id,
        },
        data: {
          name: data.name,
          departments: {
            deleteMany: {},
            ...(data.departments?.length && {
              createMany: {
                data: data.departments.map((department) => ({
                  department_id: department,
                })),
              },
            }),
          },
        },
        include: {
          departments: {
            select: {
              department: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

      return this.usersHelpers.formatUser(user);
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
