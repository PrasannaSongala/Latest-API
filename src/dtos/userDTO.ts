//src/dtos/userDTO.ts

import { AutoMap } from '@automapper/classes';
import { IsBoolean, IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

// Base User DTO
export class UserDto {
  @AutoMap()
  @IsString()  
  public id!: string; 

  @AutoMap()
  @IsString()
  public fullName!: string;

  @AutoMap()
  @IsString()
  public mobileNumber!: string;

  @AutoMap()
  @IsString()
  public roleId!: string;

  @AutoMap()
  @IsBoolean()
  public isMobileConfirmed!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsString()
  public createdBy!: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsString()
  public updatedBy!: string;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsString()
  public deletedBy!: string;

  @AutoMap()
  @IsString()
  public timezone!: string;

  @AutoMap()
  @IsString()
  public lang!: string;
}

// DTO for Updating User
export class UpdateUserDto {
  @AutoMap()
  @IsOptional()
  @IsString()  
  public id?: string;  

  @AutoMap()
  @IsOptional()
  @IsString()
  public fullName?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public roleId?: string;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isMobileConfirmed?: boolean;

  @AutoMap()
  @IsOptional()
  @IsBoolean()
  public isDeleted?: boolean;

  @AutoMap()
  @IsOptional()
  @IsString()
  public createdBy?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public createdAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public updatedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsDate()
  public updatedAt?: Date;

  @AutoMap()
  @IsOptional()
  @IsString()
  public deletedBy?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public timezone?: string;

  @AutoMap()
  @IsOptional()
  @IsString()
  public lang?: string;
}

// DTO for Creating a User
export class CreateUserDto {
  @AutoMap()
  @IsString()
  public fullName!: string;

  @AutoMap()
  @IsString()
  public mobileNumber!: string;

  @AutoMap()
  @IsString()
  public roleId!: string;

  @AutoMap()
  @IsBoolean()
  public isMobileConfirmed!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsString()
  public createdBy!: string;
}

// DTO for User Response
export class UserResponseDto {
  @AutoMap()
  @IsString()  
  public id!: string;  

  @AutoMap()
  @IsString()
  public fullName!: string;

  @AutoMap()
  @IsString()
  public mobileNumber!: string;

  @AutoMap()
  @IsString()
  public roleId!: string;

  @AutoMap()
  @IsBoolean()
  public isMobileConfirmed!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsString()
  public createdBy!: string;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsString()
  public updatedBy!: string;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsString()
  public deletedBy!: string;

  @AutoMap()
  @IsString()
  public timezone!: string;

  @AutoMap()
  @IsString()
  public lang!: string;
}

// DTO for User List Response
export class UserListResponseDto {
  @AutoMap()
  @IsString() 
  public id!: string;  

  @AutoMap()
  @IsString()
  public fullName!: string;

  @AutoMap()
  @IsString()
  public mobileNumber!: string;

  @AutoMap()
  @IsString()
  public roleId!: string;

  @AutoMap()
  @IsBoolean()
  public isMobileConfirmed!: boolean;

  @AutoMap()
  @IsBoolean()
  public isDeleted!: boolean;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;
}
