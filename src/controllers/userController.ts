//src/controllers/userController.ts

import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { UserService } from '../services/userService';
import { user } from '../models/user';
import { UserDto } from '../dtos/userDTO';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/user')
export class UserController {

  @Inject()
  private userService: UserService;

  @Post()
  async createUser(@Body() userData: UserDto): Promise<user> {
    return await this.userService.create(userData);
  }

  @Get()
  async getAllUsers(@QueryParam('isDeleted') isDeleted:any = 0): Promise<user[]>{
    console.log("Users")
    try{

    const users =  await this.userService.getAll(isDeleted);
    console.log("users returned from userservice",users);
    return users;
    } catch (error) {
      console.error('error in getallUsers contoller:',error);
    }
  }
   

  @Get('/:id')
  async getUserById(@Param('id') id: string): Promise<user | undefined> {
    return await this.userService.getById(id);
  }

  @Put('/:id')
  async updateUser(@Param('id') id: string, @Body() userData: UserDto): Promise<user | null> {
    return await this.userService.update(id, userData);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string): Promise<user | null> {
    return await this.userService.delete(id);
  }
}
