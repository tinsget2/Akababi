import { Test, TestingModule } from '@nestjs/testing';
import { ChallengephotolikeService } from './challengephotolike.service';

describe('ChallengephotolikeService', () => {
  let service: ChallengephotolikeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallengephotolikeService],
    }).compile();

    service = module.get<ChallengephotolikeService>(ChallengephotolikeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
