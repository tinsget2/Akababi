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

  async findAll(): Promise<UserDto[]> {
    const users = await this.userRepository.find({
      relations: ['challenges', 'challenges.participants'],
    });
    if (!users) {
      throw new NotFoundException(`User not found`);
    }
    return users;
  }

  async findOne(id: number): Promise<UserDto | string> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['challenges'],
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async create(userDto: UserDto): Promise<UserDto> {
    const newUser = this.userRepository.create(userDto);
    await this.userRepository.save(newUser);
    return newUser;
  }

  async update(id: number, userDto: UserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return;
    }
    const updatedUser = { ...user, ...userDto };
    await this.userRepository.save(updatedUser);
    return updatedUser;
  }

  async delete(id: number): Promise<string> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return `User with id ${id} not found`;
    }
    await this.userRepository.delete(id);
    return `User with id ${id} deleted`;
  }
}
