//src/services/userService.ts

import { Service } from 'typedi';
import { user } from '../models/user'; 
import { UserDto } from '../dtos/userDTO'; // Use `UserDto`
import { HttpException } from '../exceptions/HttpException';
import { UserRepository } from '../repositories/user.repository'; 


@Service()  
export class UserService {
  private readonly userRepository: UserRepository
  constructor() {
    this.userRepository = new UserRepository();
  }

  // Create a new user
  async create(userData: UserDto): Promise<user> {
    try {
      return await this.userRepository.create(userData);
    } catch (error) {
      console.error('Error in UserService during create:', error);  
      throw new HttpException(500, 'Failed to create user');
    }
  }

  // Get all users
  async getAll(isDeleted: any = 0 ): Promise<user[]> {
    try {
      console.log(`Fetching users with isDeleted = ${isDeleted}`);
      // console.log("userRepository4444",this.userRepository.getUsers)
      const users = await this.userRepository.getUsers(isDeleted);
      console.log("users fetched", users);
      return users;
    } catch (error) {
      console.error('Error in UserService while fetching users:', error);  
      throw new HttpException(500, 'Failed to fetch users');
    }
  }

  // Get user by ID
  async getById(id: string): Promise<user | undefined> {
    console.log("hELLO")
    try {
      return await this.userRepository.getById(id);
    } catch (error) {
      console.error('Error in UserService while fetching user by ID:', error);  
      throw new HttpException(500, 'Failed to fetch user');
    }
  }

  // Update user
  async update(id: string, userData: UserDto): Promise<user | null> {
    console.log("hello")
    try {
      return await this.userRepository.update(id, userData);
    } catch (error) {
      console.error('Error in UserService while updating user:', error);  
      throw new HttpException(500, 'Failed to update user');
    }
  }

  async delete(id: string): Promise<user | null> {
    try {
      return await this.userRepository.delete(id);
    } catch (error) {
      console.error('Error in UserService while deleting user:', error);  
      throw new HttpException(500, 'Failed to delete user');
    }
  }
}
