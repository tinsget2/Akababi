import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentDto } from './dto/comment.dto';
import { Comment } from './entities/comment.entitiy';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  async findAll(): Promise<CommentDto[]> {
    const comments = await this.commentRepository.find();
    if (!comments) {
      throw new NotFoundException(`Comment not found`);
    }
    return comments;
  }
  async findOne(id: number): Promise<CommentDto | string> {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    return comment;
  }

  async create(commentDto: CommentDto): Promise<CommentDto> {
    const newComment = this.commentRepository.create(commentDto);
    await this.commentRepository.save(newComment);
    return newComment;
  }

  async update(
    id: number,
    commentDto: CommentDto,
  ): Promise<CommentDto | string> {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    const updatedComment = { ...comment, ...commentDto };
    await this.commentRepository.save(updatedComment);
    return updatedComment;
  }

  async delete(id: number): Promise<string> {
    const comment = await this.commentRepository.findOne({ where: { id } });
    if (!comment) {
      throw new NotFoundException(`Comment with id ${id} not found`);
    }
    await this.commentRepository.delete(id);
    return `Comment with id ${id} deleted`;
  }
}
