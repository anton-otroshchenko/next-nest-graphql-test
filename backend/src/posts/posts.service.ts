import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  constructor(
      @InjectRepository(Post)
      private readonly postRepository: Repository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: string): Promise<Post | null> {
    return this.postRepository.findOne({
      where: { id },
    });
  }

  async create(createPostInput: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create({
      ...createPostInput,
      createdAt: new Date().toISOString(),
    });
    return this.postRepository.save(newPost);
  }
}
