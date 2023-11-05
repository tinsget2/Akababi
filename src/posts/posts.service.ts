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
    const newPost = this.postRepository.create(createPostDto);
    return this.postRepository.save(newPost);
  }

  async findAll() {
    const posts = await this.postRepository.find();
    if (!posts) {
      return new NotAcceptableException('No posts found');
    }
    return posts;
  }

  async findOne(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      return new NotAcceptableException(`Post with id ${id} not found`);
    }
    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
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
  }

  async remove(id: number) {
    const post = await this.postRepository.findOne({ where: { id } });
    if (!post) {
      return new NotAcceptableException(`Post with id ${id} not found`);
    }
    await this.postRepository.delete(id);
    return {
      message: 'Post deleted',
    };
  }
}
