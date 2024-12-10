import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  async createPost(
      @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<Post> {
    return this.postsService.create(createPostInput);
  }

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postsService.findAll();
  }

  @Query(() => Post)
  async post(@Args('id') id: string): Promise<Post> {
    return this.postsService.findOne(id);
  }
}