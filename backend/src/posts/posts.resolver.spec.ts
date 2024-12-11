import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';

const mockPostsService = {
  create: jest.fn().mockResolvedValue({
    title: 'Test Post',
    content: 'Test Content',
    author: 'Test Author',
  }),
  findAll: jest.fn().mockResolvedValue([
    { title: 'Test Post', content: 'Test Content', author: 'Test Author' },
  ]),
};

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsResolver,
        { provide: PostsService, useValue: mockPostsService },
      ],
    }).compile();

    resolver = module.get<PostsResolver>(PostsResolver);
    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should call PostsService.create when creating a post', async () => {
    const createPostInput = {
      title: 'Test Post',
      content: 'Test Content',
      author: 'Test Author',
    };

    const result = await resolver.createPost(createPostInput);
    expect(result).toEqual({
      title: 'Test Post',
      content: 'Test Content',
      author: 'Test Author',
    });
    expect(service.create).toHaveBeenCalledWith(createPostInput);
  });

  it('should return all posts', async () => {
    const result = await resolver.posts();
    expect(result).toEqual([
      { title: 'Test Post', content: 'Test Content', author: 'Test Author' },
    ]);
    expect(service.findAll).toHaveBeenCalled();
  });
});
