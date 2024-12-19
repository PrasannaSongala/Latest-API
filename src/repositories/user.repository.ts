import { Service } from 'typedi';
import { user } from '../models/user'; 
import { HttpException } from '../exceptions/HttpException';
import { UserDto } from '../dtos/userDTO'; 

@Service() 
export class UserRepository {
  // Create a new user
  async create(userData: UserDto): Promise<user> {
    try {
      const newUser = await user.create({
        ...userData,
        isMobileConfirmed: userData.isMobileConfirmed ? 1 : 0,
        isDeleted: userData.isDeleted ? 1 : 0,
      });
      return newUser;
    } catch (error) {
      console.error('Error creating user:', error); // More specific log message
      throw new HttpException(500, 'Failed to create user');
    }
  }

  // Get all users, with optional filter for 'isDeleted' status
  public async getUsers(isDeleted: any = 0): Promise<user[]> {
    console.log("help");
  
    try {
      // Ensure 'isDeleted' is always converted to an integer (1 or 0)
      const isDeletedInt = isDeleted === undefined || isDeleted === null ? 0 : Number(isDeleted);
      
      if (isNaN(isDeletedInt)) {
        throw new Error("Invalid value for 'isDeleted'. It should be a number (0 or 1).");
      }
  
      console.log(`Running query to fetch users where isDeleted = ${isDeletedInt}`);
  
      // Fetch users based on isDeleted status
      const users = await user.findAll();
      
      console.log('Users fetched:', users);
  
      // Check if users were found
      if (!users || users.length === 0) {
        throw new Error('No users found');
      }
  
      return users;
    } catch (error) {
      console.error('Database query failed while fetching users:', error);
      throw new HttpException(500, 'Failed to fetch users');
    }
  }
  

  // Get user by ID
  async getById(id: string): Promise<user | undefined> {
    try {
      const foundUser = await user.findByPk(id);
      if (!foundUser) {
        throw new HttpException(404, 'User not found');
      }
      return foundUser;
    } catch (error) {
      console.error('Error fetching user by ID:', error); 
      throw new HttpException(500, 'Failed to fetch user');
    }
  }

  // Update an existing user
  async update(id: string, userData: UserDto): Promise<user | null> {
    try {
      const userToUpdate = await user.findByPk(id);
      if (!userToUpdate) {
        throw new HttpException(404, 'User not found');
      }

      await userToUpdate.update({
        ...userData,
        isMobileConfirmed: userData.isMobileConfirmed ? 1 : 0,
        isDeleted: userData.isDeleted ? 1 : 0,
      });

      return userToUpdate;
    } catch (error) {
      console.error('Error updating user:', error); // More specific log message
      throw new HttpException(500, 'Failed to update user');
    }
  }

  async delete(id: string): Promise<user | null> {
    try {
      const userToDelete = await user.findByPk(id);
      if (!userToDelete) {
        throw new HttpException(404, 'User not found');
      }

      userToDelete.isDeleted = 1; 
      await userToDelete.save();

      return userToDelete;
    } catch (error) {
      console.error('Error soft-deleting user:', error); 
      throw new HttpException(500, 'Failed to delete user');
    }
  }
}
