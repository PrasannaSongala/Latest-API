//src/mapper-profiles/user.profile.ts

import { UserDto, UpdateUserDto } from '@/dtos/userDTO';
import { user } from '@/models/user'; // Lowercase `user`
import { MappingProfile, createMap, forMember, mapFrom } from '@automapper/core';

export const userProfile: MappingProfile = (mapper) => {
  // Mapping from user to UserDto
  createMap(
    mapper,
    user, // Source type (user model)
    UserDto, // Destination type (DTO)
    forMember((d) => d.id, mapFrom((s: user) => String(s.id))), // Convert to string
    forMember((d) => d.mobileNumber, mapFrom((s: user) => s.mobileNumber)),
    forMember((d) => d.fullName, mapFrom((s: user) => s.fullName)),
    forMember((d) => d.roleId, mapFrom((s: user) => s.roleId)),
    forMember((d) => d.isMobileConfirmed, mapFrom((s: user) => Boolean(s.isMobileConfirmed))), // Convert to boolean
    forMember((d) => d.isDeleted, mapFrom((s: user) => Boolean(s.isDeleted))), // Convert to boolean
    forMember((d) => d.createdBy, mapFrom((s: user) => s.createdBy)),
    forMember((d) => d.updatedBy, mapFrom((s: user) => s.updatedBy)),
    forMember((d) => d.deletedBy, mapFrom((s: user) => s.deletedBy)),
    forMember((d) => d.createdAt, mapFrom((s: user) => s.createdAt)),
    forMember((d) => d.updatedAt, mapFrom((s: user) => s.updatedAt))
  );

  // Mapping from UpdateUserDto to user
createMap(
  mapper,
  UpdateUserDto,
  user,
  forMember((d) => d.mobileNumber, mapFrom((s: UpdateUserDto) => s.mobileNumber)),
  forMember((d) => d.fullName, mapFrom((s: UpdateUserDto) => s.fullName)),
  forMember((d) => d.roleId, mapFrom((s: UpdateUserDto) => s.roleId)),
  forMember((d) => d.isMobileConfirmed, mapFrom((s: UpdateUserDto) => s.isMobileConfirmed ? 1 : 0)), // Convert to number
  forMember((d) => d.isDeleted, mapFrom((s: UpdateUserDto) => s.isDeleted ? 1 : 0)), // Convert to number
  forMember((d) => d.createdBy, mapFrom((s: UpdateUserDto) => s.createdBy)),
  forMember((d) => d.updatedBy, mapFrom((s: UpdateUserDto) => s.updatedBy)),
  forMember((d) => d.deletedBy, mapFrom((s: UpdateUserDto) => s.deletedBy)),
  forMember((d) => d.createdAt, mapFrom((s: UpdateUserDto) => s.createdAt)),
  forMember((d) => d.updatedAt, mapFrom((s: UpdateUserDto) => s.updatedAt))
);
};
