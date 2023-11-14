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

  async findAll(): Promise<CommentDto[] | any> {
    try {
      const comments = await this.commentRepository.find();
      if (!comments) {
        throw new NotFoundException(`Comment not found`);
      }
      return comments;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
  async findOne(id: number): Promise<CommentDto | any> {
    try {
      const comment = await this.commentRepository.findOne({ where: { id } });
      if (!comment) {
        throw new NotFoundException(`Comment with id ${id} not found`);
      }
      return comment;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async create(commentDto: CommentDto): Promise<CommentDto | any> {
    try {
      const newComment = this.commentRepository.create(commentDto);
      await this.commentRepository.save(newComment);
      return newComment;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async update(
    id: number,
    commentDto: CommentDto,
  ): Promise<CommentDto | string | any> {
    try {
      const comment = await this.commentRepository.findOne({ where: { id } });
      if (!comment) {
        throw new NotFoundException(`Comment with id ${id} not found`);
      }
      const updatedComment = { ...comment, ...commentDto };
      await this.commentRepository.save(updatedComment);
      return updatedComment;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async delete(id: number): Promise<string | any> {
    try {
      const comment = await this.commentRepository.findOne({ where: { id } });
      if (!comment) {
        throw new NotFoundException(`Comment with id ${id} not found`);
      }
      await this.commentRepository.delete(id);
      return `Comment with id ${id} deleted`;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
}
