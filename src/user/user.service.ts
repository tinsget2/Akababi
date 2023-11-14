import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<UserDto[] | any | string> {
    try {
      const users = await this.userRepository.find({
        relations: ['challenges', 'challenges.participants'],
      });
      if (!users) {
        throw new NotFoundException(`User not found`);
      }
      return users;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async findOne(id: number): Promise<UserDto | string | any> {
    try {
      const user = await this.userRepository.findOne({
        where: { id },
        relations: ['challenges'],
      });
      if (!user) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return user;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async create(userDto: UserDto): Promise<UserDto | any> {
    try {
      const newUser = this.userRepository.create(userDto);
      const existingUser = await this.userRepository.findOne({
        where: { email: userDto.email },
      });
      if (existingUser) {
        return { message: `User with email ${userDto.email} already exists` };
      }
      await this.userRepository.save(newUser);
      return {
        message: `User created successfully`,
        user: newUser,
      };
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async update(id: number, userDto: UserDto): Promise<UserDto | any | string> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        return;
      }
      const updatedUser = { ...user, ...userDto };
      await this.userRepository.save(updatedUser);
      return updatedUser;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async delete(id: number): Promise<string | string | any> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });
      if (!user) {
        return `User with id ${id} not found`;
      }
      await this.userRepository.delete(id);
      return `User with id ${id} deleted`;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
}
