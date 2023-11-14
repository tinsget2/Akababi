import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    try {
      const newPost = this.postRepository.create(createPostDto);
      return this.postRepository.save(newPost);
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async findAll() {
    try {
      const posts = await this.postRepository.find();
      if (!posts) {
        return new NotAcceptableException('No posts found');
      }
      return posts;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async findOne(id: number) {
    try {
      const post = await this.postRepository.findOne({ where: { id } });
      if (!post) {
        return new NotAcceptableException(`Post with id ${id} not found`);
      }
      return post;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    try {
      const post = await this.postRepository.findOne({ where: { id } });
      if (!post) {
        return new NotAcceptableException(`Post with id ${id} not found`);
      }
      const updatedPost = { ...post, ...updatePostDto };
      await this.postRepository.save(updatedPost);
      return {
        message: 'Post updated',
        updatedPost,
      };
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async remove(id: number) {
    try {
      const post = await this.postRepository.findOne({ where: { id } });
      if (!post) {
        return new NotAcceptableException(`Post with id ${id} not found`);
      }
      await this.postRepository.delete(id);
      return {
        message: 'Post deleted',
      };
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
}
