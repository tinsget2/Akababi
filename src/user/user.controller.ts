import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'Return all users.' })
  async findAll(): Promise<UserDto[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully created.',
  })
  async create(@Body() userDto: UserDto): Promise<UserDto> {
    const newUser = await this.userService.create(userDto);
    return newUser;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, description: 'Return user by id.' })
  async findOne(@Param('id') id: number): Promise<UserDto | string> {
    const user = await this.userService.findOne(id);
    return user;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by id' })
  @ApiResponse({ status: 200, description: 'Return user updated.' })
  async update(
    @Param('id') id: number,
    userDto: UserDto,
  ): Promise<UserDto | string> {
    const updatedUser = await this.userService.update(id, userDto);
    return updatedUser;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by id' })
  @ApiResponse({ status: 200, description: 'Return user deleted.' })
  async delete(@Param('id') id: number): Promise<string> {
    const deletedUser = await this.userService.delete(id);
    return deletedUser;
  }
}
