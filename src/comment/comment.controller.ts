import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentDto } from './dto/comment.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('comments')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll() {
    const comments = await this.commentService.findAll();
    return comments;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CommentDto | string> {
    const comment = await this.commentService.findOne(id);
    return comment;
  }

  @Post()
  async create(@Body() commentDto: CommentDto): Promise<CommentDto> {
    const comment = await this.commentService.create(commentDto);
    return comment;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() commentDto: CommentDto,
  ): Promise<CommentDto | string> {
    const comment = await this.commentService.update(id, commentDto);
    return comment;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const comment = await this.commentService.delete(id);
    return comment;
  }
}
